/* eslint-disable import/no-anonymous-default-export */

export default (images = [], action)=>{
    switch (action.type) {
        case 'UPDATE':
            return images.map((image) => image._id === action.payload._id ? action.payload : images)  
        case 'FETCH_ALL':         
            return action.payload;
        case 'CREATE':   
            return [...images, action.payload ];
        case 'OTHERS':   
            return [...images, ...action.payload ];
        case 'DELETE':   
            return images.filter((p)=> p._id !== action.payload )
        default:
            return images;
    }
}