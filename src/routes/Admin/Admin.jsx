import React from 'react';
import './Admin.scss';

const Admin = () => {
  return (
    <div className="admin__container">
      <h3>Edit sectors here</h3>
      <hr />

      <form>
        <div className="item">
          <label htmlFor="name">
            Sector<span>*</span>
          </label>
          <input type="text" id="name" name="name" placeholder="Input sector..." required />
        </div>
        <p>
          Select industry<span>*</span>
        </p>
        <div className="industry-checkbox">
          <div className="item">
            <input type="radio" id="agreement" name="agreement" required />
            <label htmlFor="agreement">Manufacturing</label>
          </div>
          <div className="item">
            <input type="radio" id="agreement" name="agreement" required />
            <label htmlFor="agreement">Service</label>
          </div>
          <div className="item">
            <input type="radio" id="agreement" name="agreement" required />
            <label htmlFor="agreement">Other</label>
          </div>
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

export default Admin;
