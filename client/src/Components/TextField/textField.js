import  React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
     color: "white",
    },
    "& label": {
     color: "white",
    },
    "& .MuiOutlinedInput-root": {
     "& fieldset": {
      borderColor: "white",
     },
     "&:hover fieldset": {
      borderColor: "#1976d2",
     },
     
     "& input": {
      color: "white",
     },
    },
   });