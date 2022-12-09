import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {KEY} from './src/localKey.js'


const YouTubePage = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
          
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=milesdavis&key={KEY}&part=snippet&type=video&maxResults=6`);
            console.log(response.data);
            setVideos(response.data);
        };
        fetchVideos();
    });

    return (
        <div className="container">
      <h1>Videos</h1>
      {videos &&
        videos.map((video) => (
            <p key={video.id}>
                {video.snippet.thumbnails}
            </p>
        ))}
    </div>
    );

};

export default YouTubePage;