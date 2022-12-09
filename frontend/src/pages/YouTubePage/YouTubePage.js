import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import {KEY} from "./src/localKey.js"


const YouTubePage = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
          
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=milesdavis&key=AIzaSyD5lenf3Fg754H5O5CaUtYYA37XbpZQ4X8&part=snippet&type=video&maxResults=6`);
            console.log("Youtube Data",response.data.items);
            setVideos(response.data.items);
        };
        fetchVideos();
    },[]);

    return (
        <div className="container">
      <h1>Videos</h1>
      {videos &&
        videos.map((video) => (
            <>
            <h1>{video.snippet.title}</h1>
            <img src={video.snippet.thumbnails.medium}/>
            </>
            

        ))}
    </div>
    );

};

export default YouTubePage;