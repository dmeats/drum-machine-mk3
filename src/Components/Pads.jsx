import React from 'react'
import IndivPad from '../Components/IndivPad'
import '../CSS/Pads.css'
import cabase from '../sounds/cabase.mp3'
import conga from '../sounds/conga.mp3'
import kick from '../sounds/kick.mp3'
import kick2 from '../sounds/kick2.mp3'
import lotom from '../sounds/lotom.mp3'
import snare from '../sounds/snare.mp3'
import snare2 from '../sounds/snare2.mp3'
import timbal from '../sounds/timbale.mp3'
import tomlo from '../sounds/tomlo.mp3'


const Pads = () =>{

    //const [state, setState] = useState({
       
    //    id:[]
    //    soundfile: '../sounds/cabase.wav',
    //  });
    
    //Q, W, E, A, S, D, Z, X, C.
    return(
        <div className='DrumPads'>
            <table>
                <tbody>
                    <tr>
                        <td><IndivPad soundsrc={cabase} idpd="1" letter='Q' typeofinstrument = 'cabase'/></td>
                        <td><IndivPad soundsrc={conga} idpd="2" letter='W' typeofinstrument = 'conga'/></td>
                        <td><IndivPad soundsrc={kick} idpd="3" letter='E' typeofinstrument = 'kick'/></td>
                    </tr>
                    <tr>
                        <td><IndivPad soundsrc={kick2} idpd="4" letter='A' typeofinstrument = 'kick2'/></td>
                        <td><IndivPad soundsrc={lotom} idpd="5" letter='S' typeofinstrument = 'lotom'/></td>
                        <td><IndivPad soundsrc={snare} idpd="6" letter='D' typeofinstrument = 'snare'/></td>
                    </tr>
                    <tr>
                        <td><IndivPad soundsrc={snare2} idpd="7" letter='Z' typeofinstrument = 'snare2'/></td>
                        <td><IndivPad soundsrc={timbal} idpd="8" letter='X' typeofinstrument = 'timbal'/></td>
                        <td><IndivPad soundsrc={tomlo} idpd="9" letter='C' typeofinstrument = 'phaser'/></td>
                    </tr>
                </tbody>
           </table>
        </div>

    )
    
}

export default Pads;