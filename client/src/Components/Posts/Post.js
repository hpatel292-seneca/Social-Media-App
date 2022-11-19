import React from 'react';
import Post from './Post/post'
import useStyles from "./styles"
import { useSelector } from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';

const Posts = () =>{
    // let posts = useSelector((state)=> state.posts);
    // console.log(posts);
 const classes = useStyles();

    const posts = [{
    _id: "fbfhftbgsvnbidfnvisdngfnfsdnifsidnfnid",
    likeCount: 0,
    createdAt: new Date(),
    creator: "Harshil",
    title: "New Year Celebration",
    message: "Alot of Fun",
    selectedFile: "https://media.cntraveler.com/photos/5c17f798a6a145617b7c72ea/16:9/w_4000,h_2250,c_limit/Hong-Kong_GettyImages-660431033.jpg",
    _v:0
    },
    {
        _id: "fbfhftbgsvnbidfnvisdngfnfsdnifsidnfnid",
        likeCount: 0,
        createdAt: new Date(),
        creator: "Harshil",
        title: "New Year Celebration",
        message: "Alot of Fun",
        tags: ["HEllo", "year"],
        selectedFile: "https://media.cntraveler.com/photos/5c17f798a6a145617b7c72ea/16:9/w_4000,h_2250,c_limit/Hong-Kong_GettyImages-660431033.jpg",
        _v:0
        } ]


 return(
    
        !posts.length ? <CircularProgress /> :
         (
         <Grid className={classes.container} container alignItems="stretch" spacing={3}>
           {posts.map((post) => (
             <Grid key={post._id} item xs={12} sm={6} md={6}>
               <Post post={post}/>
             </Grid>
           ))}
         </Grid>
       )
  );
}

export default Posts;