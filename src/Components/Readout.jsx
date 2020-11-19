import React, {useContext} from 'react'
import '../CSS/Readout.css'
import {APPLContext} from './../App'

const Readout = () =>{
    const aPPLContext = useContext(APPLContext)
    return(
        <div className='Readout-Container'>
           
                    <div className='Readout'>
                        {aPPLContext.Message}
                    </div>
        </div>
    )
} 
export default Readout