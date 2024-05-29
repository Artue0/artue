import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { LineMaterial } from "three/examples/jsm/lines/LineMaterial";
// import { LineGeometry } from "three/examples/jsm/lines/LineGeometry";
// import { Line2 } from "three/examples/jsm/lines/Line2";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import './assets/FoundryGridnik-Regular.ttf';

import './script.js';
import { home, about, projects, portfolio, contact, music, games, savedImage, navTop } from './script.js';
// home(document.getElementById('iconPc').querySelector('i'));
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('iconPc').addEventListener('click', function() {home();});
    document.getElementById('pcContainer').addEventListener('click', function() {home();});

    document.getElementById('iconCats').addEventListener('click', function() {about();});
    document.getElementById('catContainer').addEventListener('click', function() {about();});

    document.getElementById('iconProjects').addEventListener('click', function() {projects();});
    document.getElementById('projectsContainer').addEventListener('click', function() {projects();});

    document.getElementById('iconWebsite').addEventListener('click', function() {portfolio();});
    document.getElementById('websiteContainer').addEventListener('click', function() {portfolio();});

    document.getElementById('iconLinks').addEventListener('click', function() {contact();});
    document.getElementById('linksContainer').addEventListener('click', function() {contact();});

    document.getElementById('iconMusic').addEventListener('click', function() {music();});
    document.getElementById('musicContainer').addEventListener('click', function() {music();});

    document.getElementById('iconGames').addEventListener('click', function() {games();});
    document.getElementById('gamesContainer').addEventListener('click', function() {games();});

    document.getElementById('button1').addEventListener('click', function() {scrollButton(this);});
    document.getElementById('button2').addEventListener('click', function() {scrollButton(this);});
    document.getElementById('button3').addEventListener('click', function() {scrollButton(this);});
});

const urls = [
    new URL('assets/models/A.glb', import.meta.url),
    new URL('assets/models/R.glb', import.meta.url),
    new URL('assets/models/T.glb', import.meta.url),
    new URL('assets/models/U.glb', import.meta.url),
    new URL('assets/models/E.glb', import.meta.url)
];


// import videoSrc1 from './assets/videos/1.mp4';
// import videoSrc2 from './assets/videos/2.mp4';
// import videoSrc3 from './assets/videos/3.mov';
// import videoSrc4 from './assets/videos/4.mov';
// import videoSrc5 from './assets/videos/5.mov';
// import videoSrc6 from './assets/videos/6.mov';
// import videoSrc7 from './assets/videos/7.mov';
// import videoSrc8 from './assets/videos/8.mov';
// import videoSrc9 from './assets/videos/9.mov';
// import videoSrc10 from './assets/videos/10.mov';
// import videoSrc11 from './assets/videos/11.mov';
// import videoSrc12 from './assets/videos/12.mp4';

const whiteMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
const blackMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

let renderer2 = new THREE.WebGLRenderer({ canvas: document.getElementById('home') });
renderer2.setSize(window.innerWidth, window.innerHeight, false);

let renderer3 = new THREE.WebGLRenderer({ canvas: document.getElementById('about') });
renderer3.setSize(window.innerWidth, window.innerHeight, false);

let renderer4 = new THREE.WebGLRenderer({ canvas: document.getElementById('projects') });
renderer4.setSize(window.innerWidth, window.innerHeight, false);

let renderer5 = new THREE.WebGLRenderer({ canvas: document.getElementById('portfolio') });
renderer5.setSize(window.innerWidth, window.innerHeight, false);
const websiteScene = new THREE.Scene();
const websiteCamera = new THREE.PerspectiveCamera(75, 50 / 34, 0.1, 1000);
const whiteMaterialOutline = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });
const box_geometry2 = new THREE.BoxGeometry(2.03, 2.03, 2.03);
const box2 = new THREE.Mesh(box_geometry2, whiteMaterialOutline);
box2.position.z = -10;
websiteScene.add(box2);

let renderer6 = new THREE.WebGLRenderer({ canvas: document.getElementById('contact') });
renderer6.setSize(window.innerWidth, window.innerHeight, false);

let renderer7 = new THREE.WebGLRenderer({ canvas: document.getElementById('music') });
renderer7.setSize(window.innerWidth, window.innerHeight, false);

let renderer8 = new THREE.WebGLRenderer({ canvas: document.getElementById('games') });
renderer8.setSize(window.innerWidth, window.innerHeight, false);

const track = document.getElementById('image-track');
document.body.appendChild(renderer.domElement);
track.appendChild(renderer2.domElement);
track.appendChild(renderer3.domElement);
track.appendChild(renderer4.domElement);
track.appendChild(renderer5.domElement);
track.appendChild(renderer6.domElement);
track.appendChild(renderer7.domElement);
track.appendChild(renderer8.domElement);
// document.getElementById('bg2').appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);

var scrolled;
const boxes = [];
const frameLinesArray = [];
let changeCanvas = true;
let activeRenderer = null;
let updateRenderers = false;

for (let i = 0; i < 1000; i++) {
    const [x, y, z, x2, y2, z2] = Array(6).fill().map(() => THREE.MathUtils.randFloatSpread(300));
    const [x3, y3, z3] = Array(6).fill().map(() => THREE.MathUtils.randFloatSpread(400));
    const [rot_x, rot_y, rot_z] = Array(3).fill().map(() => Math.random() * 360);
    const scale = Math.random() * (4 - 0.3) + 0.3;
    const star_geometry = new THREE.SphereGeometry(0.2, 24, 24);
    const star = new THREE.Mesh(star_geometry, whiteMaterial);
    const smallStarGeometry = new THREE.SphereGeometry(0.1, 24, 24);
    const smallStar = new THREE.Mesh(smallStarGeometry, whiteMaterial);
    const box_geometry = new THREE.BoxGeometry(2.03, 2.03, 2.03);
    const box = new THREE.Mesh(box_geometry, blackMaterial);

    const frameGeometry = new THREE.BoxGeometry(2, 2, 2);
    const frameEdges = new THREE.EdgesGeometry(frameGeometry);
    const frameLines = new THREE.LineSegments(frameEdges, whiteMaterial);

    frameLines.rotation.set(rot_x, rot_y, rot_z);
    frameLines.scale.set(scale, scale, scale);
    frameLines.position.set(x2, y2, z2);

    frameLines.scale.multiplyScalar(1 + 0.03);

    box.rotation.set(rot_x, rot_y, rot_z);
    box.scale.set(scale, scale, scale);
    box.position.set(x2, y2, z2);

    star.position.set(x, y, z);
    smallStar.position.set(x3, y3, z3);

    scene.add(star, smallStar, box, frameLines);

    const rotationSpeed = Math.random() * 0.005;

    boxes.push({ boxMesh: box, rotationSpeed: rotationSpeed });
    frameLinesArray.push({ linesMesh: frameLines, rotationSpeed: rotationSpeed })
}

const assetLoader = new GLTFLoader();
const models = [];

function loadModelsSequentially(index) {
    if (index >= urls.length) {
        return;
    }
    const url = urls[index];
    assetLoader.load(url.href, function(gltf) {
        const model = gltf.scene.children[0];
        model.rotateX(Math.PI / 2);
        model.scale.set(2,2,2);
        models.push(gltf.scene);
        scene.add(gltf.scene);

        const outlineGeometry = new THREE.EdgesGeometry(model.geometry);
        const outline = new THREE.LineSegments(outlineGeometry, whiteMaterial);
        outline.scale.set(1.03, 1.03, 1.03);
        model.add(outline);

        if (models.length === urls.length) {
            models[0].position.set(-1.7,-100,-153);
            models[1].position.set(-0.75,-100,-153);
            models[2].position.set(0,-100,-153);
            models[3].position.set(0.75,-100,-153);
            models[4].position.set(1.7,-100,-153);
        }
        loadModelsSequentially(index + 1);
    }, undefined, function(error) {
        console.error(error);
        loadModelsSequentially(index + 1);
    });
}
loadModelsSequentially(0);

function updatePos(event) {
    models.forEach((model) => {
        const vector = new THREE.Vector3(model.position.x, model.position.y, model.position.z);
        vector.project(camera);
        const modelCenterX = (vector.x + 1) / 2 * window.innerWidth;
        const modelCenterY = (-vector.y + 1) / 2 * window.innerHeight;

        const mouseX = (event.clientX - modelCenterX) / modelCenterX;
        const mouseY = (event.clientY - modelCenterY) / modelCenterY;

        const horizontalValue = mouseX.toFixed(2) * Math.PI / 2;
        const verticalValue = mouseY.toFixed(2) * Math.PI / 2;

        model.rotation.y = Math.max(Math.min(horizontalValue, Math.PI / 4), Math.PI / -4);
        model.rotation.x = Math.max(Math.min(verticalValue, Math.PI / 4), Math.PI / -4);
    });
}
document.addEventListener('mousemove', updatePos);

camera.rotateX(THREE.MathUtils.degToRad(90));
window.addEventListener('scroll', function() {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var clientHeight = document.documentElement.clientHeight;

    scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

    if (scrolled >= 0 && scrolled <= 30) {
        camera.rotation.x = THREE.MathUtils.degToRad(90 * (1 - scrolled / 30));
    } else if (scrolled > 30 && scrolled <= 60) {
        camera.rotation.x = 0;
        camera.position.y = -100 * (scrolled / 30 - 1);
    } else if (scrolled > 60 && scrolled <= 90) {
        camera.position.y = -100;
        camera.position.z = -150 * (scrolled / 30 - 2);
    } else {
        camera.position.z = -150;
        camera.position.y = -100;
        camera.rotation.x = 0;
    }
});

function animate() {
    requestAnimationFrame(animate);

    boxes.forEach(boxInfo => {
        const { boxMesh, rotationSpeed } = boxInfo;
        boxMesh.rotation.x += rotationSpeed;
        boxMesh.rotation.y += rotationSpeed;
        boxMesh.rotation.z += rotationSpeed;
    });

    frameLinesArray.forEach(linesInfo => {
        const { linesMesh, rotationSpeed } = linesInfo;
        linesMesh.rotation.x += rotationSpeed;
        linesMesh.rotation.y += rotationSpeed;
        linesMesh.rotation.z += rotationSpeed;
    });

    if (savedImage !== 0 && changeCanvas) {
        updateCanvas();
        changeCanvas = false;
        updateRenderers = true;
    }

    if (savedImage === 0){
        changeCanvas = true;
    }

    if(!navTop && updateRenderers){
        setTimeout(function() {
            console.log("UPDATE");
            // switch(true) {
            //     case selectedImage.classList.contains("imgSetup"):
            //         break;
            // }
            renderer.render(scene, camera);
            renderer2.render(scene, websiteCamera);
            renderer3.render(scene, websiteCamera);
            renderer4.render(scene, websiteCamera);
            renderer5.render(scene, camera);
            renderer6.render(scene, websiteCamera);
            renderer7.render(scene, websiteCamera);
            renderer8.render(scene, websiteCamera);
        }, 1150);
        updateRenderers = false;
    }

    if (!document.getElementById("main-page").classList.contains('invisible') && updateRenderers) {
        // updateRenderers = false;
    }

    // renderer.render(scene, camera);
    // renderer5.render(scene, camera);
    if(activeRenderer !== null) {activeRenderer.render(scene, camera);}
}

function updateCanvas() {
    activeRenderer = new THREE.WebGLRenderer({ canvas: savedImage });
}
renderer.render(scene, camera);
renderer2.render(scene, websiteCamera);
renderer3.render(scene, websiteCamera);
renderer4.render(scene, websiteCamera);
renderer5.render(scene, camera);
renderer6.render(scene, websiteCamera);
renderer7.render(scene, websiteCamera);
renderer8.render(scene, websiteCamera);

animate();

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});