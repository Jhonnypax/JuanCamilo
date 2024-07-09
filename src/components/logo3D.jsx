import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Logo3D() {
    const mountRef = useRef(null);

    useEffect(() => {
        const width = 50;
        const height = 50;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const materials = [
            new THREE.MeshBasicMaterial({ color: 0xFFFFFF }),
            new THREE.MeshBasicMaterial({ color: 0xFFFFFF }),
            new THREE.MeshBasicMaterial({ color: 0xFFFFFF }),
            new THREE.MeshBasicMaterial({ color: 0xFFFFFF }),
            new THREE.MeshBasicMaterial({ color: 0xFFFFFF }),
            new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
        ];
        const cube = new THREE.Mesh(geometry, materials);
        scene.add(cube);

        const wireframe = new THREE.LineSegments(
            new THREE.EdgesGeometry(cube.geometry),
            new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 })
        );
        cube.add(wireframe);

        camera.position.z = 2;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        const onMouseMove = (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            cube.rotation.x = mouseY * (Math.PI / 2);
            cube.rotation.y = mouseX * (Math.PI / 2);
        };

        const onSmallScreen = window.matchMedia("(max-width: 768px)").matches;

        if (onSmallScreen) {
            let autoRotate = true;
            const autoRotateCube = () => {
                if (autoRotate) {
                    cube.rotation.x += 0.01;
                    cube.rotation.y += 0.01;
                }
                requestAnimationFrame(autoRotateCube);
            };
            autoRotateCube();
        } else {
            document.addEventListener('mousemove', onMouseMove, false);
        }

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '30px', height: '30px' }}></div>;
}

export default Logo3D;
