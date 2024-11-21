import React from "react";
import "./videos.css";

const videos = [
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "video/mp4",
    title: "Big Buck Bunny",
    description: "A short animation featuring a big bunny and his adventures.",
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    type: "video/mp4",
    title: "The Bear Movie",
    description: "A heartwarming tale of a bear in the wild.",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "video/mp4",
    title: "Another Bunny Tale",
    description: "A sequel to the Big Buck Bunny animation.",
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    type: "video/mp4",
    title: "Wildlife Adventure",
    description: "Explore the beauty of nature and wildlife.",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "video/mp4",
    title: "Funny Bunny",
    description: "Enjoy the humorous antics of a funny bunny.",
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    type: "video/mp4",
    title: "Forest Scenes",
    description: "A peaceful journey through a beautiful forest.",
  },
];

const VideoPage = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to the Video Gallery</h1>
        <p>
          Explore our collection of amazing videos featuring nature, wildlife,
          and animations.
        </p>
      </header>

      <main>
        <h2>Featured Videos</h2>
        <div className="video-gallery">
          {videos.map((video, index) => (
            <div key={index} className="video-wrapper">
              <video controls>
                <source src={video.src} type={video.type} />
                Your browser does not support the video tag.
              </video>
              <div className="video-details">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>


    </div>
  );
};

export default VideoPage;
