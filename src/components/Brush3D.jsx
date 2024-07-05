import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Pincel3D() {
    const mountRef = useRef(null);

    useEffect(() => {
        const width = 400;  
        const height = 400;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // Pincel
        const handleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1);
        const handleMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
        const handle = new THREE.Mesh(handleGeometry, handleMaterial);
        handle.position.y = 0.5;
        scene.add(handle);

        const brushGeometry = new THREE.SphereGeometry(0.2, 32, 32);
        const brushMaterial = new THREE.MeshBasicMaterial({ color: 0xffa500 });
        const brush = new THREE.Mesh(brushGeometry, brushMaterial);
        brush.position.y = 1;
        scene.add(brush);

        // Light
        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(10, 10, 10);
        scene.add(light);

        camera.position.z = 3;

        const animate = () => {
            requestAnimationFrame(animate);
            handle.rotation.y += 0.01;
            brush.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="coding-image"></div>;
}

export default Pincel3D;
