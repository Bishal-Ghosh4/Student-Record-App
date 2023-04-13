import React, { useState } from 'react'
import Button from '@mui/material/Button';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import DarkModeIcon from '@mui/icons-material/DarkMode';


function Brightness() {
    const [openbright,setBRIGHT] =useState(true);
    const [opendark,setDARK]=useState(false);

    const changed=()=>{
        
        console.log('sajbjk');
    }
    return (
        <div className="bright">
            <Button variant="outlined" onClick={changed} size="large"> <WbIncandescentIcon /></Button>
            <Button variant="outlined"  size="large"> <DarkModeIcon /></Button>
        </div>
    )
}

export default Brightness
