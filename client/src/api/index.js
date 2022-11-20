import axios from "axios"

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
// export const fetchPosts = () => fetch(url)
// .then((response) => response.json())
// .then((data) => console.log(data));
export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);