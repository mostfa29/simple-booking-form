import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';
import { Alert } from '@mui/material';

const SuccessWrapper = ()=>{

  return (
<Alert severity="success">Success! Form submited correctly!</Alert>
  );
};

export default SuccessWrapper;