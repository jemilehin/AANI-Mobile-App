import { NavigationAction } from '@react-navigation/native';
import axios from 'axios';
import localStorage from 'react-native-sync-localstorage'
// import AsyncStorage from '@react-native-async-storage/async-storage';



const URL = 'http://rel8backend.herokuapp.com/'
// const navigation = useNavigation()

const instance = axios.create({
  baseURL: URL,
});

instance.interceptors.request.use((config) => {
// alert(token)
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Token ${token}` : null;
  
  return config;
});

export default instance;