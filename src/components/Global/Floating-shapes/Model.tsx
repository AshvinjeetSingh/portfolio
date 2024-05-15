import React from "react";
import { Float, useGLTF } from "@react-three/drei";
import { motion } from 'framer-motion-3d';

type Props = {
}
export default function Model(props: Props) {

    const { nodes } = useGLTF("/shapes/floating_shapes4.glb");
    return (
        // <Float>
        <group>
            <Mesh node={nodes.Sphere001} />
            <Mesh node={nodes.Sphere002} />
            <Mesh node={nodes.Cylinder002} />
            <Mesh node={nodes.Sphere003} />
            <Mesh node={nodes.Cylinder003} />
            <Mesh node={nodes.Cylinder005} />
            <Mesh node={nodes.Cube002} />
            <Mesh node={nodes.Cylinder006} />
            <Mesh node={nodes.Cylinder007} />
            <Mesh node={nodes.Cylinder009} />
            <Mesh node={nodes.Sphere} />
        </group>
        // </Float>
    );
}

useGLTF.preload("/public/shapes/floating_shapes4.glb");

function Mesh({ node }) {
    const { geometry, material, position, scale, rotation } = node;

    return (
        <motion.mesh
            castShadow={true}
            receiveShadow={true}
            geometry={geometry}
            material={material}
            position={position}
            rotation={rotation}
            scale={scale}
        />
    )
}