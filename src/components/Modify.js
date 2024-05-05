
import { useState } from 'react';
import './Modify.css'

const translateStep = 0.1;
function Modify({x,y,z,rx,ry,rz, tx,ty,tz}){
    const [scaleX, setScaleX] = useState(1);
    const [scaleY, setScaleY] = useState(1);
    const [scaleZ, setScaleZ] = useState(1);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [rotateZ, setRotateZ] = useState(0);
    const [translateX, setTranslateX] = useState(0)
    const [translateY, setTranslateY] = useState(0)
    const [translateZ, setTranslateZ] = useState(0)  
    // Function to handle form submission
    const handleScaleX = (e) =>{
      setScaleX(e.target.value)
      x(scaleX)
    }
    const handleScaleY = (e) => {
      setScaleY(e.target.value)
      y(scaleY)
    }
    const handleScaleZ = (e) => {
      setScaleZ(e.target.value)
      z(scaleZ)
    }
    const handleRotateX = (e) => {
      setRotateX(e.target.value)
      rx(Direction(rotateX, e))
    }
    const handleRotateY = (e) => {
      setRotateY(e.target.value)
      ry(Direction(rotateY, e))
    }
    const handleRotateZ = (e) =>{
      setRotateZ(e.target.value)
      rz(Direction(rotateZ, e))
    }
    const handleTranslateX = (e) =>{
      setTranslateX(e.target.value)
      tx(TDirection(translateX,e))
    }
    const handleTranslateY = (e) =>{
      setTranslateY(e.target.value)
      ty(TDirection(translateY,e))
    }
    const handleTranslateZ = (e) =>{
      setTranslateZ(e.target.value)
      tz(TDirection(translateZ,e))
    }

  return (
    <div className='form_container'>
      <form >
        <label>
          ScaleX:
          <input type="number" value={scaleX} min = "0" step="0.1" onChange={(e) => handleScaleX(e)} />
        </label>
        <label>
          ScaleY:
          <input type="number" value={scaleY} min = "0" step="0.1" onChange={(e) => handleScaleY(e)} />
        </label>
        <label>
          ScaleZ:
          <input type="number" value={scaleZ} min = "0" step="0.1" onChange={(e) => handleScaleZ(e)} />
        </label>
        <label>
          RotateX:
          <input
           type="number" 
           value={rotateX} 
           step="0.1" 
           onChange={(e) => handleRotateX(e)}
           onKeyDown={(e) => e.preventDefault()}
           onKeyUp={(e) => e.preventDefault()}/>
        </label>
        <label>
          RotateY:
          <input 
          type="number" 
          value={rotateY} 
          step="0.1" 
          onChange={(e) => handleRotateY(e)}
          onKeyDown={(e) => e.preventDefault()}
          onKeyUp={(e) => e.preventDefault()} />
        </label>
        <label>
          RotateZ:
          <input type="number"
          value={rotateZ} step="0.1"
          onChange={(e) => handleRotateZ(e)}
          onKeyDown={(e) => e.preventDefault()}
          onKeyUp={(e) => e.preventDefault()} />
        </label>
        <label>
          TranslateX:
          <input 
          type='number' 
          step="0.1" 
          value={translateX}
          onChange={(e)=>handleTranslateX(e)}/>
        </label>
        <label>
          TranslateY:
          <input 
          type='number' 
          step="0.1"
          value={translateY} 
          onChange={(e)=>handleTranslateY(e)}/>
        </label>
        <label>
          TranslateZ:
          <input 
          type='number' 
          step="0.1" 
          value={translateZ}
          onChange={(e)=>handleTranslateZ(e)}/>
        </label>
      </form>
    </div>
  );
}

export default Modify;


function Direction(rotate, e){
  if(rotate < 0 && e.target.value < 0){
    if(e.target.value < rotate){
      return 1//Forward
    }
    else{
      return 0//Backward
    }
  }
  else{
    if(e.target.value > rotate){
      return 1//Forward
    }
    else{
      return 0//Backward
    }
  }
}
function TDirection(rotate, e){
  if(rotate < 0 && e.target.value < 0){
    if(e.target.value < rotate){
      return translateStep//Forward
    }
    else{
      return -translateStep//Backward
    }
  }
  else{
    if(e.target.value > rotate){
      return translateStep//Forward
    }
    else{
      return -translateStep//Backward
    }
  }
}