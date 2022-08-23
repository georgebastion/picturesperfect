import * as api from '../api';

//Action Creators


export const getImages = () => async (dispatch) =>  {
    try {
        const { data } = await api.fetchData();
        dispatch({type:'OTHERS', payload: data})
    } catch (error) {
        console.log(error.message)
    } 
}
export const getStudio = () => async (dispatch) =>  {
    try {
        const { data } = await api.fetchStudio();
        dispatch({type:'OTHERS', payload: data})
    } catch (error) {
        console.log(error.message)
    } 
}

export const getWedding = () => async (dispatch) =>  {
    try {
        const { data } = await api.fetchWedding();
        dispatch({type:'OTHERS', payload: data})
    } catch (error) {
        console.log(error.message)
    } 
}


export const createImage = (image) => async (dispatch) =>{
    try {
        const { data }  = await api.createImage(image);
        console.log('This is the data')
        dispatch({type:'CREATE', payload:data })
    } catch (error) {
        console.log(error.message)      
    }
 }
export const updateImage = (id, image)=>async(dispatch)=>{
    try {
        const {data} = await api.updateImage(id, image);

        dispatch({type:'UPDATE', payload:data})
    } catch (error) {
        console.log(error) 
    }
}

export const deleteImage = (id) => async (dispatch) =>{
    try {
        await api.deleteImage(id);

        dispatch({type:'DELETE', payload: id})
    } catch (error) {
        console.log(error) 
    }
}

