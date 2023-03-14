import { useFrame } from '@react-three/fiber'

import React from 'react'

function MyAnimatedBox() {
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime() * 0
    myMesh.current.rotation.y = clock.getElapsedTime()
  })

  return (
    <mesh ref={myMesh} scale={0.8}>
      <octahedronGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}
export default MyAnimatedBox
