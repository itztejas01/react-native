import { IMAGE_SEARCH_BOX_UPDATED,
    UPDATE_IMAGE_LIST,
    TOGGLE_IMAGE_LOADER,
    FILTERED_IMAGE_LIST 
} from './ActionsTypes'

import axios from 'axios'

export const imageSearchBoxValueChanges = (image_list,search) => {
    return dispatch => {
        var filetered_imageList = image_list.filter(function(image_data){
            return image_data.author.includes(search,0);
        });

        dispatch({
            type:IMAGE_SEARCH_BOX_UPDATED,
            payload:search,
        })
        dispatch({
            type:FILTERED_IMAGE_LIST,
            payload:filetered_imageList,
        });
    }
}

export const toggleImageListLoader = show => {
    return{
        type:TOGGLE_IMAGE_LOADER,
        payload:show
    };
};

export const getImageFromApi = () =>{
    return dispatch => {
        dispatch({
            type:TOGGLE_IMAGE_LOADER,
            payload:true
        });

        axios.get("https://picsum.photos/v2/list")
        .then(response => {
            
            dispatch({
                type:UPDATE_IMAGE_LIST,
                payload: response.data
            });

            dispatch({
                type:FILTERED_IMAGE_LIST,
                payload:response.data
            });

            dispatch({
                type:TOGGLE_IMAGE_LOADER,
                payload:false,
            });
        })
        .catch(error => {
            dispatch({
                type:TOGGLE_IMAGE_LOADER,
                payload:false,
            })
            console.log('error: ',error);
        });
    }
}
