import React from "react";
import "./videos.css"; // For styling

const videos = [
  {
    id: 1,
    title: "BGMI Montage 1",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://www.example.com/video1",
  },
  {
    id: 2,
    title: "BGMI Highlights",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://www.example.com/video2",
  },
  {
    id: 3,
    title: "Epic BGMI Gameplay",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://www.example.com/video3",
  },
  {
    id: 4,
    title: "BGMI Pro Plays",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://www.example.com/video4",
  },
  {
    id: 5,
    title: "BGMI Top 10 Moments",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://www.example.com/video5",
  },
  {
    id: 6,
    title: "BGMI Tactics & Tips",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://www.example.com/video6",
  },
  {
    id: 7,
    title: "BGMI Extreme Battles",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://www.example.com/video7",
  },
  {
    id: 8,
    title: "BGMI Esports Highlights",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://www.example.com/video8",
  },
  {
    id: 9,
    title: "Clutch Moments in BGMI",
    thumbnail: "https://via.placeholder.com/300x200",
    videoUrl: "https://www.example.com/video9",
  },
];

const VideoPage = () => {
  return (
    <div className="container">
      <div className="video-page">
        <header className="video-header">
          <h1>BGMI Video Highlights</h1>
        </header>
        <main className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={video.thumbnail}
                  alt={`${video.title} Thumbnail`}
                  className="video-thumbnail"
                />
                <h2 className="video-title">{video.title}</h2>
              </a>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default VideoPage;
