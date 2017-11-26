import React from 'react';
// import VideoDetail from './video_detail';

const VideoDetail = ({video}) => {

	if(!video) {
		return <div>Loading..</div>
	}
	
  const videoId = video.id.videoId;
	const url = `http://youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
    	<div className="embed-responsive embed-responsive-16by9">
    		<iframe className="embed-responsive-item" src={url}></iframe>
    	</div>
    	<div className="details"></div>
    		<div>{video.snippet.title}</div>
    		<div>{video.snippet.description}</div>
    </div>
  );
}

export default VideoDetail;
