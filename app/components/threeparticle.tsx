import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { swarmBackground } from 'threejs-toys';
import styles from './threeparticle.module.css';
const ThreeParticleComponent = () => {
  useEffect(() => {
    const bg = swarmBackground({
        el: document.getElementById('three-container'),
        gpgpuSize: 94,
        color: [Math.random() * 0xffffff, Math.random() * 0xffffff],
        geometry: 'default',
        background: '#121212',
        lights: [
            { type: 'ambient', params: [0xffffff, 0.6] },
            { type: 'ambient', params: [0xffffff, 0.8] },
            { type: 'directional', params: [0xffffff, 0.8], props: { position: [20, 20, 20] } },
            { type: 'directional', params: [0xffffff, 0.8], props: { position: [-20, -20, -20] } },
            { type: 'point', params: [0xffffff, 1, 100], props: { position: [0, 0, 0] } }
        ],
    })

    const { camera } = bg.three;
    camera.position.set(0, 0, 175);

    // Variables for camera rotation
    let angle = 0;
    const radius = 175;
    const speed = 0.003; // The speed of the rotation. Adjust as needed.

    // Animation loop for camera rotation
    const animate = () => {
      requestAnimationFrame(animate);

      // Update camera position to rotate around the origin
      angle += speed;
      camera.position.x = radius * Math.cos(angle);
      camera.position.z = radius * Math.sin(angle);
      camera.lookAt(0, 0, 0); // Make sure the camera is always looking at the origin

      bg.three.renderer.render(bg.three.scene, camera);
    };

    // Start the animation loop
    animate();
    //document.body.addEventListener('click', () => {
    //  bg.setColors([Math.random() * 0xffffff, Math.random() * 0xffffff]);
    //});
    const fancyButton = document.querySelector('#fancy-button');
    fancyButton?.addEventListener('click', () => {
        bg.setColors([Math.random() * 0xffffff, Math.random() * 0xffffff]);
        }
    );
  }, []);

  return (
    <div id="three-container" style={{ width: '100vw', height: '100vh', zIndex: -1, position: 'fixed',
    top: 0,
    left: 0, }} className={styles.fadein}>
      {/* Three.js will attach its canvas here */}
      <div style={{
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        position: 'fixed',
        top: 0,
        left: 0,
      }}></div>
    </div>
  );
};

export default ThreeParticleComponent;
