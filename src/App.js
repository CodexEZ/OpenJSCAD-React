
import './App.css';
import Modify from './components/Modify/Modify'
import {cube,cuboid,sphere } from '@jscad/modeling/src/primitives'
import {vectorText} from '@jscad/modeling/src/text'
import {useState, useEffect} from 'react';
import {rotateX,rotateY, rotateZ} from '@jscad/modeling/src/operations/transforms/rotate'
import {scaleX,scaleY,scaleZ} from '@jscad/modeling/src/operations/transforms/scale'
import {translateX, translateY, translateZ} from '@jscad/modeling/src/operations/transforms/translate'
import {union, subtract, intersect} from '@jscad/modeling/src/operations/booleans'
import {Renderer} from 'jscad-react';
import * as React from 'react'
import Shapes from './components/Shapes/Shapes';
function App() {
  return (<div>
    <Env/>
  </div>);
}

export default App;



function Env() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [index,setIndex] = useState(0);
  useEffect(() => {
    //Handling window resize to make the website as responsive as possible
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  //Create an array to store the solids
  const [solids, setSolids] = useState([]);

  //Clean all solids on screem
  const clear = () =>{
    setSolids([])
  }

  //Add a Cube
  const addCube = () => {
    const newCube = cube({center:[0,0,0],size:12});
    setSolids(prevSolids => [...prevSolids, newCube]);
  };

  //Add a Sphere
  const addSphere = () => {
    const newSphere = sphere({
      center:[0,0,0],
      radius:10,
      segments:50
    })
    setSolids(prevSolids => [...prevSolids, newSphere]);
  }

  //Add Cuboid
  const addCuboid = () => {
    const newCuboid = cuboid({
      center:[0,0,0],
      size:[10,20,30]
    })
    setSolids(prevSolids => [...prevSolids,newCuboid])
  }

  //Not working yet
  const AddText = () => {
    const newText = vectorText('OpenJSCAD')
    setSolids(prevSolids=>[...prevSolids,newText])
  }

  //Scale the selected object in X,Y and Z axes
  const ScaleX = (x) =>{
    if(x<=0)
      console.log("Scale factor must be greater than 0")
    else{
    const originalShape = solids[index];
    const modifiedShape = scaleX(x,originalShape)
    const updatedSolids = [...solids]
    updatedSolids[index] = modifiedShape
    setSolids(updatedSolids);
  }
  }
  const ScaleY =(y)=>{
    if(y<=0)
      console.log("Scale factor must be greater than 0")
    else{
    const originalShape = solids[index]
    const modifiedShape = scaleY(y,originalShape)
    const updatedSolids = [...solids]
    updatedSolids[index] = modifiedShape
    setSolids(updatedSolids);
    }
  }
  const ScaleZ = (z)=>{
    if(z<=0)
    console.log("Scale factor must be greater than 0")
    else{
    const originalShape = solids[index]
    const modifiedShape = scaleZ(z,originalShape)
    const updatedSolids = [...solids]
    updatedSolids[index] = modifiedShape
    setSolids(updatedSolids);
    }
  }

  //Rotate the selected object in X,Y and Z axes
  const RotateX = (rx)=>{
    const originalShape = solids[index]
    var modifiedShape
    if(rx === 1)
      modifiedShape = rotateX(0.1, originalShape)
    else
      modifiedShape = rotateX(-0.1, originalShape)
    const updatedSolids = [...solids]
    updatedSolids[index] = modifiedShape
    setSolids(updatedSolids); 
  }

  
  const RotateY = (ry) => {
    const originalShape = solids[index]
    var modifiedShape
    if(ry === 1)
      modifiedShape = rotateY(0.1, originalShape)
    else
      modifiedShape = rotateY(-0.1, originalShape)
    const updatedSolids = [...solids]
    updatedSolids[index] = modifiedShape
    setSolids(updatedSolids); 
  }
  const RotateZ = (rz)=>{
    const originalShape = solids[index]
    var modifiedShape
    if(rz === 1)
      modifiedShape = rotateZ(0.1, originalShape)
    else
      modifiedShape = rotateZ(-0.1, originalShape)
    const updatedSolids = [...solids]
    updatedSolids[index] = modifiedShape
    setSolids(updatedSolids); 
  }

  //Translate the selected object in X,Y and Z axis
  const TranslateX = (tx) =>{
    const modifiedShape = translateX(tx,solids[index])
    const updatedSolids = [...solids]
    updatedSolids[index] = modifiedShape
    setSolids(updatedSolids); 
  }
  const TranslateY = (ty) =>{
    const modifiedShape = translateY(ty,solids[index])
    const updatedSolids = [...solids]
    updatedSolids[index] = modifiedShape
    setSolids(updatedSolids);
  }
  const TranslateZ = (tz) =>{
    const modifiedShape = translateZ(tz,solids[index])
    const updatedSolids = [...solids]
    updatedSolids[index] = modifiedShape
    setSolids(updatedSolids);
  }

  //Perform Boolean operations on the first two shapes
  const Subtract = (shapes) =>{
    if(solids.length >= 2){
      const x = 0; 
      const y = 1;
      const newshape = subtract(solids[x], solids[y]);
      const updatedSolids = solids.filter((shape, index) => index !== x && index !== y);
      updatedSolids.unshift(newshape); // Add the new shape to the beginning of the array
      setSolids(updatedSolids);
    }
    else{
      alert("You must add two or more primitives")
    }
  }
  const Intersect = () =>{
    if(solids.length >=2){
      const x = 0; // Index of the first shape to remove
      const y = 1; // In
      const newshape = intersect(solids[x], solids[y]);
      const updatedSolids = solids.filter((shape, index) => index !== x && index !== y);
      updatedSolids.unshift(newshape); // Add the new shape to the beginning of the array
      setSolids(updatedSolids);
    }
    else{
      alert("You must add two or more primitives")
    }
  }
  const Union = () =>{
    if(solids.length >= 2){
      const x = 0; // Index of the first shape to remove
      const y = 1; // Index of the second shape to remove
      const newshape = union(solids[x], solids[y]);
      const updatedSolids = solids.filter((shape, index) => index !== x && index !== y);
      updatedSolids.unshift(newshape); // Add the new shape to the beginning of the array
      setSolids(updatedSolids);
    }
    else{
      alert("You must add two or more primitives")
    }
  }


  //Function used to select objects in the environment
  const selectIndex =(value)=>{
    console.log(value)
    setIndex(value)
    console.log(index)
    
  }
  return (
    <div className='container'>
      <div className='button_layer'>
          <button onClick={addCube}>Add Cube</button>
          <button onClick={addSphere}>Add Sphere</button>
          <button onClick={addCuboid}>Add Cuboid</button>
          {/* <button onClick={AddText}>Add Text</button> */}
          <button onClick={clear}>Clear all</button>
          <Modify  x = {ScaleX} y = {ScaleY} z={ScaleZ} rx={RotateX} ry = {RotateY} rz = {RotateZ} tx = {TranslateX} ty={TranslateY} tz = {TranslateZ}/>
          <Shapes shapes = {solids} operation={selectIndex}/>
          <div className='boolean_container'>
            <div className='boolean_buttons'>
              <button onClick={Subtract}>Subtract</button>
              <button onClick={Intersect}>Intersect</button>
              <button onClick={Union}>Union</button>
            </div>
          </div>
      </div>
      
      <div className='render_layer'>
      <Renderer solids={solids} height={windowDimensions.height} width={windowDimensions.width} animate={true}options={{
      
      }}/>
      </div>
    </div>
  );
}