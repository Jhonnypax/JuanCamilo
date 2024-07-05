import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Computador3D() {
    const mountRef = useRef(null);

    useEffect(() => {
        const width = 400;  
        const height = 400;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // Monitor
        const monitorGeometry = new THREE.BoxGeometry(1, 0.6, 0.1);
        const monitorMaterial = new THREE.MeshBasicMaterial({ color: 0x800080 });
        const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
        scene.add(monitor);

        // Base
        const baseGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32);
        const baseMaterial = new THREE.MeshBasicMaterial({ color: 0x800080 });
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.position.y = -0.35;
        scene.add(base);

        // Light
        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(10, 10, 10);
        scene.add(light);

        camera.position.z = 3;

        const animate = () => {
            requestAnimationFrame(animate);
            monitor.rotation.y += 0.01;
            base.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="coding-image"></div>;
}

export default Computador3D;
