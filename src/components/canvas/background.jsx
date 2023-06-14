import React, { useEffect } from "react";
import { Gradient } from "../../utils/gradient.js";

const BackgroundComponent = () => {
  // useEffect(() => {
  //   const gradient = new Gradient();
  //   gradient.initGradient("#gradient-canvas");
  // }, []);

  return (
    <div>
      <canvas
        id="gradient-canvas"
        // className="relative w-full h-[70vh] mx-auto"
        data-js-darken-top
        data-transition-in
      />
    </div>
  );
};

export default BackgroundComponent;


// import React, { useEffect, useState } from "react";
// import { Gradient } from "../../utils/gradient.js";
// import * as THREE from "three";
// import OrbitControls from "../../utils/orbit.js";

// const _OrbitControls = new OrbitControls(THREE);
// function BackgroundComponent() {
//   const [showDiv, setShowDiv] = useState(false);

//   const handleClick = () => {
//     setShowDiv(!showDiv);
//   };
//   useEffect(() => {
//     // Function to execute when the app initializes
//     console.log("App initialized");
//     // You can perform any initialization tasks here

//     // const gradient = new Gradient();
//     // gradient.initGradient("#gradient-canvas");
//     // Clean up function (optional)
//     return () => {
//           new Sketch("container");

//       // Clean up tasks (if needed)
//       // const gradient = new Gradient();
//       // gradient.initGradient("#gradient-canvas");
//     };
//   }, []);

//   return (
//     // <div>
//     //   <canvas
//     //     id="gradient-canvas"
//     //     className="relative w-full h-screen mx-auto"
//     //     data-js-darken-top
//     //     data-transition-in
//     //   />
//     // </div>

//           <div id="container"></div>

//   );
// }

// class Sketch {
//   constructor(selector) {
//     this.scene = new THREE.Scene();

//     this.renderer = new THREE.WebGLRenderer();

//     this.renderer.setPixelRatio(window.devicePixelRatio);
//     this.renderer.setSize(window.innerWidth, window.innerWidth);
//     this.renderer.setClearColor(0xeeeeee, 1);

//     this.container = document.getElementById("container");
//     this.container.appendChild(this.renderer.domElement);

//     // this.camera = new THREE.PerspectiveCamera(
//     //   70,
//     //   window.innerWidth / window.innerHeight,
//     //   0.001, 1000
//     // );

//     var frustumSize = 10;
//     var aspect = window.innerWidth / window.innerHeight;
//     this.camera = new THREE.OrthographicCamera(
//       (frustumSize * aspect) / -2,
//       (frustumSize * aspect) / 2,
//       frustumSize / 2,
//       frustumSize / -2,
//       -1000,
//       1000
//     );

//     this.camera.position.set(0, 0, 4);
//     this.camera.position.set(
//       13.684753056578113,
//       -13.182186046164112,
//       10.5066061768662773
//     );
//     this.camera.position.set(1, 1, 0);
//     this.camera.lookAt(0, 0, 0);
//     this.controls = new _OrbitControls(this.camera, this.renderer.domElement);
//     this.time = 0;

//     this.colors = [
//       new THREE.Color(0x588c73),
//       new THREE.Color(0xf2e394),
//       new THREE.Color(0xf2ae72),
//       new THREE.Color(0xd96459),
//       new THREE.Color(0x8c4646),
//       // new THREE.Color( 0xe20019 ),
//     ];

//     this.setupResize();

//     this.resize();
//     this.addObjects();
//     this.animate();
//     // this.settings();
//   }

//   settings() {
//     // @todo cut geometry to change number of dots
//     let that = this;
//     this.settings = {
//       time: 0,
//       amplitude: 1,
//       diffAmplitude: 1,
//       period1: 1,
//       period2: 1,
//       perlinAmplitude: 1,
//       timeSpeed: 1,
//       oneWave: 1000,
//       size: 5,
//       fly: function () {
//         alert("fly");
//       },
//     };
//     this.gui = new GUI();
//     this.gui.add(this.settings, "time", 0, 100, 0.01);
//     this.gui.add(this.settings, "amplitude", 0, 10, 0.01);
//     this.gui.add(this.settings, "diffAmplitude", 0, 10, 0.01);
//     this.gui.add(this.settings, "period1", 0, 10, 0.01);
//     this.gui.add(this.settings, "period2", 0, 10, 0.01);
//     this.gui.add(this.settings, "timeSpeed", 0, 1, 0.001);
//     this.gui.add(this.settings, "perlinAmplitude", 0, 10, 0.01);
//     this.gui.add(this.settings, "oneWave", 1000, 100000, 100);
//     this.gui.add(this.settings, "size", 0.1, 200, 0.1);
//     this.gui.add(this.settings, "fly").name("Test fly");
//   }

//   setupResize() {
//     window.addEventListener("resize", this.resize.bind(this));
//   }

//   resize() {
//     var w = window.innerWidth;
//     var h = window.innerHeight;
//     this.renderer.setSize(w, h);
//     this.camera.aspect = w / h;
//     this.camera.updateProjectionMatrix();
//   }

//   render() {
//     this.renderer.render(this.scene, this.camera);
//   }

//   addObjects() {
//     const fragment =
//       "uniform float time;\nuniform float offset;\nuniform int back;\nvarying vec2 vUv;\nvarying vec3 vColor;\nvarying float vOffset;\n\nvoid main() {\n  vec3 color = vColor;\n  float o = fract(time/20. + vOffset/10.);\n    float length = 0.3;\n    if( abs(vUv.x - o)>length && abs(vUv.x - o - 1.)>length && abs(vUv.x - o + 1.)>length )  {\n discard;\n }\n  gl_FragColor = vec4(color,1.);\nif(!gl_FrontFacing){ \ngl_FragColor = vec4(color*0.3,1.);\n }\n}";
//     const vertex =
//       "uniform float time;\nvarying vec2 vUv;\nattribute vec3 instancePosition;\nattribute vec3 instanceColor;\nattribute float instanceOffset;\nvarying vec3 vColor;\n varying float vOffset; \n\n void main() {\n  vUv = uv;\n vColor = instanceColor;\n vOffset = instanceOffset;\n vec3 newposition = position + instancePosition;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );\n }\n";
//     let that = this;
//     let number = 10;
//     this.material = new THREE.ShaderMaterial({
//       extensions: {
//         derivatives: "#extension GL_OES_standard_derivatives : enable",
//       },
//       side: THREE.DoubleSide,
//       uniforms: {
//         time: { type: "f", value: 0 },
//         offset: { type: "f", value: 0 },
//         color: { type: "c", value: 0 },
//         back: { type: "i", value: 0 },
//       },
//       // wireframe: true,
//       // transparent: true,
//       vertexShader: vertex,
//       fragmentShader: fragment,
//     });

//     // this.material = new THREE.MeshBasicMaterial( {color: 0xff0000, wireframe: true});

//     this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
//     this.geometry = new THREE.CylinderGeometry(2, 2, 1, 4, 1, true);

//     this.instanceGeo = new THREE.InstancedBufferGeometry();

//     let vertices = this.geometry.attributes.position.clone();
//     this.instanceGeo.setAttribute("position", vertices);
//     this.instanceGeo.attributes.uv = this.geometry.attributes.uv;
//     this.instanceGeo.attributes.normal = this.geometry.attributes.normal;
//     this.instanceGeo.index = this.geometry.index;

//     console.log(this.instanceGeo, this.geometry);

//     let instancePositions = [];
//     let instanceColors = [];
//     let instanceOffsets = [];
//     for (let i = 0; i < number; i++) {
//       instancePositions.push(0, i - 5, 0);
//       instanceColors.push(
//         this.colors[i % 5].r,
//         this.colors[i % 5].g,
//         this.colors[i % 5].b
//       );
//       instanceOffsets.push(i);
//     }

//     this.instanceGeo.setAttribute(
//       "instancePosition",
//       new THREE.InstancedBufferAttribute(new Float32Array(instancePositions), 3)
//     );
//     this.instanceGeo.setAttribute(
//       "instanceColor",
//       new THREE.InstancedBufferAttribute(new Float32Array(instanceColors), 3)
//     );
//     this.instanceGeo.setAttribute(
//       "instanceOffset",
//       new THREE.InstancedBufferAttribute(new Float32Array(instanceOffsets), 1)
//     );

//     this.mats = [];

//     this.instanceMesh = new THREE.Mesh(this.instanceGeo, this.material);
//     this.scene.add(this.instanceMesh);
//   }

//   animate() {
//     this.time += 0.05;
//     this.material.uniforms.time.value = this.time;
//     // this.instanceGeo.uniforms.time.value = this.time;

//     if (this.mats.length) {
//       this.mats.forEach((e) => {
//         e.uniforms.time.value = this.time;
//         // console.log(e.uniforms.offset.value);
//       });
//     }
//     requestAnimationFrame(this.animate.bind(this));
//     this.render();
//   }
// }

// export default BackgroundComponent;
