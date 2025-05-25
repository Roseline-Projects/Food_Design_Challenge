import { useGLTF } from '@react-three/drei'

export function UdonModel(props) {
  const { scene } = useGLTF('/models/udon_meal/scene.gltf')
  return <primitive object={scene} {...props} />
}
