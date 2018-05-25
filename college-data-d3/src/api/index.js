import axios from 'axios';

const API_KEY = process.env.US_GOV_API_KEY;

const getData = () => {
  console.log(API_KEY);
  return true;
};

export default {
  getData: getData(),
};
