import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import MyAnimatedBox from './MyAnimated'

function App() {
  const [active, setActive] = useState(0)

  return (
    <div className="canvas-container">
      <div>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <OrbitControls />
          <mesh scale={0.8}>
            <boxGeometry args={[2, 2, 7]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>

      <div>
        <Canvas>
          <ambientLight intensity={0.2} />
          <directionalLight color="red" position={[10, 10, 8]} />
          <OrbitControls />

          <mesh scale={active ? 1.5 : 3} onClick={() => setActive(!active)}>
            <MyAnimatedBox />
          </mesh>
        </Canvas>
      </div>
    </div>
  )
}

export default App
