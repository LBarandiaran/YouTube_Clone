import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


const YouTubePage = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
          
            let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=milesdavis&key=AIzaSyD5lenf3Fg754H5O5CaUtYYA37XbpZQ4X8&part=snippet&type=video&maxResults=6') 
            setVideos(response.data);
        };
        fetchVideos();
    });

    return (
        <div className="container">
      <h1>Videos</h1>
      {videos.thumbnails}
    </div>
    );

};

export default YouTubePage;