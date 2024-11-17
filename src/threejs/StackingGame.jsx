import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import * as CANNON from "cannon";

const StackingGame = () => {
  const mountRef = useRef(null);
  const scoreRef = useRef(null);
  const [autopilot, setAutopilot] = useState(true);
  const [gameEnded, setGameEnded] = useState(false);

  let camera, scene, renderer, world, lastTime, stack, overhangs;
  const boxHeight = 1;
  const originalBoxSize = 3;

  useEffect(() => {
    initGame();
    return () => {
      if (renderer) {
        renderer.dispose();
      }
      window.removeEventListener("mousedown", handleEvent);
      window.removeEventListener("touchstart", handleEvent);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const initGame = () => {
    lastTime = 0;
    stack = [];
    overhangs = [];

    // Cannon.js world
    world = new CANNON.World();
    world.gravity.set(0, -10, 0);
    world.broadphase = new CANNON.NaiveBroadphase();
    world.solver.iterations = 40;

    // Three.js scene
    scene = new THREE.Scene();

    // Camera
    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.OrthographicCamera(
      10 / -2,
      10 / 2,
      (10 / aspect) / 2,
      -(10 / aspect) / 2,
      0.1,
      100
    );
    camera.position.set(4, 4, 4);
    camera.lookAt(0, 0, 0);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.innerHTML = ""; // Clear any previous content
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(10, 20, 0);
    scene.add(dirLight);

    // Foundation
    addLayer(0, 0, originalBoxSize, originalBoxSize);
    addLayer(-10, 0, originalBoxSize, originalBoxSize, "x");

    // Start animation loop
    renderer.setAnimationLoop(animation);

    // Event listeners
    window.addEventListener("mousedown", handleEvent);
    window.addEventListener("touchstart", handleEvent);
    window.addEventListener("keydown", handleKeyDown);
  };

  const addLayer = (x, z, width, depth, direction) => {
    const y = boxHeight * stack.length;
    const layer = generateBox(x, y, z, width, depth, false);
    layer.direction = direction;
    stack.push(layer);
  };

  const generateBox = (x, y, z, width, depth, falls) => {
    const geometry = new THREE.BoxGeometry(width, boxHeight, depth);
    const material = new THREE.MeshLambertMaterial({
      color: new THREE.Color(`hsl(${30 + stack.length * 4}, 100%, 50%)`),
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    scene.add(mesh);

    const shape = new CANNON.Box(new CANNON.Vec3(width / 2, boxHeight / 2, depth / 2));
    const body = new CANNON.Body({
      mass: falls ? 5 : 0,
      shape,
    });
    body.position.set(x, y, z);
    world.addBody(body);

    return { threejs: mesh, cannonjs: body, width, depth };
  };

  const handleEvent = () => {
    if (autopilot) {
      startGame();
    } else {
      splitBlockAndAddNextOneIfOverlaps();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === " ") {
      handleEvent();
    } else if (event.key.toLowerCase() === "r") {
      startGame();
    }
  };

  const startGame = () => {
    setAutopilot(false); // Disable autopilot
    setGameEnded(false); // Reset game state
    stack = [];
    overhangs = [];
    if (scoreRef.current) scoreRef.current.innerText = "0";
    while (world.bodies.length > 0) world.remove(world.bodies[0]);
    while (scene.children.find((c) => c.type === "Mesh")) {
      const mesh = scene.children.find((c) => c.type === "Mesh");
      scene.remove(mesh);
    }
    addLayer(0, 0, originalBoxSize, originalBoxSize);
    addLayer(-10, 0, originalBoxSize, originalBoxSize, "x");
  };

  const splitBlockAndAddNextOneIfOverlaps = () => {
    if (gameEnded) return;
    const topLayer = stack[stack.length - 1];
    const previousLayer = stack[stack.length - 2];
    const direction = topLayer.direction;

    const size = direction === "x" ? topLayer.width : topLayer.depth;
    const delta = topLayer.threejs.position[direction] - previousLayer.threejs.position[direction];
    const overhangSize = Math.abs(delta);
    const overlap = size - overhangSize;

    if (overlap > 0) {
      cutBox(topLayer, overlap, size, delta);

      const nextX = direction === "x" ? topLayer.threejs.position.x : -10;
      const nextZ = direction === "z" ? topLayer.threejs.position.z : -10;
      addLayer(nextX, nextZ, topLayer.width, topLayer.depth, direction === "x" ? "z" : "x");
    } else {
      missedTheSpot();
    }
  };

  const cutBox = (topLayer, overlap, size, delta) => {
    const direction = topLayer.direction;
    const newWidth = direction === "x" ? overlap : topLayer.width;
    const newDepth = direction === "z" ? overlap : topLayer.depth;
    topLayer.width = newWidth;
    topLayer.depth = newDepth;

    topLayer.threejs.scale[direction] = overlap / size;
    topLayer.threejs.position[direction] -= delta / 2;
    topLayer.cannonjs.position[direction] -= delta / 2;

    const shape = new CANNON.Box(new CANNON.Vec3(newWidth / 2, boxHeight / 2, newDepth / 2));
    topLayer.cannonjs.shapes = [];
    topLayer.cannonjs.addShape(shape);
  };

  const missedTheSpot = () => {
    setGameEnded(true);
  };

  const animation = (time) => {
    if (lastTime) {
      const timePassed = time - lastTime;
      world.step(1 / 60, timePassed / 1000, 3);
    }
    renderer.render(scene, camera);
    lastTime = time;
  };

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div
        ref={mountRef}
        className="absolute inset-0 flex items-center justify-center"
      ></div>

      {/* Score */}
      <div
        id="score"
        ref={scoreRef}
        className="absolute top-6 right-6 bg-gray-900 bg-opacity-80 text-white p-4 rounded-lg shadow-lg text-2xl font-bold"
      >
        Score: 0
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-80 text-white p-4 rounded-lg shadow-lg text-center">
        <p className="text-sm">
          Press <span className="font-bold">Space</span> to Drop or <span className="font-bold">R</span> to Restart
        </p>
      </div>
    </div>
  );
};

export default StackingGame;
