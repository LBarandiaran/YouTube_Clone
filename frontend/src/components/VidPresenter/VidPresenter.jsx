import React from 'react';

const VidPresenter = ({video}) => {
    return ( <li>
        <img src={video.snippet.thumbnails.medium.url} alt=""/>
        <h2>{video.snippet.title}</h2>
    </li> );
}

export default VidPresenter;