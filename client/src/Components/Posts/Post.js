import React from 'react';
import Post from './Post/post'
import useStyles from "./styles"
import { useSelector } from 'react-redux';

const Posts = () =>{
    const state = useSelector((state)=> state.posts);
    console.log(state);
 const classes = useStyles();
    return (
        <>
        <h1>Posts</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;