import './App.scss';

const App = () => {
  return (
    <div className="App">
      <h3>Please enter your name and pick the Sectors you are currently involved in.</h3>
      <hr />
      <div className="App__container">
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
            <div className="item">
              <input type="submit" name="Save" value="Save" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
