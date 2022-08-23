import React, { useState } from 'react'
import {
  Container,
  Grid,
  Typography,
  Button as CustomButton
} from '@material-ui/core'
import { Form, Formik } from "formik";
import Textfield from  '../Components/FormsUI/Textfield/';
import Select from '../Components/FormsUI/Select/';
import DateTimePicker from '../Components/FormsUI/DataTimePicker';
import Checkbox from '../Components/FormsUI/CheckBox';
import Button from '../Components/FormsUI/Button'
import countries from '../data/countries.json'
import { Trans, useTranslation } from "react-i18next";
import * as Yup from 'yup'
import Success from '../Components/FormsUI/Success'




const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  arrivealDate: '',
  departureDate: '',
  message: '',
  termsOfService: false
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Required'),
  phone: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),
  addressLine1: Yup.string()
    .required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string()
    .required('Required'),
  state: Yup.string()
    .required('Required'),
  country: Yup.string()
    .required('Required'),
  arrivealDate: Yup.date()
    .required('Required'),
  departureDate: Yup.date()
    .required('Required'),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
});




function FormPage({lngs,stl}) {
    const { t, i18n } = useTranslation();
    const [submit, setSubmit] = useState(false)
    
    console.log(countries)

  const classes = stl
  return (
      <div style={{margin:'15px'}}>
          

 
              <div style={{fontSize:'3em',textAlign:'center'}}> 
              <Trans i18nKey="form.header" >
                  
                                         Book your Form 

                 
                  </Trans>
                  </div>



<Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
              
                      {submit? <Success/>  :null }
                      <p>

        </p>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                  console.log(values);
                  setSubmit(true)
              }}
            >
              
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Typography>
                    <Trans i18nKey="form.title">
                        Your details
                    </Trans>
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="firstName"
                      label={t('form.firstName')}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="lastName"
                      label={t('form.lastName')}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="email"
                      label={t('form.email')}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="phone"
                      label={t('form.phone')}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                    <Trans i18nKey="form.address">

                        Address
                    </Trans>
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="addressLine1"
                      label={t('form.addressLine1')}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="addressLine2"
                      label={t('form.addressLine2')}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="city"
                      label={t('form.city')}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="state"
                      label={t('form.state')}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name="country"
                      label={t('form.country')}
                                          options={countries}
                                          style={{color:"black"}}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      <Trans i18nKey="form.more_info">
                        Booking information
                      </Trans>
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name="arrivealDate"
                      label={t('form.arrivealDate')}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name="departureDate"
                      label={t('form.departureDate')}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="message"
                      label={t('form.message')}
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox
                      name="termsOfService"
                      legend="Terms Of Service"
                      label={t('form.terms_of_service')}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button>
                      <Trans i18nKey="form.submit">

                        Submit Form
                      </Trans>
                    </Button>
                  </Grid>


                </Grid>

              </Form>
            </Formik>
            </div>

          </Container>
        </Grid>

      
      
      </div>
  )
}

export default FormPage