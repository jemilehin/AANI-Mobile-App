import { NavigationAction } from '@react-navigation/native';
import axios from 'axios';
import localStorage from 'react-native-sync-localstorage'
// import AsyncStorage from '@react-native-async-storage/async-storage';



const URL = 'https://aani-backend-production.up.railway.app'

const instance = axios.create({
  baseURL: URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Token ${token}` : null;
  
  return config;
});

export default instance;