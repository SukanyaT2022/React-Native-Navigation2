import { COUNTRY_APIKEY } from "../constant/countryApiKey";

    export const getCountries = async () => {
        const response = await fetch('https://api.countrystatecity.in/v1/countries', {
            headers: { 'X-CSCAPI-KEY': COUNTRY_APIKEY }
          });
          //COUNTRY_APIKEY from constant folder /countryApiKey.ts-- do not forget to import
          const countries = await response.json();
          console.log(countries);
          return countries;
    }