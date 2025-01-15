import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const submitForm = (formData) => API.post('/submissions', formData);
export const fetchSubmissions = () => API.get('/submissions');
