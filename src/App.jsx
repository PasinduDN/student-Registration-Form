import React, { useState } from 'react';
import { TextField, Autocomplete, Button, MenuItem, Select, FormControl, InputLabel, Radio, RadioGroup, FormControlLabel, FormLabel, Grid, Box } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const top100Films = [
    { label: 'Male' },
    { label: 'Female' },
  ]

  const [formData, setFormData] = useState({
    registrationNumber: '',
    name: '',
    birthDay: '',
    address: '',
    telephone: '',
    gender: top100Films[0].label,
    nationality: ''
  });

  function ckeckFormData(){
    if (
      formData.registrationNumber &&
      formData.name &&
      formData.birthDay &&
      formData.address &&
      formData.telephone &&
      formData.gender &&
      formData.nationality
    ) {
      console.log("Form submitted:", formData);
    } else {
      alert("Please fill in all required fields.");
    }
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Check if all required fields are filled
  //   if (
  //     formData.registrationNumber &&
  //     formData.name &&
  //     formData.birthDay &&
  //     formData.address &&
  //     formData.telephone &&
  //     formData.gender &&
  //     formData.nationality != ''
  //   ) {
  //     console.log("Form submitted:", formData);
  //   } else {
  //     alert("Please fill in all required fields.");
  //   }
  // };

  return (
    <Box sx={{
      flexGrow: 1,
      maxWidth: 600,
      mx: 'auto',
      mt: 5,
      color: 'Highlight',
      backgroundColor: 'ActiveBorder',
      padding: '20px',
      borderRadius: '20px',
    }}>
      <form>
        <Grid container spacing={2}>

          {/*  Headder */}
          <Grid item xs={12}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <h1 className='header-Style'>Registration Form </h1>
          </Grid>

          {/* Registration Number  */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Registration Number"
              name="registrationNumber"
              value={formData.registrationNumber}
              required
              onChange={(e) =>
                setFormData({ ...formData, registrationNumber: e.target.value })
              }
            />
          </Grid>

          {/* Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Grid>

          {/* Birth Day */}
          <Grid item xs={12}>
            <FormLabel id="demo-controlled-radio-buttons-group">Birth Day  </FormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              required
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </Grid>

          {/* Telephone */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Telephone"
              name="telephone"
              value={formData.telephone}
              required
              onChange={(e) =>
                setFormData({ ...formData, telephone: e.target.value })
              }
            />
          </Grid>

          {/* Gender */}
          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={top100Films.find(option => option.label === formData.gender) || null}
              options={top100Films}
              sx={{ width: 300 }}
              onChange={(event, newValue) => {
                setFormData({ ...formData, gender: newValue ? newValue.label : '' });
              }}
              renderInput={(params) => <TextField {...params} label="Gender" />}
            />
          </Grid>

          {/* Nationality */}
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Nationality</FormLabel>
              <RadioGroup
                aria-label="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={(event) => {
                  setFormData({ ...formData, nationality: event.target.value });
                }}
                required
              >
                <FormControlLabel value="Citizen" control={<Radio />} label="Citizen" />
                <FormControlLabel value="International" control={<Radio />} label="International" />
              </RadioGroup>
            </FormControl>
          </Grid>


          {/* Add Button */}
          <Grid item xs={12}
            container
            justifyContent="flex-end">
            <Button onClick={ckeckFormData} variant="contained"> Add </Button>
          </Grid>

        </Grid>
      </form>
    </Box>
  )
}

export default App
