import * as api from '../api';

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signin(formData);

        dispatch({type:'AUTH', data});
        console.log(data)
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);

        dispatch({type:'AUTH', data})
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}