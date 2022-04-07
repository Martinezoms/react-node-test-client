import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home__container">
      <h3>Please enter your name and pick the Sectors you are currently involved in.</h3>
      <hr />

      <form>
        <div className="item">
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input type="text" id="name" name="name" placeholder="Your name..." required />
        </div>

        <div className="item">
          <label htmlFor="sectors">
            Sectors<span>*</span>
          </label>
          <div id="sectors" className="item__sector">
            <select required>
              <option disabled>Select sector</option>
              <option>Manufacturing</option>
              <option>Other</option>
              <option>Service</option>
            </select>
          </div>
          <div className="item">
            <input type="checkbox" id="agreement" name="agreement" required />
            <label htmlFor="agreement">Agree to terms</label>
          </div>
          <div className="form-buttons">
            <div className="item">
              <input type="submit" name="Save" value="Save" />
            </div>
            <div className="item">
              <button>Edit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
