import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

//fetchoutdoors
export const fetchData = ()=> API.get('/photos');
export const fetchStudio = () => API.get('/photos/studio');
export const fetchWedding = () => API.get('/photos/wedding');

export const createImage = (newImage) => API.post('/photos', newImage);

export const updateImage = (id, newPost) => API.patch(`/photos/${id}`, newPost);

export const deleteImage = (id) => API.delete(`/photos/${id}`);

export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData);