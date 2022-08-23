import { makeStyles } from "@material-ui/core/styles";
import { Routes,Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import ThankYouPage from "./pages/ThankYouPage";
import {
  Container,
  Grid,
  Typography,
  Button as CustomButton
} from '@material-ui/core'
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8)
  }
}))


const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};


function App() {
    const { t, i18n } = useTranslation();


  return (
    <div className="App">
              <div style={{ display: 'flex',justifyContent:'center', gap:'10px'}}>
          {Object.keys(lngs).map((lng) => (
            <CustomButton  variant="contained" color="success" key={lng}  style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </CustomButton>
          ))}
        </div>
      <Routes>
        <Route path='/' element={
          FormPage(
{            'stl':useStyles(),
            'lngs':{ lngs}}
          )
        } />
      
        <Route path='/Thank-you'
          element={
           ThankYouPage()
         }
        />

      </Routes>
    </div>
  );
}

export default App;


