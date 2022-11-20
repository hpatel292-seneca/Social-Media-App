import * as api from '../api';

// Action creators
//  export const getPosts = () => async(dispatch)=>{
//     try {
//         const {data} = await api.fetchPosts();
//         console.log(data);
//         const action = {type: 'FATCH_ALL', payload: data};
//         dispatch(action);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      // console.log(data);
      dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const createPost = (post) => async (dispatch) =>{
    try {
        const {data}  = await api.createPost(post);
        // console.log(data);
        dispatch({type: "CREATE", payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, updatedPost) => async (dispatch)=>{
  try {
    const {data} = await api.updatePost(id, updatedPost);
    dispatch({type: "UPDATE", payload: data});
  } catch (error) {
    console.log(error.message);
  }
}