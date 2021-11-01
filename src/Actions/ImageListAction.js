import {IMAGE_SEARCH_BOX_UPDATED, 
    UPDATE_IMAGE_LIST,
    TOGGLE_IMAGE_LOADER,
    FILTERED_IMAGE_LIST,
} from './ActionTypes';
import axios from 'axios';


export const imageSearchBoxValueChanged = (image_list, search) => {
//   return {
//     type: IMAGE_SEARCH_BOX_UPDATED,
//     payload: search,
//   };
    return dispatch => {
        var filtered_imageList = image_list.filter(function (image_data) {
            return image_data.author.includes(search, 0); 
        });

        console.log('filtered list:',filtered_imageList);
        dispatch({
            type: IMAGE_SEARCH_BOX_UPDATED,
            payload:search,
        });
        dispatch({
            type:FILTERED_IMAGE_LIST,
            payload: filtered_imageList,
        });
    };
};

export const toggleImageListLoader = show => {
    console.log("show loader here it is printed: ",show);
    return {
        type:TOGGLE_IMAGE_LOADER,
        payload: show
    };
};

export const getImageListFromApi = nav => {
    console.log("here api calling is happpening")
  return dispatch => {

    dispatch({
        type:TOGGLE_IMAGE_LOADER,
        payload: true,
    });
    // here the image api call will happen
    axios
      .get('https://picsum.photos/v2/list')
      .then(response => {
        // console.log(response.data);
        dispatch({
          type: UPDATE_IMAGE_LIST,
          payload: response.data,
        });

        dispatch({
            type: FILTERED_IMAGE_LIST,
            payload: response.data,
        });


        dispatch({
            type:TOGGLE_IMAGE_LOADER,
            payload:false,
        });

        console.log('nav',nav)
        nav.navigate('HomeScreen')
        
      })
      .catch(error => {
        console.log('error: ', error);
        dispatch({
            type:TOGGLE_IMAGE_LOADER,
            payload:false,
        });
      });


  };
};
