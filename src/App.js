import React, { Fragment, useEffect, useRef, useState} from 'react';

const WrapDiv=({children})=>{
const [drag,setdrag]=useState(false);
const [styleEl,setstyleEl]=useState({
  trasition:'0.1s',
  transform:'translate(-50%,-50%)',
  pointerEvents:'none',
  marginTop:'0px',
  marginLeft:'0px',
  
  
});

 
useEffect(()=>{
  if(drag === true){
    document.addEventListener('mousemove',(e)=>{
      let x= e.clientX;
    let y=e.clientY;
      
        setstyleEl({...styleEl,marginLeft:x+"px",marginTop:y+"px"});
      
        
      
    })
  }
},[drag]);
      
   
const movingbutton=useRef(null);
      // document.onmousedown=()=>{  
      //     setdrag(true);
      // }
      document.onclick=()=>{
        console.log(drag);
        setdrag(!drag);
      }
   

return (drag ? children(movingbutton,styleEl):children(movingbutton)) 
}


function App() {
  return (
    <Fragment>

       <WrapDiv id={'couserBox'} >
      {
        (reff,el)=>{
        return( <button ref={reff}style={el}>{'click'}</button>)
        }
      }
       </WrapDiv>

        
    </Fragment>
    
  );
}

export default App;
