import axios from 'axios';

const API_URL = 'http://localhost:8080/user/sonatrachapi/employe';

const handleError = (error) => {
    if (error.response) {
        console.error('Response error:', error.response.data);
        throw new Error(`Error: ${error.response.status} - ${error.response.data.message || 'Something went wrong'}`);
    } else if (error.request) {
        console.error('Request error:', error.request);
        throw new Error('Error: No response received from server.');
    } else {
        console.error('Setup error:', error.message);
        throw new Error(`Error: ${error.message}`);
    }
};

export const findAll = () => {
    return axios.get(API_URL)
        .then(response => response.data)
        .catch(handleError);
};

export const findAllActives = () => {
    return axios.get(`${API_URL}/actives`)
        .then(response => response.data)
        .catch(handleError);
};

export const findById = (id) => {
    return axios.get(`${API_URL}/${id}`)
        .then(response => response.data)
        .catch(handleError);
};

export const save = (item) => {
    return axios.post(API_URL, item)
        .then(response => response.data)
        .catch(handleError);
};

export const deleteById = (id) => {
    return axios.delete(`${API_URL}/${id}`)
        .catch(handleError);
};