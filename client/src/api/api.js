import axios from 'axios';


const baseURL =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://user-submission-system.onrender.com/api' 
    : 'http://localhost:5000/api';

const API = axios.create({ baseURL });
export const submitForm = (formData) => API.post('/submissions', formData);
export const fetchSubmissions = () => API.get('/submissions');
