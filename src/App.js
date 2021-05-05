import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

function App() {
  return (
      <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {/*<Box position={[0, 0, 0]} />*/}
          {/*<Rond position={[0, 0, 0]} />*/}
          <Cone position={[0, 0, 0]} />

      </Canvas>
  );
}

export default App;


function Rond(props){
    const mesh = useRef()
    const [state, setState] = useState({isHovered: false, isActive: false})
    useFrame(state => {
        const time = state.clock.getElapsedTime();
        mesh.current.position.y = mesh.current.position.y + Math.cos(time*2)/100;
        mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
    })
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={state.isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => setState({...state, isActive: !state.isActive, })}
            onPointerOver={(e) => setState({...state, isHovered: true})}
            onPointerOut={(e) => setState({...state, isHovered: false})}>
            <sphereBufferGeometry args={[1.5,1000,1000]} />
            <meshStandardMaterial color={state.isActive ? '#088202' : '#D90368'} />
        </mesh>
    )
}
function Cone(props){
    const mesh = useRef()
    const [state, setState] = useState({isHovered: false, isActive: false})
    useFrame(state => {
        const time = state.clock.getElapsedTime();
        mesh.current.rotation.x = 3.2
        mesh.current.rotation.y += 0.01
        mesh.current.position.y = -1
        // mesh.current.position.y = mesh.current.position.y + Math.cos(time*2)/100;
        // mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
    })
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={state.isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => setState({...state, isActive: !state.isActive, })}
            onPointerOver={(e) => setState({...state, isHovered: true})}
            onPointerOut={(e) => setState({...state, isHovered: false})}>
            <coneBufferGeometry args={[1,3,12,1]} />
            <meshStandardMaterial color='#DBC39A'/>
        </mesh>
    )
}

function Box(props) {
    const mesh = useRef()
    const [state, setState] = useState({isHovered: false, isActive: false})
    useFrame(state => {
        const time = state.clock.getElapsedTime();
        mesh.current.position.y = mesh.current.position.y + Math.cos(time*2)/100;
        mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
    })
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={state.isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => setState({...state, isActive: !state.isActive, })}
            onPointerOver={(e) => setState({...state, isHovered: true})}
            onPointerOut={(e) => setState({...state, isHovered: false})}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={state.isActive ? '#820263' : '#D90368'} />
        </mesh>
    )
}