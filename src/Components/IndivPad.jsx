import React, { useState,useEffect,useContext} from 'react'
import {APPLContext} from './../App'
import '../CSS/IndivPad.css'

const IndivPad = (props) => {

const aPPLContext = useContext(APPLContext)
const [cssname, setCSSname] = useState ('off');
const [playing, setplaying] = useState (false);
const [letterpressed, setLetterpressed] = useState (props.letter)





      


const changeStyleAndPlaySound = (playing) => {
  console.log('in changestyle ' + cssname)
   let name = playing ? 'on' : 'off'
  // this.myRef = React.createRef();
   const soundclip = document.getElementById(props.idpd)
   console.log(soundclip)
   soundclip.currentTime = 0;
   soundclip.volume = .8;
   soundclip.play();
  return(
       name
  )
}


const play = (playing,cssname) =>{
  
  setplaying (playing = true)
  console.log('in play 1' + cssname)
  setTimeout(() => {setCSSname(changeStyleAndPlaySound(playing))},50)
  
  setplaying (playing = false)
 
  setCSSname(cssname = 'on')
  console.log('in play 2 ' + cssname)
  //set message of instrument to be displayed
  let Message = props.typeofinstrument
  aPPLContext.ChangeMessage(Message)
 }

useEffect(()=>{
  document.addEventListener('keydown', (event) => {
    const keyName = event.key;

  //check for keys pressed and play the clip
   console.log(keyName + '  ' + letterpressed)
    
    if (keyName.toUpperCase()===letterpressed){
      
      play();
    }
  }, false);

 
  document.addEventListener('keyup', (event) => {
    const keyName = event.key;
  
    
    if (keyName === 'Control') {
     console.log('Control key was released');
    }
  }, false);
},[letterpressed])



    return(
        <div className={cssname}
               onClick={() => play(playing,cssname)}
               id={props.letter}>{props.letter}
               
        {console.log(cssname + ' ' + props.soundsrc + ' ' + props.idpd)}
        <audio  id={props.idpd} src={props.soundsrc} autoPlay/>
        
        </div>
          )
}

export default IndivPad;
