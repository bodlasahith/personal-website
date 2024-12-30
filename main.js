import * as THREE from "https://unpkg.com/three@0.159.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.159.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.159.0/examples/jsm/loaders/GLTFLoader.js";

// --------------------------- //
// ---- ENVIRONMENT SETUP ---- //
// --------------------------- //

const scene = new THREE.Scene();
const scenePanelBackground = new THREE.TextureLoader().load("./images/background.png");
scene.background = scenePanelBackground;

const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.set(0, 750, 0);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

//----------------//
//--- GREETING ---//
//----------------//

const backgroundTexture = new THREE.TextureLoader().load("./images/panel.png");

const circle = new THREE.CylinderGeometry(350, 350, 20, 250);
const circleMesh = new THREE.MeshLambertMaterial({ map: backgroundTexture });
const platform = new THREE.Mesh(circle, circleMesh);
const platformEdges = new THREE.EdgesGeometry(circle);
const platformLines = new THREE.LineSegments(
  platformEdges,
  new THREE.LineBasicMaterial({ color: "#008B8B" })
);

const titleTexture = new THREE.TextureLoader().load("./images/title.png");
const titleGeo = new THREE.CircleGeometry(350, 100);
const titleMesh = new THREE.MeshLambertMaterial({ map: titleTexture });
titleMesh.alphaHash = 1;
const title = new THREE.Mesh(titleGeo, titleMesh);
title.position.set(0, 20, 0);
title.rotation.x = -Math.PI / 2;

const titleSpotLight = new THREE.SpotLight(0xffffff, 100, 800, Math.PI / 4, 1, 0.4);
titleSpotLight.position.set(0, 450, 0);

const observationTitleTexture = new THREE.TextureLoader().load("./images/observation.png");
const observationTitleGeo = new THREE.PlaneGeometry(250, 105);
const observationTitleMesh = new THREE.MeshLambertMaterial({
  map: observationTitleTexture,
});
observationTitleMesh.alphaHash = 1;
const observationTitle = new THREE.Mesh(observationTitleGeo, observationTitleMesh);
observationTitle.position.set(0, 20, 280);
observationTitle.rotation.x = -Math.PI / 2;

//--------------//
//--- PANELS ---//
//--------------//

const bottomLight = new THREE.PointLight(0xffffff, 1000, 0, 1);
bottomLight.position.set(0, -60, 0);
scene.add(bottomLight);

const startingIconGeo = new THREE.OctahedronGeometry(15, 0);
const startingIconMesh = new THREE.MeshLambertMaterial({ color: "cyan" });
const startingIcon = new THREE.Mesh(startingIconGeo, startingIconMesh);
startingIcon.position.set(0, 150, -500);

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

const panel1titleTexture = new THREE.TextureLoader().load("./images/panel1title.png");
const panel1titleGeo = new THREE.PlaneGeometry(235, 65);
const panel1titleMesh = new THREE.MeshLambertMaterial({
  map: panel1titleTexture,
});
panel1titleMesh.alphaHash = 1;
const panel1title = new THREE.Mesh(panel1titleGeo, panel1titleMesh);
panel1title.position.set(0, 60, -506);
panel1title.rotateY(Math.PI);

const panel1captionTexture = new THREE.TextureLoader().load("./images/panel1caption.png");
const panel1captionGeo = new THREE.PlaneGeometry(160, 100);
const panel1captionMesh = new THREE.MeshLambertMaterial({
  map: panel1captionTexture,
});
panel1captionMesh.alphaHash = 1;
const panel1caption = new THREE.Mesh(panel1captionGeo, panel1captionMesh);
panel1caption.position.set(50, -20, -506);
panel1caption.rotateY(Math.PI);

const sahithTexture = new THREE.TextureLoader().load("./images/sahith.png");
const sahith = new THREE.Mesh(
  new THREE.CircleGeometry(45, 50),
  new THREE.MeshLambertMaterial({ map: sahithTexture })
);
sahith.position.set(-80, -15, -506);
sahith.rotateY(Math.PI);

const sahithBitmojiTexture = new THREE.TextureLoader().load("./images/sahithbitmoji.png");
const sahithBitmojiGeo = new THREE.CircleGeometry(45, 50);
const sahithBitmojiMesh = new THREE.MeshLambertMaterial({
  map: sahithBitmojiTexture,
});
sahithBitmojiMesh.alphaHash = 1;
const sahithBitmoji = new THREE.Mesh(sahithBitmojiGeo, sahithBitmojiMesh);
sahithBitmoji.position.set(-80, -15, -505.5);
sahithBitmoji.rotateY(Math.PI);

const baseGeo = new THREE.CylinderGeometry(20, 15, 10, 64);
const baseMesh = new THREE.MeshLambertMaterial({ map: backgroundTexture });
const base = new THREE.Mesh(baseGeo, baseMesh);
base.position.set(100, -70, -565);
const baseEdges = new THREE.EdgesGeometry(baseGeo);
const baseLines = new THREE.LineSegments(
  baseEdges,
  new THREE.LineBasicMaterial({ color: "#008B8B" })
);
baseLines.position.set(100, -70, -565);

const baseLight = new THREE.PointLight(0xffffff, 2000, 0, 1.5);
baseLight.position.set(100, -60, -565);

const panel1content = new THREE.Group();
panel1content.add(
  panel1title,
  sahith,
  sahithBitmoji,
  panel1caption,
  base,
  baseLines,
  baseLight
);

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

const panel2titleTexture = new THREE.TextureLoader().load("./images/panel2title.png");
const panel2titleGeo = new THREE.PlaneGeometry(235, 65);
const panel2titleMesh = new THREE.MeshLambertMaterial({
  map: panel2titleTexture,
});
panel2titleMesh.alphaHash = 1;
const panel2title = new THREE.Mesh(panel2titleGeo, panel2titleMesh);
panel2title.position.set(-438, 60, -255);
panel2title.rotateY((-2 * Math.PI) / 3);

const panel2captionTexture = new THREE.TextureLoader().load("./images/panel2caption.png");
const panel2captionGeo = new THREE.PlaneGeometry(170, 120);
const panel2captionMesh = new THREE.MeshLambertMaterial({
  map: panel2captionTexture,
});
panel2captionMesh.alphaHash = 1;
const panel2caption = new THREE.Mesh(panel2captionGeo, panel2captionMesh);
panel2caption.position.set(-425, -20, -275);
panel2caption.rotateY((-2 * Math.PI) / 3);

const downloadIconTexture = new THREE.TextureLoader().load("./images/download.png");
const downloadIconGeo = new THREE.CircleGeometry(30, 50);
const downloadIconMesh = new THREE.MeshLambertMaterial({
  map: downloadIconTexture,
});
downloadIconMesh.alphaHash = 1;
const downloadIcon = new THREE.Mesh(downloadIconGeo, downloadIconMesh);
downloadIcon.position.set(-480, -15, -185);
downloadIcon.rotateY((-2 * Math.PI) / 3);

const downloadCaptionTexture = new THREE.TextureLoader().load("./images/downloadcaption.png");
const downloadCaptionGeo = new THREE.PlaneGeometry(45, 15);
const downloadCaptionMesh = new THREE.MeshLambertMaterial({
  map: downloadCaptionTexture,
});
downloadCaptionMesh.alphaHash = 1;
const downloadCaption = new THREE.Mesh(downloadCaptionGeo, downloadCaptionMesh);
downloadCaption.position.set(-480, -55, -185);
downloadCaption.rotateY((-2 * Math.PI) / 3);

const panel2content = new THREE.Group();
panel2content.add(panel2title, downloadIcon, panel2caption, downloadCaption);

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

const panel3titleTexture = new THREE.TextureLoader().load("./images/panel3title.png");
const panel3titleGeo = new THREE.PlaneGeometry(235, 65);
const panel3titleMesh = new THREE.MeshLambertMaterial({
  map: panel3titleTexture,
});
panel3titleMesh.alphaHash = 1;
const panel3title = new THREE.Mesh(panel3titleGeo, panel3titleMesh);
panel3title.position.set(-438, 60, 255);
panel3title.rotateY((-1 * Math.PI) / 3);

const panel3captionTexture = new THREE.TextureLoader().load("./images/panel3caption.png");
const panel3captionGeo = new THREE.PlaneGeometry(225, 120);
const panel3captionMesh = new THREE.MeshLambertMaterial({
  map: panel3captionTexture,
});
panel3captionMesh.alphaHash = 1;
const panel3caption = new THREE.Mesh(panel3captionGeo, panel3captionMesh);
panel3caption.position.set(-440, -25, 250);
panel3caption.rotateY((-1 * Math.PI) / 3);

const panel3content = new THREE.Group();
panel3content.add(panel3title, panel3caption);

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

const panel4titleTexture = new THREE.TextureLoader().load("./images/panel4title.png");
const panel4titleGeo = new THREE.PlaneGeometry(235, 65);
const panel4titleMesh = new THREE.MeshLambertMaterial({
  map: panel4titleTexture,
});
panel4titleMesh.alphaHash = 1;
const panel4title = new THREE.Mesh(panel4titleGeo, panel4titleMesh);
panel4title.position.set(0, 60, 506);

const panel4captionTexture = new THREE.TextureLoader().load("./images/hobbies.png");
const panel4captionGeo = new THREE.PlaneGeometry(170, 100);
const panel4captionMesh = new THREE.MeshLambertMaterial({
  map: panel4captionTexture,
});
panel4captionMesh.alphaHash = 1;
const panel4caption = new THREE.Mesh(panel4captionGeo, panel4captionMesh);
panel4caption.position.set(-50, -20, 506);

const panel4content = new THREE.Group();
panel4content.add(panel4title, panel4caption);

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

const panel5titleTexture = new THREE.TextureLoader().load("./images/panel5title.png");
const panel5titleGeo = new THREE.PlaneGeometry(235, 65);
const panel5titleMesh = new THREE.MeshLambertMaterial({
  map: panel5titleTexture,
});
panel5titleMesh.alphaHash = 1;
const panel5title = new THREE.Mesh(panel5titleGeo, panel5titleMesh);
panel5title.position.set(438, 60, 255);
panel5title.rotateY(Math.PI / 3);
scene.add(panel5title);

const illinoisTexture = new THREE.TextureLoader().load("./images/illinois.png");
const illinoisGeo = new THREE.PlaneGeometry(57, 83);
const illinoisMesh = new THREE.MeshLambertMaterial({ map: illinoisTexture });
illinoisMesh.alphaHash = 1;
const illinois = new THREE.Mesh(illinoisGeo, illinoisMesh);
illinois.position.set(405, -10, 310);
illinois.rotateY(Math.PI / 3);
illinois.userData = { URL: "https://cs.illinois.edu/" };
scene.add(illinois);

const illinoisCaptionTexture = new THREE.TextureLoader().load("./images/illinoiscaption.png");
const illinoisCaptionGeo = new THREE.PlaneGeometry(147, 49);
const illinoisCaptionMesh = new THREE.MeshLambertMaterial({
  map: illinoisCaptionTexture,
});
illinoisCaptionMesh.alphaHash = 1;
const illinoisCaption = new THREE.Mesh(illinoisCaptionGeo, illinoisCaptionMesh);
illinoisCaption.position.set(405, -75, 310);
illinoisCaption.rotateY(Math.PI / 3);
scene.add(illinoisCaption);

const courseworkTexture = new THREE.TextureLoader().load("./images/coursework.png");
const courseworkGeo = new THREE.PlaneGeometry(175, 116);
const courseworkMesh = new THREE.MeshLambertMaterial({
  map: courseworkTexture,
});
courseworkMesh.alphaHash = 1;
const coursework = new THREE.Mesh(courseworkGeo, courseworkMesh);
coursework.position.set(470, -20, 200);
coursework.rotateY(Math.PI / 3);

const panel5Content = new THREE.Group();
panel5Content.add(panel5title, illinois, illinoisCaption, coursework);

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

const panel6titleTexture = new THREE.TextureLoader().load("./images/panel6title.png");
const panel6titleGeo = new THREE.PlaneGeometry(235, 65);
const panel6titleMesh = new THREE.MeshLambertMaterial({
  map: panel6titleTexture,
});
panel6titleMesh.alphaHash = 1;
const panel6title = new THREE.Mesh(panel6titleGeo, panel6titleMesh);
panel6title.position.set(438, 60, -255);
panel6title.rotateY((2 * Math.PI) / 3);

const panel6captionTexture = new THREE.TextureLoader().load("./images/panel6caption.png");
const panel6captionGeo = new THREE.PlaneGeometry(235, 65);
const panel6captionMesh = new THREE.MeshLambertMaterial({
  map: panel6captionTexture,
});
panel6captionMesh.alphaHash = 1;
const panel6caption = new THREE.Mesh(panel6captionGeo, panel6captionMesh);
panel6caption.position.set(438, -60, -255);
panel6caption.rotateY((2 * Math.PI) / 3);

const gmailTexture = new THREE.TextureLoader().load("./images/gmail.png");
const gmailGeo = new THREE.CircleGeometry(30, 50);
const gmailMesh = new THREE.MeshLambertMaterial({ map: gmailTexture });
gmailMesh.alphaHash = 1;
const gmail = new THREE.Mesh(gmailGeo, gmailMesh);
gmail.position.set(436, 5, -255);
gmail.rotateY((2 * Math.PI) / 3);
gmail.userData = { URL: "mailto:bodlasahith@gmail.com" };

const linkedinTexture = new THREE.TextureLoader().load("./images/linkedin.png");
const linkedinGeo = new THREE.CircleGeometry(30, 50);
const linkedinMesh = new THREE.MeshLambertMaterial({ map: linkedinTexture });
linkedinMesh.alphaHash = 1;
const linkedin = new THREE.Mesh(linkedinGeo, linkedinMesh);
linkedin.position.set(471, 5, -195);
linkedin.rotateY((2 * Math.PI) / 3);
linkedin.userData = {
  URL: "https://www.linkedin.com/in/sahith-bodla-a9791120b/",
};

const githubTexture = new THREE.TextureLoader().load("./images/github.png");
const githubGeo = new THREE.CircleGeometry(30, 50);
const githubMesh = new THREE.MeshLambertMaterial({ map: githubTexture });
githubMesh.alphaHash = 1;
const github = new THREE.Mesh(githubGeo, githubMesh);
github.position.set(402, 5, -315);
github.rotateY((2 * Math.PI) / 3);
github.userData = { URL: "https://github.com/bodlasahith" };

const panel6content = new THREE.Group();
panel6content.add(panel6title, gmail, linkedin, github, panel6caption);

const panels = new THREE.Group();
panels.add(panel1, panel2, panel3, panel4, panel5, panel6);
scene.add(panels);

const panelLines = new THREE.Group();
panelLines.add(
  startingIcon,
  panel1Lines,
  panel2Lines,
  panel3Lines,
  panel4Lines,
  panel5Lines,
  panel6Lines
);
scene.add(panelLines);

const panelsContent = new THREE.Group();
panelsContent.add(
  panel1content,
  panel2content,
  panel3content,
  panel4content,
  panel5Content,
  panel6content
);
scene.add(panelsContent);

const panelSpotLight = new THREE.SpotLight(0xffffff, 1000, 350, Math.PI / 6, 0, 0.5);
panelSpotLight.position.set(0, 0, -800);
const targetObject = new THREE.Object3D();
targetObject.position.set(0, 0, 0);
panelSpotLight.target = targetObject;

const panelLight = new THREE.PointLight(0xffffff, 2000, 0, 1.5);
panelLight.position.set(0, -100, -510);

const panelLights = new THREE.Group();
panelLights.add(panelLight, panelSpotLight);
scene.add(panelLights);

//--------------------//
//--- CLICK EVENTS ---//
//--------------------//

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
  new THREE.Vector3(0, 0, -675),
  new THREE.Vector3(-585, 0, -337.5),
  new THREE.Vector3(-585, 0, 337.5),
  new THREE.Vector3(0, 0, 675),
  new THREE.Vector3(585, 0, 337.5),
  new THREE.Vector3(585, 0, -337.5),
];

const originalMaterials = new Map();

function onPanelsHover(event) {
  event.preventDefault();

  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(
    [
      ...panels.children,
      startingIcon,
      observation,
      platform,
      sahith,
      sahithBitmoji,
      downloadIcon,
      linkedin,
      gmail,
      github,
    ],
    true
  );

  const panelIntersects = raycaster.intersectObjects(panels.children, true);
  const backgroundTexture2 = new THREE.TextureLoader().load("./images/panel2.png");

  if (panelIntersects.length > 0) {
    let hoveredObject = panelIntersects[0].object;
    hoveredObject.traverse((child) => {
      if (child.isMesh) {
        if (!originalMaterials.has(child)) {
          originalMaterials.set(child, child.material);
        }
        child.material = new THREE.MeshLambertMaterial({ map: backgroundTexture2 });
      }
    });
  } else {
    originalMaterials.forEach((material, mesh) => {
      mesh.material = material;
    });
    originalMaterials.clear();
  }
}

document.addEventListener("mousemove", onPanelsHover, false);

function onPanelsClick(event) {
  event.preventDefault();

  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(
    [
      ...panels.children,
      startingIcon,
      observation,
      platform,
      sahith,
      sahithBitmoji,
      downloadIcon,
      linkedin,
      gmail,
      github,
    ],
    true
  );

  if (intersects.length > 0) {
    let clickedObject = intersects[0].object;

    if (clickedObject === observation) {
      isObservationMode = !isObservationMode;
      toggleAmbientLight();
    } else if (clickedObject === startingIcon) {
      if (!clickEnabled) return;

      panelLight.position.copy(panelLightPositions[0]);
      panelSpotLight.position.copy(panelSpotLightPositions[0]);

      startingIconCameraAnimation(cameraPositions[0]);
    } else if (clickedObject === platform) {
      if (!clickEnabled) return;

      startingIconCameraAnimation(new THREE.Vector3(0, 750, 0));
    } else if (clickedObject === sahith) {
      sahith.position.set(-80, -15, -500);
    } else if (clickedObject === sahithBitmoji) {
      sahith.position.set(-80, -15, -506);
    } else if (
      clickedObject === linkedin ||
      clickedObject === gmail ||
      clickedObject === github
    ) {
      window.open(clickedObject.userData.URL);
    } else if (clickedObject === downloadIcon) {
      onObjectClicked(event);
    } else {
      if (!clickEnabled) return;

      const clickedPanelIndex = panels.children.indexOf(clickedObject);
      const clickedPanelPosition = cameraPositions[clickedPanelIndex];

      panelLight.position.copy(panelLightPositions[clickedPanelIndex]);
      panelSpotLight.position.copy(panelSpotLightPositions[clickedPanelIndex]);

      startingIconCameraAnimation(clickedPanelPosition);
    }
  }
}
document.addEventListener("mousedown", onPanelsClick, false);

let isAnimatingCamera = false;
let targetPosition = new THREE.Vector3();
let clickEnabled = true;

function startingIconCameraAnimation(target) {
  if (!isAnimatingCamera) {
    isAnimatingCamera = true;
    clickEnabled = false;
    camera.lookAt(0, 0, 0);
    targetPosition.copy(target);
    animateCamera();
  }
}

function onObjectClicked(event) {
  const downloadLink = document.createElement("a");
  downloadLink.href = "./Resume.pdf";
  downloadLink.download = "sahithb_resume.pdf";

  document.body.appendChild(downloadLink);

  downloadLink.click();
  document.body.removeChild(downloadLink);
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

//-----------------//
//--- PARTICLES ---//
//-----------------//

function addNumber() {
  const zeroTexture = new THREE.TextureLoader().load("./images/zero.png");
  const zeroGeo = new THREE.PlaneGeometry(2, 5);
  const zeroMesh = new THREE.MeshBasicMaterial({ map: zeroTexture });
  zeroMesh.alphaHash = 1;
  const zero = new THREE.Mesh(zeroGeo, zeroMesh);

  const oneTexture = new THREE.TextureLoader().load("./images/one.png");
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
observation.position.set(23, 50, 28);
scene.add(observation);

const intro = new THREE.Group();
intro.add(title, observationTitle, platform, platformLines, observation, titleSpotLight);
scene.add(intro);

let isObservationMode = false;
let orbitRadius = 750;
let bobRadius = 500;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    isObservationMode = false;
    toggleAmbientLight();
  }
});

//-----------------//
//--- ANIMATION ---//
//-----------------//

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

  if (isObservationMode) {
    panels.rotation.x += 0.005;
    panels.rotation.y += 0.005;
    panels.rotation.z += 0.005;

    panelLines.rotation.x += 0.005;
    panelLines.rotation.y += 0.005;
    panelLines.rotation.z += 0.005;

    intro.rotation.x -= 0.005;
    intro.rotation.y -= 0.005;
    intro.rotation.z -= 0.005;

    panelsContent.rotation.x += 0.005;
    panelsContent.rotation.y += 0.005;
    panelsContent.rotation.z += 0.005;

    panelLights.rotation.x += 0.005;
    panelLights.rotation.y += 0.005;
    panelLights.rotation.z += 0.005;

    controls.update();
    renderer.render(scene, camera);
  } else {
    panels.rotation.x = 0;
    panels.rotation.y = 0;
    panels.rotation.z = 0;

    panelLines.rotation.x = 0;
    panelLines.rotation.y = 0;
    panelLines.rotation.z = 0;

    intro.rotation.x = 0;
    intro.rotation.y = 0;
    intro.rotation.z = 0;

    panelsContent.rotation.x = 0;
    panelsContent.rotation.y = 0;
    panelsContent.rotation.z = 0;

    panelLights.rotation.x = 0;
    panelLights.rotation.y = 0;
    panelLights.rotation.z = 0;

    controls.update();
    renderer.render(scene, camera);
  }

  startingIcon.rotateY(0.01);
  startingIcon.position.y = 150 + Math.sin(Date.now() * 0.001) * 5;
  observation.rotateY(-0.01);
  observation.position.y = 50 + Math.sin(Date.now() * 0.001) * 5;
  sahith.position.y = -15 + Math.sin(Date.now() * 0.001);
  sahithBitmoji.position.y = -15 + Math.sin(Date.now() * 0.001);
  downloadIcon.position.y = -15 + Math.sin(Date.now() * 0.001);
  base.position.y = -70 + Math.sin(Date.now() * 0.001);
  baseLines.position.y = -70 + Math.sin(Date.now() * 0.001);

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

animateTitle("Greetings!");

//-------------------//
//-----  MODELS -----//
//-------------------//\

function addEdges(object) {
  object.traverse((child) => {
    if (child.isMesh) {
      const edges = new THREE.EdgesGeometry(child.geometry);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: "#008B8B" })
      );
      child.add(line);
    }
  });
}

function createCopies(object, arrow_positions, angles) {
  arrow_positions.forEach((position) => {
    const copy = object.clone()
    copy.scale.set(25, 25, 25);
    copy.position.set(position.x, position.y, position.z);
    copy.rotateY(angles[arrow_positions.indexOf(position)]);

    const matrixMaterial = new THREE.MeshBasicMaterial({ map: backgroundTexture });
    copy.traverse((child) => {
      if (child.isMesh) {
        child.material = matrixMaterial;
      }
    });
    addEdges(copy);
    scene.add(copy);
  });
}

const arrow_positions = [
  new THREE.Vector3(-250, -120, -433),
  new THREE.Vector3(-500, -120, 0),
  new THREE.Vector3(-250, -120, 433),
  new THREE.Vector3(250, -120, 433),
  new THREE.Vector3(500, -120, 0),
  new THREE.Vector3(250, -120, -433),
];

const angles = [
  2 * Math.PI / 3,
  Math.PI,
  -2 * Math.PI / 3,
  -Math.PI / 3,
  0,
  Math.PI / 3,
]

const loader = new GLTFLoader();
loader.load("blender-models/arrow.glb", (gltf) => {
  const arrow = gltf.scene;
  createCopies(arrow, arrow_positions, angles);

  arrow.scale.set(25, 25, 25);
  arrow.position.set(110, 0, -400);
  arrow.rotateZ(Math.PI / 2);

  const matrixMaterial = new THREE.MeshLambertMaterial({ map: backgroundTexture });
  arrow.traverse((child) => {
    if (child.isMesh) {
      child.material = matrixMaterial;
    }
  });

  addEdges(arrow);
  scene.add(arrow);
}, undefined, (error) => {
  console.error(error);
});

var stick_figure; 
loader.load("blender-models/stick_figure.glb", (gltf) => {
  stick_figure = gltf.scene;

  stick_figure.scale.set(5, 5, 5);
  stick_figure.position.set(100, -65, -565);
  stick_figure.rotateY(Math.PI / 2);
  
  const matrixMaterial = new THREE.MeshLambertMaterial({ map: backgroundTexture });
  stick_figure.traverse((child) => {
    if (child.isMesh) {
      child.material = matrixMaterial;
    }
  });
  
  // addEdges(stick_figure);
  scene.add(stick_figure);
}, undefined, (error) => {
  console.error(error);
});
