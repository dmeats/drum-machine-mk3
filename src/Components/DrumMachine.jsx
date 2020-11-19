import React from 'react'
import Pads from '../Components/Pads'
import Readout from '../Components/Readout'
import '../CSS/DrumMachine.css'

    const DrumMachine = () => {


            return(

                <div className='Display'>
                    <p className='fontstyle'>Digital Beat Kit</p>
                <Readout/>   
                <Pads/>

                
                </div>
            )

    }

export default DrumMachine;