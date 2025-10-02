import { COUNTRY_APIKEY } from "../constant/countryApiKey";

    export const getCountries = async () => {
        const response = await fetch('https://api.countrystatecity.in/v1/countries', {
            headers: { 'X-CSCAPI-KEY': COUNTRY_APIKEY }
          });
          //COUNTRY_APIKEY from constant folder /countryApiKey.ts-- do not forget to import
          const countries = await response.json();
        
          return countries;
    }

    export const getStatesByCountry = async (countryCode:string) => {
        const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, {
          headers: { 'X-CSCAPI-KEY': COUNTRY_APIKEY }
        });
      
        if (response.ok) {
          const states = await response.json();
          console.log(`Found ${states.length} states in ${countryCode}`);
          return states;
        } else {
          console.error('Country not found or no states available');
        }
      };
      
    