import * as api from '../api';

// Action creators
const getPost = () => async(dispatch)=>{
    try {
        const {data} = api.fetchPosts;
        const action = {type: 'FATCH_ALL', payload: data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}