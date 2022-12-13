import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import {KEY} from "./src/localKey.js"




const YouTubePage = () => {

    const [videos, setVideos] = useState([
        {
            "kind": "youtube#searchResult",
            "etag": "R-EOZZtYrlUePWBelg91d7bk6kw",
            "id": {
                "kind": "youtube#video",
                "videoId": "8uUCIQ50e-4"
            },
            "snippet": {
                "publishedAt": "2018-03-25T09:22:04Z",
                "channelId": "UC1_z3zWabJZ1Rlq0TDeAq2g",
                "title": "M̤ ̤I̤ ̤L̤ ̤E̤ ̤S̤ ̤D̤ ̤A̤ ̤V̤ ̤I̤ ̤S̤ ̤-̤ ̤K̤i̤n̤d̤ ̤O̤f̤ ̤B̤l̤ṳe̤  [Legacy Edition][Full HQ]",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/8uUCIQ50e-4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/8uUCIQ50e-4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/8uUCIQ50e-4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Sevmai Sol",
                "liveBroadcastContent": "none",
                "publishTime": "2018-03-25T09:22:04Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "JOly_KRnb5Xn3xZTZNBuKPZD29I",
            "id": {
                "kind": "youtube#video",
                "videoId": "zqNTltOGh5c"
            },
            "snippet": {
                "publishedAt": "2010-10-20T00:53:18Z",
                "channelId": "UC9NlE_veniVpnvpIegfifMQ",
                "title": "Miles Davis - So What (Official Video)",
                "description": "Official music video for ”So What” by Miles Davis Listen to Miles Davis: https://MilesDavis.lnk.to/listenYD Watch more Miles Davis ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/zqNTltOGh5c/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/zqNTltOGh5c/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/zqNTltOGh5c/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "MilesDavisVEVO",
                "liveBroadcastContent": "none",
                "publishTime": "2010-10-20T00:53:18Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "283AnaScOIt7sj3eFISLxgflCu8",
            "id": {
                "kind": "youtube#video",
                "videoId": "vDqULFUg6CY"
            },
            "snippet": {
                "publishedAt": "2021-08-03T02:00:07Z",
                "channelId": "UCkND01M8Ta2D9OqKqCnykUA",
                "title": "M I L E S D A V I S - Kind Of Blue - Full Album",
                "description": "M I L E S D A V I S - Kind Of Blue - Full Album Thanks for watching! Do not forget to SUBCRIBE, I like and share my video if you ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/vDqULFUg6CY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/vDqULFUg6CY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/vDqULFUg6CY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Jazz Night",
                "liveBroadcastContent": "none",
                "publishTime": "2021-08-03T02:00:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Wz2M2I-znGpeVQQmm8ZMQDv9OlQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "O7zaUceGCmY"
            },
            "snippet": {
                "publishedAt": "2020-03-17T14:00:13Z",
                "channelId": "UCtKfb_eAHOgLxf-8dIQv6SA",
                "title": "Miles Davis Meets Thelonious Monk | Essential Jazz",
                "description": "Buy the mp3 album on the Official Halidon Music Store: http://bit.ly/2QnxRnM Buy the LP on Amazon: • ES ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/O7zaUceGCmY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/O7zaUceGCmY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/O7zaUceGCmY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Jazz Essential",
                "liveBroadcastContent": "none",
                "publishTime": "2020-03-17T14:00:13Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "XPoByQCXfTJOQHTa-iqLgSrisFM",
            "id": {
                "kind": "youtube#video",
                "videoId": "Q3_3J3HstvA"
            },
            "snippet": {
                "publishedAt": "2021-09-01T01:00:04Z",
                "channelId": "UCkND01M8Ta2D9OqKqCnykUA",
                "title": "The Best Of M I L E S Davis - M I L E S Davis Greatest Hits - Jazz Night",
                "description": "The Best Of M I L E S Davis - M I L E S Davis Greatest Hits - Jazz Night Thanks for watching! Do not forget to SUBCRIBE, I like and ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Q3_3J3HstvA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Q3_3J3HstvA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Q3_3J3HstvA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Jazz Night",
                "liveBroadcastContent": "none",
                "publishTime": "2021-09-01T01:00:04Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "0V1BnHBAs83zYHE8dyg54sW1jFY",
            "id": {
                "kind": "youtube#video",
                "videoId": "fBoHkB92SU0"
            },
            "snippet": {
                "publishedAt": "2021-05-17T19:55:14Z",
                "channelId": "UCeppWdPc9ubHEZmsI8jIWxw",
                "title": "Miles Davis Quintet, Teatro dell&#39;Arte, Milan, Italy, October 11th, 1964 (Colorized)",
                "description": "Autumn Leaves 00:00 My Funny Valentine 15:07 All Blues 26:33 All of You 40:13 Joshua 50:47 The band: Miles Davis (trumpet), ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/fBoHkB92SU0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/fBoHkB92SU0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/fBoHkB92SU0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "ebjazz93",
                "liveBroadcastContent": "none",
                "publishTime": "2021-05-17T19:55:14Z"
            }
        }
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
            <h1>{video.snippet.title}</h1>
            <img src={video.snippet.thumbnails.medium.url}/>
            </>
            

        ))}
    </div>
    );

};

export default YouTubePage;