import type { PlaneProps, Triplet } from '@react-three/cannon'
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon'
import { MeshPhongMaterialProps, useLoader } from '@react-three/fiber'
import { Canvas, useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { InstancedMesh, Mesh, TextureLoader } from 'three'
import { Color } from 'three'
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { backgroundState } from '../types/TypeBackground'
import useMoneyToCoins from '../../libs/useMoneyToCoins'

const niceColors = ['#99b898', '#fecea8', '#ff847c', '#e84a5f', '#2a363b']

type OurPlaneProps = Pick<MeshPhongMaterialProps, 'color'> & Pick<PlaneProps, 'position' | 'rotation'>

function Plane({ color, ...props }: OurPlaneProps) {
    const [ref] = usePlane(() => ({ ...props }), useRef<Mesh>(null))
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry args={[1000, 1000]} />
            {/* <meshPhongMaterial color={color} /> */}
        </mesh>
    )
}

function Box() {
    const boxSize: Triplet = [4, 4, 4]
    const [ref, api] = useBox(() => ({ args: boxSize, mass: 1, type: 'Kinematic' }), useRef<Mesh>(null))
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        api.position.set(Math.sin(t * 2) * 5, Math.cos(t * 2) * 5, 3)
        api.rotation.set(Math.sin(t * 6), Math.cos(t * 6), 0)
    })
    const textureLoader = new TextureLoader()
    const texture = textureLoader.load("./canvas.jpg")

    return (
        <mesh ref={ref} castShadow receiveShadow>
            <boxBufferGeometry args={boxSize} />
            {/* <meshLambertMaterial color="white" /> */}
            <meshLambertMaterial color="white" map={texture} />
        </mesh>
    )
}

function InstancedSpheres({ number = 100 }) {
    const [ref] = useSphere(
        (index) => ({
            args: [1],
            mass: 1,
            position: [Math.random() - 0.5, Math.random() - 0.5, index * 2],
        }),
        useRef<InstancedMesh>(null),
    )
    const colors = useMemo(() => {
        const array = new Float32Array(number * 3)
        const color = new Color()
        for (let i = 0; i < 10; i++)
            color
                .set(niceColors[Math.floor(Math.random() * 5)])
                .convertSRGBToLinear()
                .toArray(array, i * 3)
        return array
    }, [number])


    return (
        <instancedMesh ref={ref} castShadow receiveShadow args={[undefined, undefined, 10]}>
            <sphereBufferGeometry args={[1, 16, 16]}>
                <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
            </sphereBufferGeometry>
            <meshPhongMaterial vertexColors />

        </instancedMesh>
    )
}

type yen = {
    coinId: number
}
const Yen = memo(({ coinId }: yen) => {
    const fbxs = ["./coins/yen500.fbx", "./coins/yen100.fbx", "./coins/yen50.fbx", "./coins/yen10.fbx", "./coins/yen5.fbx", "./coins/yen1.fbx"]

    const [ref] = useSphere(
        (index) => ({
            args: [1],
            mass: 1,
            position: [Math.random() - 0.5, Math.random() - 0.5, index * 2],
        }),
        useRef<InstancedMesh>(null),
    )

    const fbx = useLoader(FBXLoader, fbxs[coinId])
    let fbxClone = fbx.clone()
    return (
        <primitive object={fbxClone} ref={ref} scale={0.07} />
    )
})

export const ThreeBackground = memo(({ }) => {

    // const coin = [10, 20, 0, 2]
    const [background, setBackground] = useRecoilState(backgroundState)
    const { money, pictures } = background
    const coins = useMoneyToCoins(money)

    return (
        <Canvas shadows gl={{ alpha: false }} camera={{ position: [0, -12, 16] }}
            style={{
                position: "fixed",
                zIndex: -100,
                left: 0,
                top: 0,
                width: "100%",
                height: "100%"
            }}
        >
            <hemisphereLight intensity={0.35} />
            <spotLight
                position={[30, 0, 30]}
                angle={0.3}
                penumbra={1}
                intensity={2}
                castShadow
                shadow-mapSize-width={256}
                shadow-mapSize-height={256}
            />
            <pointLight position={[-30, 0, -30]} intensity={0.5} />
            <Physics gravity={[0, 0, -30]}>
                <Plane color={niceColors[4]} position={[0, 0, 0]} rotation={[0, 0, 0]} />
                <Plane color={niceColors[1]} position={[-6, 0, 0]} rotation={[0, 0.9, 0]} />
                <Plane color={niceColors[2]} position={[6, 0, 0]} rotation={[0, -0.9, 0]} />
                <Plane color={niceColors[3]} position={[0, 6, 0]} rotation={[0.9, 0, 0]} />
                <Plane color={niceColors[0]} position={[0, -6, 0]} rotation={[-0.9, 0, 0]} />
                <Box />
                {/* <InstancedSpheres number={100} /> */}
                {coins &&
                    coins.map((e, i) => [...Array(e)].map((c, j) =>
                        <Yen coinId={i} key={j + e * i} />
                    ))}
            </Physics>
        </Canvas>
    )
})