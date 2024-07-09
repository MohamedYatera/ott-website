import { useState } from 'react';
import './Join.css';


const Join = () => {
  const [name, setName] = useState('');
  const [plan, setPlan] = useState('basic');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, plan });

  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='Join' id='testimonials'>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY</span>
          <span>TO MASTER</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'>WITH US</span>
        </div>
      </div>

      
      
      <div className="middle-j">
        <form className="form-component" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="plan">Plan:</label>
            <select
              id="plan"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              required
            >
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>

      <div className="right-j">
        <div className="location-card">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89609.37753392366!2d-75.8533643027344!3d45.4235937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04ff4fe494ef%3A0x26bb54f60c29f6e!2sParliament%20Hill!5e0!3m2!1sen!2sca!4v1720406039525!5m2!1sen!2sca"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <div className="location-info">
            <h3>Our Location</h3>
            <p>Wellington St, Ottawa, ON K1A 0A9</p>
            <h4>Hours:</h4>
            <p>Monday - Friday: 6am - 12pm</p>
            <p>Saturday - Sunday: 8am - 12pm</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Join;
