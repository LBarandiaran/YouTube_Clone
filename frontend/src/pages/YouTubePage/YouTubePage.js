import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import {KEY} from "./src/localKey.js"




const YouTubePage = () => {

    const [videos, setVideos] = useState([  
    ]);

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
      <iframe id="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/8uUCIQ50e-4?autoplay=1&origin=http://example.com"
        frameborder="0"></iframe>
      {videos &&
        videos.map((video) => (
            <>
            return <Link to={`/videopage/${video.id.videoId}`} key={video.id.videoId}>{video.snippet.title}</Link>;
            <img src={video.snippet.thumbnails.medium.url}/>
            </>
            

        ))}
    </div>
    );

};

export default YouTubePage;