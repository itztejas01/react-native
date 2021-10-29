import { IMAGE_SEARCH_BOX_UPDATED, 
    UPDATE_IMAGE_LIST,
    TOGGLE_IMAGE_LOADER, 
    FILTERED_IMAGE_LIST
} from '../Actions/ActionTypes';

const INITIAL_STATE = {
    image_search:'',
    image_list: [],
    filtered_image_list: [],
    showLoader: false,
};

export default (state = INITIAL_STATE, action) => {
    // console.log(action)
    // console.log(action)r
    switch(action.type){
        case IMAGE_SEARCH_BOX_UPDATED:
            return{
                ...state,
                image_search:action.payload,
            };
        case UPDATE_IMAGE_LIST:
            return{
                ...state,
                image_list: action.payload
            };
        case TOGGLE_IMAGE_LOADER:
            return{
                ...state,
                showLoader: action.payload
            };
        case FILTERED_IMAGE_LIST:
            return{
                ...state,
                filtered_image_list: action.payload
            };
        default:
            return state;
    }
}