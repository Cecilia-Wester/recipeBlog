import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { FormGroup } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        display: "flex",
        justifyContent: "center",
        position: "absolute", 
        top: 'calc(50% - 150px)', 
        left: 'calc(50% - 250px)', 
        backgroundColor: '#F2F2F2', 
        listStyle: 'none', 
        cursor: 'pointer',
        width: '700px',
        height: '500px',
        borderRadius:'5px',
        flexDirection: 'column'
      },
    },
    button: {
        width: '100px',
        height: '50px',
        margin: '10px',

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  

  }));

export default function NewPost({setModalOpen, modalOpen}) {
    const classes = useStyles();
    const [measureUnit, setMeasureUnit] = useState('dl')
    function publishNewRecipe(){
        //   const contentful = require('contentful-management')

// const client = contentful.createClient({
//   accessToken: '<content_management_api_key>'
// })

// client.getSpace('<space_id>')
// .then((space) => space.getEnvironment('<environment_id>'))
// .then((environment) => environment.createAsset({
//   fields: {
//     title: {
//       'en-US': 'Playsam Streamliner'
//     },
//     description: {
//       'en-US': 'Streamliner description'
//     },
//     file: {
//       'en-US': {
//         contentType: 'image/jpeg',
//         fileName: 'example.jpeg',
//         upload: 'https://example.com/example.jpg'
//       }
//     }
//   }
// }))
// .then((asset) => asset.processForAllLocales())
// .then((asset) => console.log(asset))
// .catch(console.error)
    }

    function onSave(e){
        e.preventDefault();
        publishNewRecipe();
    }

    const handleChange = (event) => {
        setMeasureUnit(event.target.value);
      };

      const addAnotherRow = (e) => {
        <TextField id="ingredient" label="Ingrediens" variant="outlined" />
      }

    return ReactDOM.createPortal((
        <div className={classes.root} >
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField id="receptnamn" label="Receptnamn" variant="outlined" />
                    <FormGroup>
                        <TextField id="ingredient" label="Ingrediens" variant="outlined" />
                        <Button className={classes.button} onClick={ addAnotherRow } variant="contained">Lägg till ny ingrediens</Button>
                        <TextField
                            id="measure"
                            label="Number"
                            type="number"
                            InputProps={{ 
                                inputProps: { 
                                    min: 0, 
                                    max: 10000, 
                                    step: .1 } }}
                            tag="input"
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Måttenhet</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={measureUnit}
                                onChange={handleChange}
                            >
                        
                        <MenuItem value={'liter'}>liter</MenuItem>
                        <MenuItem value={'dl'}>dl</MenuItem>
                        <MenuItem value={'msk'}>msk</MenuItem>
                        <MenuItem value={'tsk'}>tsk</MenuItem>
                        <MenuItem value={'krm'}>krm</MenuItem>
                        <MenuItem value={'gram'}>gram</MenuItem>
                        <MenuItem value={'kg'}>kg</MenuItem>
                        </Select>
                    </FormControl>
                    </FormGroup>
                    <TextField id="Description" label="Beskrivning" variant="outlined" />
                    <Button className={classes.button} onClick={ onSave } variant="contained">Spara</Button>
                    <Button className={classes.button} onClick={ () => setModalOpen(false) } variant="contained">Stäng</Button>
                </form>
                
            
        </div>
    ), document.body);
}