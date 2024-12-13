import React from 'react';
import { useParams } from 'react-router-dom';
import './released-detail.css';
// Data for the updates (You can also fetch this from an API or a database in a real-world app)
const updatesData = {
  1: {
    title: "New Map: Vikendi Returns",
    description:
      "The fan-favorite Vikendi map is back with revamped graphics and gameplay improvements. Experience winter battles with new locations and enhanced strategic gameplay.",
    releaseDate: "October 15, 2024",
    details: "The new Vikendi map comes with several improvements, including new locations like the Castle and some changes to existing spots to enhance strategy. The winter environment is more immersive with improved snow effects.",
    image: "./images/update1.jpg", // Path to image
  },
  2: {
    title: "New Weapon: Crossbow",
    description:
      "The Crossbow is now available in BGMI! This silent yet powerful weapon is perfect for stealth kills, allowing you to pick off enemies from a distance with precision.",
    releaseDate: "October 20, 2024",
    details: "The Crossbow is a special weapon with limited ammo. It's ideal for players who prefer stealth and long-range attacks, and it can be found in various locations on the map. It's perfect for eliminating enemies without alerting others.",
    image: "./images/update2.jpg", // Path to image
  },
  3: {
    title: "Improved Anti-Cheat System",
    description:
      "The latest update introduces a major improvement to BGMI’s anti-cheat system, providing a fairer gaming experience and ensuring that no players have an unfair advantage.",
    releaseDate: "November 1, 2024",
    details: "The new anti-cheat measures include better detection of hacks and cheats, ensuring that players can enjoy a smoother, fairer gaming experience. It includes improved server-side security and more accurate detection algorithms.",
    image: "./images/update3.jpg", // Path to image
  },
  4: {
    title: "Graphics Enhancements and Bug Fixes",
    description:
      "This update focuses on graphical improvements, fixing bugs, and enhancing performance for a smoother and more immersive gameplay experience.",
    releaseDate: "November 10, 2024",
    details: "This update includes enhanced textures, improved lighting, and smoother animations for a more realistic and immersive experience. It also resolves several bugs that were affecting gameplay, especially related to frame rates and performance.",
    image: "./images/update1.jpg", // Path to image
  },
};

const UpdateDetailPage = () => {
  const { id } = useParams(); // Fetch the update ID from the URL
  const update = updatesData[id]; // Get the update details based on the ID

  if (!update) {
    return <p>Update not found!</p>; // Handle the case where the update ID doesn't exist
  }

  return (
    <div className="update-detail-container">
      <h1>{update.title}</h1>
      <p><strong>Release Date:</strong> {update.releaseDate}</p>
      <img src={update.image} alt={update.title} className="update-image" />
      <p>{update.description}</p>
      <h3>Details:</h3>
      <p>{update.details}</p>
    </div>
  );
};



export default UpdateDetailPage;




