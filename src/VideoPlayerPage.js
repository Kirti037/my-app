import React from "react";
import { useParams, Link } from "react-router-dom";
import "./videos.css";

const videos = [
    {
      id: 1,
      title: "Unstoppable Highlights: Epic BGMI Montage 2024",
      thumbnail: "https://img.youtube.com/vi/geeIBJb8xT4/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=geeIBJb8xT4",
    },
    {
      id: 2,
      title: "BGMI: Epic Gaming Moments That Will Blow Your Mind",
      thumbnail: "https://img.youtube.com/vi/5q7pZQFU4cs/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=5q7pZQFU4cs",
    },
    {
      id: 3,
      title: "Epic Kills & Intense Moments",
      thumbnail: "https://img.youtube.com/vi/rHfUaYjNUrk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=rHfUaYjNUrk",
    },
    {
      id: 4,
      title: "UNSTOPPABLE 60 FPS BGMI MONTAGE",
      thumbnail: "https://img.youtube.com/vi/tKKrD3okizo/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=tKKrD3okizo",
    },
    
    {
      id: 5,
      title: "BGMI Montage 1 vs 4 Clutches",
      thumbnail: "https://img.youtube.com/vi/5BA_roJD2yk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=5BA_roJD2yk",
    },
    {
      id: 6,
      title: "BGMI Montage Gameplay 2024 | Drakula Castle",
      thumbnail: "https://img.youtube.com/vi/7whKwlawpAE/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=7whKwlawpAE",
    },
    {
      id: 7,
      title: "Fastest 5 Fingers + Gyroscope | PUBG/BGMI Montage 2024",
      thumbnail: "https://img.youtube.com/vi/2soJ9pmjEXM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=2soJ9pmjEXM",
    },
    {
      id: 8,
      title: "BGMI Short Montage Video",
      thumbnail: "https://img.youtube.com/vi/-xZxWAg_PEY/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=-xZxWAg_PEY",
    },
    {
      id: 9,
      title: "BGMI Gameplay 2024 | BGMI Montage",
      thumbnail: "https://img.youtube.com/vi/CXQYIwrYBF4/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=CXQYIwrYBF4",
    },
    {
      id: 10,
      title: "BGMI Montage Video | N E X Gaming | 2024",
      thumbnail: "https://img.youtube.com/vi/Iiu5aky5u8U/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=Iiu5aky5u8U",
    },
    {
      id: 11,
      title: "BGMI Venom Montage - Epic Kills & Insane Gameplay",
      thumbnail: "https://img.youtube.com/vi/lp8qQtGJ_b4/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=lp8qQtGJ_b4",
    }
    
    
  ];

const VideoPlayerPage = () => {
  const { id } = useParams();
  const currentVideo = videos.find((v) => v.id === parseInt(id));

  if (!currentVideo) {
    return <div>Video not found</div>;
  }

  // Split videos into two groups: right-side suggestions and bottom suggestions
  const rightSideVideos = videos.slice(0, 3); // Show the first 3 videos on the right side
  const bottomVideos = videos.slice(3); // Show the remaining videos below

  return (
    <div className="video-player-page">
      <div className="player-and-right-suggestions">
        <div className="video-player">
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${currentVideo.videoUrl.split("v=")[1]}`}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-suggestions-right">
          <h2>Suggestions</h2>
          {rightSideVideos
            .filter((video) => video.id !== currentVideo.id) // Exclude the current video
            .map((video) => (
              <div key={video.id} className="suggestion-card">
                <Link to={`/video/${video.id}`}>
                  <img
                    src={video.thumbnail}
                    alt={`${video.title} Thumbnail`}
                    className="suggestion-thumbnail"
                  />
                  <h3 className="suggestion-title">{video.title}</h3>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <div className="video-suggestions-bottom">
        <h2>More Videos</h2>
        <div className="suggestion-grid">
          {bottomVideos
            .filter((video) => video.id !== currentVideo.id) // Exclude the current video
            .map((video) => (
              <div key={video.id} className="suggestion-card">
                <Link to={`/video/${video.id}`}>
                  <img
                    src={video.thumbnail}
                    alt={`${video.title} Thumbnail`}
                    className="suggestion-thumbnail"
                  />
                  <h3 className="suggestion-title">{video.title}</h3>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
