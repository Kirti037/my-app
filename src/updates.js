import React from 'react';
import './released.css'; // Add some basic styling

// Example images for the updates
import updateImage1 from './images/update1.jpg';
import updateImage2 from './images/update2.jpg';
import updateImage3 from './images/update3.jpg';

const UpcomingUpdates = () => {
  return (
    <div className="container">
      <div className="upcoming-updates">
        <header className="updates-header">
          <h1>Upcoming BGMI Updates</h1>
          <p>Get ready for the exciting new features, fixes, and events in BGMI!</p>
        </header>

        <div className="update-list">
          {/* Update 1 */}
          <div className="update-item">
            <img src={updateImage1} alt="Update 1" className="update-image" />
            <div className="update-info">
              <h2>New Map: Nusa Island</h2>
              <p>Explore the new Nusa Island map, featuring vibrant landscapes, hidden spots, and unique tactical gameplay. It’s the perfect map for fast-paced combat and tactical gameplay!</p>
              <p><strong>Release Date:</strong> November 25, 2024</p>
            </div>
          </div>

          {/* Update 2 */}
          <div className="update-item">
            <img src={updateImage2} alt="Update 2" className="update-image" />
            <div className="update-info">
              <h2>New Vehicle: Hovercraft</h2>
              <p>Introducing the new hovercraft in BGMI! This vehicle can glide over land and water, providing a unique advantage during combat. Perfect for crossing rivers or navigating difficult terrain.</p>
              <p><strong>Release Date:</strong> December 1, 2024</p>
            </div>
          </div>

          {/* Update 3 */}
          <div className="update-item">
            <img src={updateImage3} alt="Update 3" className="update-image" />
            <div className="update-info">
              <h2>Season 20 Royale Pass</h2>
              <p>Get ready for the Season 20 Royale Pass with exciting new skins, outfits, and emotes. Exclusive rewards await those who reach the highest tiers, including new weapon skins and rare cosmetic items!</p>
              <p><strong>Release Date:</strong> December 10, 2024</p>
            </div>
          </div>

          {/* Update 4 */}
          <div className="update-item">
            <img src={updateImage1} alt="Update 4" className="update-image" />
            <div className="update-info">
              <h2>Bug Fixes and Game Optimizations</h2>
              <p>This update focuses on fixing major bugs reported by the community and improving the game's overall performance. Expect faster load times and smoother graphics.</p>
              <p><strong>Release Date:</strong> December 15, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingUpdates;
