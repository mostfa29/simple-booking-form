import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Edit <1>src/App.js</1> and save to reload.",
            part2: "Learn React",
          },
          form: {
            header:'Book your Form',
            title: 'Your details',
            address: 'Address',
            more_info: 'Booking information',
            submit: 'Submit Form',
            title: 'Title',
            firstName: 'First name',
            lastName: 'Last name',
            email: 'Email',
            phone: 'Phone',
            address: 'Address',
            addressLine1: 'AddressLine1',
            addressLine2: 'AddressLine2',
            city: 'City',
            state: 'State',
            country: 'Country',
            more_info: 'More info',
            arrivealDate: 'Arriveal Date',
            departureDate: 'Departure Date',
            message: 'message',
            terms_of_service:'Terms of service',
            
            
            
            
            
            
            

            
          },
        }
      }
      ,
          de: {
        translation: {
          description: {
            part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
            part2: 'Lerne React'
              },
              

              form: {
            header:'Formular buchen', 
            title: 'Deine Details',
            address: 'Addresse',
            more_info: 'Buchungsinformation',
             submit: 'Formular absenden',

            title: 'Titel',
            firstName: 'Vorname',
            lastName: 'Nachname',
            email: 'Email',
            phone: 'Telefon',
            address: 'Adresse',
            addressLine1: 'Anschrift Zeile 1',
            addressLine2: 'Anschrift Zeile 2',
            city: 'Stadt',
            state: 'Bundesland',
            country: 'Land',
            more_info: 'Mehr Info',
            arrivealDate: 'Ankunftsdatum',
            departureDate: 'Ankunftsdatum',
            message: 'Botschaft',
            terms_of_service:'Nutzungsbedingungen',
            
            }
         
        }
      }
    }
  });

export default i18n;