import axios from "axios"

const url = "https://hpatel292-seneca-opulent-orbit-wq5wpxxjjgr35r76-5000.preview.app.github.dev/posts";

export const fetchPosts = () => axios.get(url);
// export const fetchPosts = () => fetch(url)
// .then((response) => response.json())
// .then((data) => console.log(data));
export const createPost = (newPost) => axios.post(url, newPost);