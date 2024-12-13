// import React from "react";
// import "./videos.css"; // For styling

// const videos = [
//   {
//     id: 1,
//     title: "Unstoppable Highlights: Epic BGMI Montage 2024",
//     thumbnail: "https://img.youtube.com/vi/geeIBJb8xT4/maxresdefault.jpg",
//     videoUrl: "https://www.youtube.com/watch?v=geeIBJb8xT4",
//   },
//   {
//     id: 2,
//     title: "BGMI: Epic Gaming Moments That Will Blow Your Mind",
//     thumbnail: "https://img.youtube.com/vi/5q7pZQFU4cs/maxresdefault.jpg",
//     videoUrl: "https://www.youtube.com/watch?v=5q7pZQFU4cs",
//   },
//   {
//     id: 3,
//     title: "Epic Kills & Intense Moments",
//     thumbnail: "https://img.youtube.com/vi/rHfUaYjNUrk/maxresdefault.jpg",
//     videoUrl: "https://www.youtube.com/watch?v=rHfUaYjNUrk",
//   },
//   {
//     id: 4,
//     title: "UNSTOPPABLE 60 FPS BGMI MONTAGE",
//     thumbnail: "https://img.youtube.com/vi/tKKrD3okizo/maxresdefault.jpg",
//     videoUrl: "https://www.youtube.com/watch?v=tKKrD3okizo",
//   },
  
//   {
//     id: 5,
//     title: "BGMI Montage 1 vs 4 Clutches",
//     thumbnail: "https://img.youtube.com/vi/5BA_roJD2yk/maxresdefault.jpg",
//     videoUrl: "https://www.youtube.com/watch?v=5BA_roJD2yk",
//   },
//   {
//     id: 6,
//     title: "BGMI Montage Gameplay 2024 | Drakula Castle",
//     thumbnail: "https://img.youtube.com/vi/7whKwlawpAE/maxresdefault.jpg",
//     videoUrl: "https://www.youtube.com/watch?v=7whKwlawpAE",
//   },
//   {
//     id: 7,
//     title: "Fastest 5 Fingers + Gyroscope | PUBG/BGMI Montage 2024",
//     thumbnail: "https://img.youtube.com/vi/2soJ9pmjEXM/maxresdefault.jpg",
//     videoUrl: "https://www.youtube.com/watch?v=2soJ9pmjEXM",
//   },
//   {
//     id: 8,
//     title: "BGMI Short Montage Video",
//     thumbnail: "https://img.youtube.com/vi/-xZxWAg_PEY/maxresdefault.jpg",
//     videoUrl: "https://www.youtube.com/watch?v=-xZxWAg_PEY",
//   },
//   {
//     id: 9,
//     title: "BGMI Gameplay 2024 | BGMI Montage",
//     thumbnail: "https://img.youtube.com/vi/CXQYIwrYBF4/maxresdefault.jpg",
//     videoUrl: "https://www.youtube.com/watch?v=CXQYIwrYBF4",
//   },
//   {
//     id: 10,
//     title: "BGMI Montage Video | N E X Gaming | 2024",
//     thumbnail: "https://img.youtube.com/vi/Iiu5aky5u8U/maxresdefault.jpg",
//     videoUrl: "https://www.youtube.com/watch?v=Iiu5aky5u8U",
//   },
//   {
//     id: 11,
//     title: "BGMI Venom Montage - Epic Kills & Insane Gameplay",
//     thumbnail: "https://img.youtube.com/vi/lp8qQtGJ_b4/maxresdefault.jpg",
//     videoUrl: "https://www.youtube.com/watch?v=lp8qQtGJ_b4",
//   }
  
  
// ];

// const VideoPage = () => {
//   return (
//     <div className="container">
//       <div className="video-page">
//         <header className="video-header">
//           <h1>BGMI Video Highlights</h1>
//         </header>
//         <main className="video-grid">
//           {videos.map((video) => (
//             <div key={video.id} className="video-card">
//               <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
//                 <img
//                   src={video.thumbnail}
//                   alt={`${video.title} Thumbnail`}
//                   className="video-thumbnail"
//                 />
//                 <h2 className="video-title">{video.title}</h2>
//               </a>
//             </div>
//           ))}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default VideoPage;
import React from "react";
import { Link } from "react-router-dom";
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
              <Link to={`/video/${video.id}`}>
                <img
                  src={video.thumbnail}
                  alt={`${video.title} Thumbnail`}
                  className="video-thumbnail"
                />
                <h2 className="video-title">{video.title}</h2>
              </Link>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default VideoPage;
