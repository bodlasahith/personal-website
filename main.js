import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import One from "/Users/sahithbodla/Documents/CodingProjects/personal-website/images/one.png";
import Zero from "/Users/sahithbodla/Documents/CodingProjects/personal-website/images/zero.png";
import Title from "/Users/sahithbodla/Documents/CodingProjects/personal-website/images/title.png";
import Background from "/Users/sahithbodla/Documents/CodingProjects/personal-website/images/panel.png";

/////////////////////////////
///// ENVIRONMENT SETUP /////
/////////////////////////////

const scene = new THREE.Scene();
const sceneBackground = new THREE.TextureLoader().load("images/matrix_bg.jpg");
scene.background = sceneBackground;

const camera = new THREE.PerspectiveCamera(
  85,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);
camera.position.set(0, 750, 0);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

////////////////////
///// GREETING /////
////////////////////

const backgroundTexture = new THREE.TextureLoader().load(Background);

const circle = new THREE.CylinderGeometry(350, 350, 20, 250);
const circleMesh = new THREE.MeshLambertMaterial({ map: backgroundTexture });
const platform = new THREE.Mesh(circle, circleMesh);
const platformEdges = new THREE.EdgesGeometry(circle);
const platformLines = new THREE.LineSegments(
  platformEdges,
  new THREE.LineBasicMaterial({ color: "#008B8B" })
);
scene.add(platform, platformLines);

const titleTexture = new THREE.TextureLoader().load(Title);
const titleGeo = new THREE.PlaneGeometry(300, 300);
const titleMesh = new THREE.MeshLambertMaterial({ map: titleTexture });
titleMesh.alphaHash = 1;
const title = new THREE.Mesh(titleGeo, titleMesh);
title.position.set(0, 20, 0);
title.rotation.x = -Math.PI / 2;
scene.add(title);

const titleSpotLight = new THREE.SpotLight(
  0xffffff,
  100,
  800,
  Math.PI / 4,
  1,
  0.4
);
titleSpotLight.position.set(0, 450, 0);
scene.add(titleSpotLight);

//////////////////
///// PANELS /////
//////////////////

const bottomLight = new THREE.PointLight(0xffffff, 1000, 0, 1);
bottomLight.position.set(0, -60, 0);
scene.add(bottomLight);

const startGeo = new THREE.OctahedronGeometry(15, 0);
const startMesh = new THREE.MeshLambertMaterial({ color: "cyan" });
const start = new THREE.Mesh(startGeo, startMesh);
start.position.set(0, 150, -500);

const panel1Geo = new THREE.BoxGeometry(280, 200, 10);
const panel1Mesh = new THREE.MeshLambertMaterial({ map: backgroundTexture });
const panel1 = new THREE.Mesh(panel1Geo, panel1Mesh);
panel1.position.set(0, 0, -500);
const panel1Edges = new THREE.EdgesGeometry(panel1Geo);
const panel1Lines = new THREE.LineSegments(
  panel1Edges,
  new THREE.LineBasicMaterial({ color: "#008B8B" })
);
panel1Lines.position.set(0, 0, -500);

const panel2Geo = new THREE.BoxGeometry(280, 200, 10);
const panel2Mesh = new THREE.MeshLambertMaterial({ map: backgroundTexture });
const panel2 = new THREE.Mesh(panel2Geo, panel2Mesh);
panel2.position.set(-433, 0, -250);
panel2.rotateY(Math.PI / 3);
const panel2Edges = new THREE.EdgesGeometry(panel2Geo);
const panel2Lines = new THREE.LineSegments(
  panel2Edges,
  new THREE.LineBasicMaterial({ color: "#008B8B" })
);
panel2Lines.position.set(-433, 0, -250);
panel2Lines.rotateY(Math.PI / 3);

const panel3Geo = new THREE.BoxGeometry(280, 200, 10);
const panel3Mesh = new THREE.MeshLambertMaterial({ map: backgroundTexture });
const panel3 = new THREE.Mesh(panel3Geo, panel3Mesh);
panel3.position.set(-433, 0, 250);
panel3.rotateY((2 * Math.PI) / 3);
const panel3Edges = new THREE.EdgesGeometry(panel3Geo);
const panel3Lines = new THREE.LineSegments(
  panel3Edges,
  new THREE.LineBasicMaterial({ color: "#008B8B" })
);
panel3Lines.position.set(-433, 0, 250);
panel3Lines.rotateY((2 * Math.PI) / 3);

const panel4Geo = new THREE.BoxGeometry(280, 200, 10);
const panel4Mesh = new THREE.MeshLambertMaterial({ map: backgroundTexture });
const panel4 = new THREE.Mesh(panel4Geo, panel4Mesh);
panel4.position.set(0, 0, 500);
const panel4Edges = new THREE.EdgesGeometry(panel4Geo);
const panel4Lines = new THREE.LineSegments(
  panel4Edges,
  new THREE.LineBasicMaterial({ color: "#008B8B" })
);
panel4Lines.position.set(0, 0, 500);

const panel5Geo = new THREE.BoxGeometry(280, 200, 10);
const panel5Mesh = new THREE.MeshLambertMaterial({ map: backgroundTexture });
const panel5 = new THREE.Mesh(panel5Geo, panel5Mesh);
panel5.position.set(433, 0, 250);
panel5.rotateY(Math.PI / 3);
const panel5Edges = new THREE.EdgesGeometry(panel5Geo);
const panel5Lines = new THREE.LineSegments(
  panel5Edges,
  new THREE.LineBasicMaterial({ color: "#008B8B" })
);
panel5Lines.position.set(433, 0, 250);
panel5Lines.rotateY(Math.PI / 3);

const panel6Geo = new THREE.BoxGeometry(280, 200, 10);
const panel6Mesh = new THREE.MeshLambertMaterial({ map: backgroundTexture });
const panel6 = new THREE.Mesh(panel6Geo, panel6Mesh);
panel6.position.set(433, 0, -250);
panel6.rotateY((2 * Math.PI) / 3);
const panel6Edges = new THREE.EdgesGeometry(panel6Geo);
const panel6Lines = new THREE.LineSegments(
  panel6Edges,
  new THREE.LineBasicMaterial({ color: "#008B8B" })
);
panel6Lines.position.set(433, 0, -250);
panel6Lines.rotateY((2 * Math.PI) / 3);

const panels = new THREE.Group();
panels.add(panel1, panel2, panel3, panel4, panel5, panel6);
scene.add(panels);
scene.add(
  start,
  panel1Lines,
  panel2Lines,
  panel3Lines,
  panel4Lines,
  panel5Lines,
  panel6Lines
);

const panelSpotLight = new THREE.SpotLight(
  0xffffff,
  1000,
  350,
  Math.PI / 6,
  0,
  0.5
);
panelSpotLight.position.set(0, 0, -800);

const targetObject = new THREE.Object3D();
targetObject.position.set(0, 0, 0);

panelSpotLight.target = targetObject;
scene.add(panelSpotLight);

const panelLight = new THREE.PointLight(0xffffff, 2000, 0, 1.5);
panelLight.position.set(0, -100, -510);
scene.add(panelLight);

const panelSpotLightPositions = [
  new THREE.Vector3(0, 0, -800),
  new THREE.Vector3(-693, 0, -400),
  new THREE.Vector3(-693, 0, 400),
  new THREE.Vector3(0, 0, 800),
  new THREE.Vector3(693, 0, 400),
  new THREE.Vector3(693, 0, -400),
];

const panelLightPositions = [
  new THREE.Vector3(0, -100, -510),
  new THREE.Vector3(-440, -100, -255),
  new THREE.Vector3(-440, -100, 255),
  new THREE.Vector3(0, -100, 510),
  new THREE.Vector3(440, -100, 255),
  new THREE.Vector3(440, -100, -255),
];

const cameraPositions = [
  new THREE.Vector3(0, 0, -635),
  new THREE.Vector3(-550, 0, -317.5),
  new THREE.Vector3(-550, 0, 317.5),
  new THREE.Vector3(0, 0, 635),
  new THREE.Vector3(550, 0, 317.5),
  new THREE.Vector3(550, 0, -317.5),
];

function onPanelsClick(event) {
  event.preventDefault();

  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(
    [...panels.children, start, observation],
    true
  );

  if (intersects.length > 0) {
    let clickedObject = intersects[0].object;

    if (clickedObject === observation) {
      isObservationMode = !isObservationMode;
      toggleAmbientLight();
    } else if (clickedObject === start) {
      if (!clickEnabled) return;

      panelLight.position.copy(panelLightPositions[0]);
      panelSpotLight.position.copy(panelSpotLightPositions[0]);

      startCameraAnimation(cameraPositions[0]);
    } else {
      if (!clickEnabled) return;

      const clickedPanelIndex = panels.children.indexOf(clickedObject);
      const clickedPanelPosition = cameraPositions[clickedPanelIndex];

      panelLight.position.copy(panelLightPositions[clickedPanelIndex]);
      panelSpotLight.position.copy(panelSpotLightPositions[clickedPanelIndex]);

      startCameraAnimation(clickedPanelPosition);
    }
  }
}
document.addEventListener("mousedown", onPanelsClick, false);

let isAnimatingCamera = false;
let targetPosition = new THREE.Vector3();
let clickEnabled = true;

function startCameraAnimation(target) {
  if (!isAnimatingCamera) {
    isAnimatingCamera = true;
    clickEnabled = false;
    camera.lookAt(0, 0, 0);
    targetPosition.copy(target);
    animateCamera();
  }
}

function animateCamera() {
  const increment = 0.05;

  if (camera.position.distanceTo(targetPosition) > 0.1) {
    const newPosition = camera.position.clone().lerp(targetPosition, increment);
    camera.position.copy(newPosition);
  } else {
    isAnimatingCamera = false;
    clickEnabled = true;
  }

  controls.update();
  renderer.render(scene, camera);

  if (isAnimatingCamera) {
    requestAnimationFrame(animateCamera);
  }
}

/////////////////////
///// PARTICLES /////
/////////////////////

function addNumber() {
  const zeroTexture = new THREE.TextureLoader().load(Zero);
  const zeroGeo = new THREE.PlaneGeometry(2, 5);
  const zeroMesh = new THREE.MeshBasicMaterial({ map: zeroTexture });
  zeroMesh.alphaHash = 1;
  const zero = new THREE.Mesh(zeroGeo, zeroMesh);

  const oneTexture = new THREE.TextureLoader().load(One);
  const oneGeo = new THREE.PlaneGeometry(2, 5);
  const oneMesh = new THREE.MeshBasicMaterial({ map: oneTexture });
  oneMesh.alphaHash = 1;
  const one = new THREE.Mesh(oneGeo, oneMesh);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(2000));
  const [a, b, c] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(2000));
  const angle = Math.random() * Math.PI * 2;

  zero.position.set(x, y, z);
  zero.rotation.set(0, angle, 0);
  one.position.set(a, b, c);
  one.rotation.set(0, angle, 0);
  scene.add(zero);
  scene.add(one);
}
Array(1000).fill().forEach(addNumber);

const observationGeo = new THREE.OctahedronGeometry(15, 0);
const observationMesh = new THREE.MeshLambertMaterial({ color: "deepSkyBlue" });
const observation = new THREE.Mesh(observationGeo, observationMesh);
observation.position.set(30, 50, 15);
scene.add(observation);

let isObservationMode = false;
let orbitRadius = 750;
let bobRadius = 500;

/////////////////////
///// ANIMATION /////
/////////////////////

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  if (isObservationMode) {
    const time = performance.now() * 0.0005;
    const x = Math.cos(time * 0.5) * orbitRadius;
    const y = Math.sin(Date.now() * 0.0005 * 1) * bobRadius;
    const z = Math.sin(time * 0.5) * orbitRadius;

    camera.position.set(x, y, z);
    camera.lookAt(0, 0, 0);
  }

  start.rotateY(0.01);
  start.position.y = 150 + Math.sin(Date.now() * 0.001) * 5;
  observation.rotateY(-0.01);
  observation.position.y = 50 + Math.sin(Date.now() * 0.001) * 5;

  controls.update();
  renderer.render(scene, camera);
}
animate();

let ambientLight;

function toggleAmbientLight() {
  if (isObservationMode) {
    ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);
  } else {
    if (ambientLight) {
      scene.remove(ambientLight);
      ambientLight = null;
    }
  }
}

function recursiveAnimateTitle(string) {
  let firstLetter = string[0];
  let title = document.querySelector("title");
  title.innerHTML += firstLetter;
  if (string.length > 1) {
    setTimeout(function () {
      recursiveAnimateTitle(string.substring(1));
    }, 100);
  }
}

function animateTitle(string) {
  document.querySelector("title").innerHTML = "";
  recursiveAnimateTitle(string);
}

animateTitle("Sahith Bodla!!!!!");
