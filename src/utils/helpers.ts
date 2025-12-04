import { COUNTRY_APIKEY } from "../constant/countryApiKey";

    export const getCountries = async () => {
      try {
        const response = await fetch('https://api.countrystatecity.in/v1/countries', {
            headers: { 'X-CSCAPI-KEY': COUNTRY_APIKEY }
          });
          
          if (!response.ok) {
            console.error('Failed to fetch countries:', response.status);
            return [];
          }
          
          //COUNTRY_APIKEY from constant folder /countryApiKey.ts-- do not forget to import
          const countries = await response.json();
        
          return countries;
      } catch (error) {
        console.error('Error fetching countries:', error);
        return [];
      }
    }

    export const getStatesByCountry = async (countryCode:string) => {
      try {
        console.log('Fetching states for country code:', countryCode);
        const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, {
          headers: { 'X-CSCAPI-KEY': COUNTRY_APIKEY }
        });
      
        if (response.ok) {
          const states = await response.json();
          console.log(`Found ${states.length} states in ${countryCode}`);
          return states;
        } else {
          console.error('Country not found or no states available');
          return [];
        }
      } catch (error) {
        console.error('Error fetching states:', error);
        return [];
      }
      };

      export const getCitiesByState = async (countryCode:string, stateCode:string) => {
        try {
          const response = await fetch(
            `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`, 
            {
              headers: { 'X-CSCAPI-KEY': COUNTRY_APIKEY}
            }
          );
        
          if (response.ok) {
            const cities = await response.json();
            console.log(`Found ${cities.length} cities in ${stateCode}, ${countryCode}`);
            return cities;
          } else {
            console.error('State not found or no cities available');
            return [];
          }
        } catch (error) {
          console.error('Error fetching cities:', error);
          return [];
        }
      };

    