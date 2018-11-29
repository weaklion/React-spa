import axios from 'axios';

export const checkEmailExists = (email) => axios.get('/:5000/api/auth/exists/email/' + email);
export const checkUsernameExists = (username) => axios.get('/:5000/api/auth/exists/username/' + username);

export const localRegister = ({email,username,password}) => axios.post('/:5000//api/auth/register/local',{email,username,password});
export const localLogin = ({email,password}) => axios.post('/:5000//api/auth/Login/local',{email,password});

export const checkStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');