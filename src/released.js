import React from 'react';
import { Link } from 'react-router-dom';
import './released.css'; // Add some basic styling

// Example images for the updates
import releasedImage1 from './images/update1.jpg';
import releasedImage2 from './images/update2.jpg';
import releasedImage3 from './images/update3.jpg';

const ReleasedUpdates = () => {
  return (
    <div className="container">
      <div className="released-updates">
        <header className="updates-header">
          <h1>Released BGMI Updates</h1>
          <p>Check out the latest updates that have been released in BGMI!</p>
        </header>

        <div className="update-list">
          {/* Released Update 1 */}
          <Link to="/update/1" className="update-link">
            <div className="update-item">
              <img src={releasedImage1} alt="Released Update 1" className="update-image" />
              <div className="update-info">
                <h2>New Map: Vikendi Returns</h2>
                <p>The fan-favorite Vikendi map is back with revamped graphics and gameplay improvements. Experience winter battles with new locations and enhanced strategic gameplay.</p>
                <p><strong>Release Date:</strong> October 15, 2024</p>
              </div>
            </div>
          </Link>

          {/* Released Update 2 */}
          <Link to="/update/2" className="update-link">
            <div className="update-item">
              <img src={releasedImage2} alt="Released Update 2" className="update-image" />
              <div className="update-info">
                <h2>New Weapon: Crossbow</h2>
                <p>The Crossbow is now available in BGMI! This silent yet powerful weapon is perfect for stealth kills, allowing you to pick off enemies from a distance with precision.</p>
                <p><strong>Release Date:</strong> October 20, 2024</p>
              </div>
            </div>
          </Link>

          {/* Released Update 3 */}
          <Link to="/update/3" className="update-link">
            <div className="update-item">
              <img src={releasedImage3} alt="Released Update 3" className="update-image" />
              <div className="update-info">
                <h2>Improved Anti-Cheat System</h2>
                <p>The latest update introduces a major improvement to BGMI’s anti-cheat system, providing a fairer gaming experience and ensuring that no players have an unfair advantage.</p>
                <p><strong>Release Date:</strong> November 1, 2024</p>
              </div>
            </div>
          </Link>

          {/* Released Update 4 */}
          <Link to="/update/4" className="update-link">
            <div className="update-item">
              <img src={releasedImage1} alt="Released Update 4" className="update-image" />
              <div className="update-info">
                <h2>Graphics Enhancements and Bug Fixes</h2>
                <p>This update focuses on graphical improvements, fixing bugs, and enhancing performance for a smoother and more immersive gameplay experience.</p>
                <p><strong>Release Date:</strong> November 10, 2024</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReleasedUpdates;
