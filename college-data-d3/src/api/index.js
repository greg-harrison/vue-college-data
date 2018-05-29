import axios from 'axios';

const API_KEY = process.env.US_GOV_API_KEY;
const BASE_URL = 'https://api.data.gov/ed/collegescorecard/v1/schools';

const getData = () => {
  axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
      fields: {
        school: {
          name: 'Virginia Commonwealth University',
        },
      },
    },
  }).then(() => {
    return true;
  });
};

export default {
  getData: getData(),
};
