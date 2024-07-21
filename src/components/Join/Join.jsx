import { useState } from 'react';
import './Join.css';

const categories = {
  beginner: [
    { name: "Starter Pack", value: "starter-pack" },
    { name: "Foundation Builder", value: "foundation-builder" },
    { name: "Beginner Bootcamp", value: "beginner-bootcamp" },
    { name: "Newbie Fitness", value: "newbie-fitness" },
    { name: "Intro to Fitness", value: "intro-to-fitness" }
  ],
  intermediate: [
    { name: "Intermediate Builder", value: "intermediate-builder" },
    { name: "Fitness Enhancer", value: "fitness-enhancer" },
    { name: "Progressive Workout", value: "progressive-workout" },
    { name: "Intermediate Bootcamp", value: "intermediate-bootcamp" },
    { name: "Cardio and Strength Combo", value: "cardio-strength-combo" }
  ],
  advanced: [
    { name: "Advanced Strength Training", value: "advanced-strength-training" },
    { name: "Elite Fitness Plan", value: "elite-fitness-plan" },
    { name: "Athlete Training", value: "athlete-training" },
    { name: "Advanced Bootcamp", value: "advanced-bootcamp" },
    { name: "Peak Performance", value: "peak-performance" }
  ],
  weightLoss: [
    { name: "Quick Slim", value: "quick-slim" },
    { name: "Steady Weight Loss", value: "steady-weight-loss" },
    { name: "Weight Loss Bootcamp", value: "weight-loss-bootcamp" },
    { name: "Fat Burner", value: "fat-burner" },
    { name: "Lean and Fit", value: "lean-and-fit" }
  ],
  muscleGain: [
    { name: "Muscle Builder", value: "muscle-builder" },
    { name: "Bulk Up Plan", value: "bulk-up-plan" },
    { name: "Strength and Size", value: "strength-and-size" },
    { name: "Advanced Muscle Gain", value: "advanced-muscle-gain" },
    { name: "Lean Muscle Program", value: "lean-muscle-program" }
  ],
  cardioFitness: [
    { name: "Cardio Kickstart", value: "cardio-kickstart" },
    { name: "Endurance Booster", value: "endurance-booster" },
    { name: "High-Intensity Cardio", value: "high-intensity-cardio" },
    { name: "Cardio Mix", value: "cardio-mix" },
    { name: "Heart Health Plan", value: "heart-health-plan" }
  ],
  strengthTraining: [
    { name: "Strength Basics", value: "strength-basics" },
    { name: "Strength and Conditioning", value: "strength-conditioning" },
    { name: "Powerlifting Program", value: "powerlifting-program" },
    { name: "Advanced Strength", value: "advanced-strength" },
    { name: "Strength and Endurance", value: "strength-endurance" }
  ],
  flexibilityMobility: [
    { name: "Flexibility Beginner", value: "flexibility-beginner" },
    { name: "Yoga Flex", value: "yoga-flex" },
    { name: "Stretch and Relax", value: "stretch-relax" },
    { name: "Mobility Boost", value: "mobility-boost" },
    { name: "Advanced Flexibility", value: "advanced-flexibility" }
  ],
  personalTraining: [
    { name: "One-on-One Training", value: "one-on-one-training" },
    { name: "Custom Fitness Plan", value: "custom-fitness-plan" },
    { name: "Personalized Weight Loss", value: "personalized-weight-loss" },
    { name: "Strength and Conditioning Coaching", value: "strength-conditioning-coaching" },
    { name: "Elite Personal Training", value: "elite-personal-training" }
  ],
  groupClasses: [
    { name: "Group Cardio", value: "group-cardio" },
    { name: "Strength in Numbers", value: "strength-in-numbers" },
    { name: "Group Yoga", value: "group-yoga" },
    { name: "Bootcamp Group", value: "bootcamp-group" },
    { name: "Dance Fitness", value: "dance-fitness" }
  ]
};

const Join = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [address, setAddress] = useState({ street: '', city: '', state: '', zip: '' });
  const [plan, setPlan] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 3) {
      if (name.firstName && name.lastName && address.street && address.city && address.state && address.zip && plan && subCategory) {
        setShowModal(true);
      } else {
        alert("Please fill in all fields.");
      }
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const updateSubCategories = (e) => {
    const selectedCategory = e.target.value;
    setPlan(selectedCategory);
    setSubCategories(categories[selectedCategory] || []);
    setSubCategory(''); // Reset sub-category
  };

  const closeModal = () => {
    setShowModal(false);
    setStep(1); // Reset to the first step
  };

  return (
    
    <div className='Join' id='join'>
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
          {step === 1 && (
            <div>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={name.firstName}
                  onChange={(e) => setName({ ...name, firstName: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  value={name.lastName}
                  onChange={(e) => setName({ ...name, lastName: e.target.value })}
                  required
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="form-group">
                <label htmlFor="street">Street:</label>
                <input
                  type="text"
                  id="street"
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip Code:</label>
                <input
                  type="text"
                  id="zip"
                  value={address.zip}
                  onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                  required
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="form-group">
                <label htmlFor="plan">Category:</label>
                <select
                  id="plan"
                  value={plan}
                  onChange={updateSubCategories}
                  required
                >
                  <option value="" disabled>Select a Plan</option>
                  {Object.keys(categories).map(category => (
                    <option key={category} value={category}>{category.replace(/([A-Z])/g, ' $1').toUpperCase()}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="subCategory">Sub-Category:</label>
                <select
                  id="subCategory"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>Select a Sub-Category</option>
                  {subCategories.map(sub => (
                    <option key={sub.value} value={sub.value}>{sub.name}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <div className="form-navigation">
            {step > 1 && (
              <button type="button" onClick={handlePrevious} className="btn-submit">Previous</button>
            )}
            <button type="submit" className="btn-submit">{step === 3 ? 'Submit' : 'Next'}</button>
          </div>

          {/* Dotted Progress Bar */}
          <div className="progress-bar">
            <div className={`dot ${step >= 1 ? 'active' : ''}`}></div>
            <div className={`dot ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`dot ${step >= 3 ? 'active' : ''}`}></div>
          </div>
        </form>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Form Submitted Successfully!</h2>
              <p><strong>Name:</strong> {name.firstName} {name.lastName}</p>
              <p><strong>Address:</strong> {address.street}, {address.city}, {address.state}, {address.zip}</p>
              <p><strong>Plan:</strong> {plan.replace(/([A-Z])/g, ' $1').toUpperCase()}</p>
              <p><strong>Sub-Category:</strong> {subCategories.find(sub => sub.value === subCategory)?.name}</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
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
            <p>613 323 32323</p>
            <h4>Hours:</h4>
            <p>Monday - Friday: 6am - 12pm</p>
            <p>Saturday - Sunday: 8am - 12pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
