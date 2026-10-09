"use client";
import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import Mannequin, { type MannequinConfig } from "./Mannequin";

export function SceneFrame({ children, className = "", fov = 34, cam = [0, 1.35, 4.4] as [number, number, number], dark = false }:
    { children: React.ReactNode; className?: string; fov?: number; cam?: [number, number, number]; dark?: boolean }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className={className} />;
    return (
        <div className={className}>
            <Canvas dpr={[1, 1.6]} camera={{ fov, position: cam }} shadows>
                <hemisphereLight args={["#fff8f0", dark ? "#1a1a1a" : "#d8d2c8", dark ? .4 : .55]} />
                <directionalLight position={[2.5, 4.2, 2.5]} intensity={dark ? .9 : 1.25} castShadow shadow-mapSize={[1024, 1024]} />
                <directionalLight position={[-3, 2.8, -2.6]} intensity={dark ? 1.5 : .85} color="#ffe6d0" />
                <directionalLight position={[-2, 1.2, 3]} intensity={.3} />
                <Suspense fallback={null}>{children}</Suspense>
            </Canvas>
        </div>
    );
}

function FabricPanels() {
    const refs = useRef<THREE.Mesh[]>([]);
    const cols = ["#0E7293", "#FF8A65", "#22C195"];
    useFrame(({ clock }) => {
        const t = clock.elapsedTime;
        refs.current.forEach((m, i) => {
            if (!m) return;
            const pos = m.geometry.attributes.position;
            const base = (m.userData.base as Float32Array) ?? pos.array.slice();
            m.userData.base = base;
            for (let j = 0; j < pos.count; j++) {
                const x = base[j * 3], y = base[j * 3 + 1];
                pos.array[j * 3 + 2] = .07 * Math.sin(y * 6 + t * 1.8 + i * 2.1) + .04 * Math.sin(x * 8 + t * 1.2);
            }
            pos.needsUpdate = true;
            m.rotation.y += .0012;
        });
    });
    return (
        <>
            {cols.map((c, i) => (
                <mesh key={c} ref={(m) => { if (m) refs.current[i] = m; }}
                    position={[i === 0 ? -.95 : i === 1 ? .95 : 1.05, i === 0 ? 1.45 : i === 1 ? 1.25 : .85, i === 0 ? -.3 : .35]}
                    rotation={[.2, i * .9 - .6, .15]}>
                    <planeGeometry args={[.5, .72, 10, 14]} />
                    <meshStandardMaterial color={c} roughness={.85} side={THREE.DoubleSide} />
                </mesh>
            ))}
        </>
    );
}

function StudioRings({ color = "#5fa8cc" }: { color?: string }) {
    return (
        <>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, .002, 0]}>
                <ringGeometry args={[.72, .74, 56]} />
                <meshBasicMaterial color={color} transparent opacity={.8} side={THREE.DoubleSide} />
            </mesh>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, .002, 0]}>
                <ringGeometry args={[1.15, 1.158, 56]} />
                <meshBasicMaterial color={color} transparent opacity={.28} side={THREE.DoubleSide} />
            </mesh>
        </>
    );
}

export function HeroScene() {
    return (
        <SceneFrame className="absolute inset-0">
            <StudioRings />
            <ContactShadows position={[0, 0, 0]} opacity={.35} scale={5} blur={2.4} far={2.4} />
            <Mannequin config={{ pose: "editorial", outfit: "topPants", c1: "#F1EAE0", c2: "#0E7293", wide: true, hair: "bun", jewel: true }} />
            <FabricPanels />
        </SceneFrame>
    );
}

export function BrandScene({ config, ring = "#b5aea2" }: { config: MannequinConfig; ring?: string }) {
    return (
        <SceneFrame className="absolute inset-0" fov={35} cam={[0, 1.28, 3.7]}>
            <StudioRings color={ring} />
            <ContactShadows position={[0, 0, 0]} opacity={.3} scale={4} blur={2.4} far={2.2} />
            <Mannequin config={config} />
        </SceneFrame>
    );
}

function Rolls() {
    const g = useRef<THREE.Group>(null);
    const cols = ["#0E7293", "#FF8A65", "#22C195", "#EFE7DA", "#2B2A28", "#7FA8BC"];
    useFrame((_, dt) => { if (g.current) g.current.children.forEach((c, i) => { if (i % 2 === 0) c.rotation.y += dt * .4; }); });
    return (
        <group ref={g}>
            {cols.map((c, i) => {
                const a = (i / cols.length) * Math.PI * 1.5 - 2.4;
                return (
                    <mesh key={c} position={[-1.5 + Math.cos(a) * .7, .26, -.4 + Math.sin(a) * .6]} rotation={[0, i, 0]}>
                        <cylinderGeometry args={[.11, .11, .52, 16]} />
                        <meshStandardMaterial color={c} roughness={.8} />
                    </mesh>
                );
            })}
        </group>
    );
}

function FactoryContent() {
    const g = useRef<THREE.Group>(null);
    useFrame(({ clock }) => {
        if (g.current) g.current.rotation.y = -.35 + clock.elapsedTime * .02;
    });
    return (
        <group ref={g}>
            <mesh rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[6, 40]} /><meshStandardMaterial color="#1d1c1b" roughness={.95} /></mesh>
            <Rolls />
            {[-1, -.5, 0, .5, 1].map((x, i) => (
                <mesh key={i} position={[x, 1.28, -1.3]} scale={[.62, .72, .5]}>
                    <latheGeometry args={[[[.3, .05], [.252, .28], [.215, .58], [.178, .84], [.148, 1], [.126, 1.1], [.136, 1.22], [.152, 1.3], [.142, 1.36], [.114, 1.428], [.055, 1.462]].map(([a, b]) => new THREE.Vector2(a, b))]} />
                    <meshStandardMaterial color={["#0E7293", "#FF8A65", "#22C195", "#EFE7DA", "#2B2A28"][i % 5]} roughness={.85} />
                </mesh>
            ))}
            <mesh position={[0, .5, 1.5]}><boxGeometry args={[3.4, .06, .5]} /><meshStandardMaterial color="#232220" roughness={.7} /></mesh>
        </group>
    );
}

export function FactoryScene() {
    return (
        <SceneFrame className="absolute inset-0" fov={36} cam={[2.5, 1.75, 3.5]} dark>
            <fog attach="fog" args={["#141414", 5, 13]} />
            <FactoryContent />
        </SceneFrame>
    );
}