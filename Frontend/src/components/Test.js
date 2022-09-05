import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../store";


const apiUrl= "http://localhost:8000/api/posts";

const PostList= () => {
    const {store} = useAppContext();
    const [postList, setPostList] = useState([]);

    useEffect(()=>{
        axios.get(apiUrl).then(response =>{
            const {data} =response;
            console.log("response:",response);
            setPostList(data)
        }).catch(error => {
            // todo
        });
        console.log('mounted')
    }, [])
}

export default PostList