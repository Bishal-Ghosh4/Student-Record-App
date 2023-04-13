import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Brightness from './Brightness';




function Text() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [language, setLanguage] = useState("");
    const [data, setData] = useState([]);

    const [openAdd, setADD] = useState(false);
    const [openDEL, setDELETE] = useState(false);
    const [openERR, setERROR] = useState(false);
    

    /* Set Email function */
    function Email(e) {
        setEmail(e.target.value);
    }

    /* Validation function */
    const validation = () => {
        if (name == "" || email == "" || language == "") {
            return true;
        }
        else
            return false;
    }

    /* Add data function */
    function addData() {
        {
            (() => {
                if (validation() == false) {
                    setData([...data, { name: name, email: email, language: language }]);
                }
                else
                   setERROR(true);
            })()

        }
        setName("");
        setEmail("");
        setLanguage("");

        setDELETE(false);
        setADD(true);

    }
    /* Delete function */
    function removeData(index) {
        let tempData = data;
        tempData.splice(index, 1);
        setData([...tempData]);

        setADD(false);
        setDELETE(true);
    }

    /* Close function */
    const handleClose = () => {

        setADD(false);
        setDELETE(false);
        setERROR(false);
    };

    return (
        <div className="form">
                
            <Stack spacing={8} direction='row'>
                <TextField required value={name} id="outlined-basic" onChange={(e) => { setName(e.target.value) }} label="Full Name" variant="outlined" />
                <TextField required value={email} id="outlined-basic" onChange={(e) => { Email(e) }} label="Email" variant="outlined" />
                <TextField required value={language} id="outlined-basic" onChange={(e) => { setLanguage(e.target.value) }} label="Programming Language" variant="outlined" />
                <Button variant="contained" onClick={addData} color='success' size="large">ADD <AddIcon /></Button>
            </Stack>
            <div className="formdata">
                <div className="formgroup">
                    <h4 style={{ color: 'rgb(19 155 244)', fontWeight: '900' }}>Full Name</h4>
                    <h4 style={{ color: 'rgb(19 155 244)', fontWeight: '900' }}>Email</h4>
                    <h4 style={{ color: 'rgb(19 155 244)', fontWeight: '900' }}>Programming Language</h4>
                    <h4 style={{ color: 'rgb(19 155 244)', fontWeight: '900' }}>Remove</h4>
                </div>
                {
                    data.map((element, index) => {
                        return (
                            <div key={index} className="formgroup">
                                <h4>{element.name}</h4>
                                <h4>{element.email}</h4>
                                <h4>{element.language}</h4>
                                <Stack>
                                    <Button variant="contained" onClick={() => removeData(index)} color='error' size="small"><DeleteIcon /></Button>
                                </Stack>
                            </div>
                        )
                    })
                }
                <Snackbar open={openAdd} autoHideDuration={3000} onClose={handleClose}>
                    <MuiAlert onClose={handleClose} elevation={6} variant="filled" severity="success" sx={{ width: '100%' }}>
                        Data  Added successfully!
                    </MuiAlert>
                </Snackbar>
                <Snackbar open={openDEL} autoHideDuration={3000} onClose={handleClose} >
                    <MuiAlert onClose={handleClose} elevation={6} variant="filled" severity="success" sx={{ width: '100%' }}>
                        Data  Deleted successfully!
                    </MuiAlert>
                </Snackbar>
                <Snackbar open={openERR} autoHideDuration={3000} onClose={handleClose} >
                    <MuiAlert onClose={handleClose} elevation={6} variant="filled" severity="error" sx={{ width: '100%' }}>
                        Please Fillup the full Details!
                    </MuiAlert>
                </Snackbar>
            </div>
        </div>


    )
}

export default Text
