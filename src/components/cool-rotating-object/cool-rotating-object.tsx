'use client'
import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface CoolRotatingObjectProps {
  width: number
  height: number
}

const CoolRotatingObject: React.FC<CoolRotatingObjectProps> = (props) => {
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sceneRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer()

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube)
    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      renderer.setSize(props.width, props.height)
      renderer.render(scene, camera)
    }

    animate()

    const mount = sceneRef.current

    if (mount) {
      mount.appendChild(renderer.domElement)
    }

    return () => {
      if (mount && mount.firstChild) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={sceneRef} />
}

export default CoolRotatingObject
