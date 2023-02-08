import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

function Box(props: any) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // @ts-ignore
    useFrame((state, delta) => (mesh.current!.rotation!.x += delta))
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}
export const ThreeBackground = () => {
    return (
        <Canvas style={{
            position: "fixed",
            zIndex: -100,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
        }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[-10, -10, -10]} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Box position={[-1.2, 0, 0]} />
        </Canvas>
    )
}
