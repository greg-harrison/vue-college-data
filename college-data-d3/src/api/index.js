import axios from 'axios';

const API_KEY = process.env.US_GOV_API_KEY;
const BASE_URL = 'https://api.data.gov/ed/collegescorecard/v1/schools';

export const getData = () => {
  axios.get(BASE_URL, {
    params: {
      'school.name': 'Virginia Commonwealth University',
      api_key: API_KEY,
    },
  }).then(() => {
    return true;
  });
};
