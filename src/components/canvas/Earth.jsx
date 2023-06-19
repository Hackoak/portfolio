import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import Globe from "globe.gl";
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  // useEffect(() => {
  // const world = Globe()(document.getElementById("globeViz"))
  //   .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
  //   .pointOfView({ altitude: 4 }, 5000)
  //   .polygonCapColor((feat) => "rgba(200, 0, 0, 0.6)")
  //   .polygonSideColor(() => "rgba(0, 100, 0, 0.05)")
  //   .polygonLabel(
  //     ({ properties: d }) => `
  //             <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
  //             Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
  //           `
  //   );

  // // Auto-rotate
  // world.controls().autoRotate = true;
  // world.controls().autoRotateSpeed = 1.8;

  // fetch("ff.geojson")
  //   .then((res) => res.json())
  //   .then((countries) => {
  //     world.polygonsData(
  //       countries.features.filter((d) => d.properties.ISO_A2 !== "AQ")
  //     );

  //     setTimeout(
  //       () =>
  //         world
  //           .polygonsTransitionDuration(4000)
  //           .polygonAltitude((feat) =>
  //             Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5)
  //           ),
  //       3000
  //     );
  //   });
  // }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
