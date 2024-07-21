import React, { useState } from 'react';
import './Programs.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import gympic1 from '../../assets/gympic1.jpg';
import gympic2 from '../../assets/gympic2.jpg';
import gympic3 from '../../assets/gympic3.jpg';
import Akatsuki from '../../assets/Akatsuki.png';

const Programs = () => {
    const [showFormModal, setShowFormModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        plan: 'basic',
        age: '',
        email: '',
        phoneNumber: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { firstName, lastName, address, city, postalCode, age, email, phoneNumber } = formData;
        return firstName && lastName && address && city && postalCode && age && email && phoneNumber;
    };

    const handleFormSubmit = () => {
        if (validateForm()) {
            setShowFormModal(false);
            setShowConfirmationModal(true);
        } else {
            alert("Please fill in all required fields.");
        }
    };

    const handleEdit = () => {
        setShowConfirmationModal(false);
        setShowFormModal(true);
    };

    const handleFinalSubmit = () => {
        alert("Form submitted successfully!");
        setShowConfirmationModal(false);
    };

    return (
        <div className='Programs'>
            <div className="plans-container" id='plan'>
                <div className='blur plans-blur-1'></div>
                <div className='blur plans-blur-2'></div>
                <div className="programs-header2" style={{ gap: '2rem', marginTop: "4rem" }}>
                    <span>Awaken Your Power</span>
                    <span className='stroke-text'>and Conquer</span>
                    <span>New Heights!</span>
                </div>

                {/* Plans card */}
                <div className="plans">
                    {plansData.map((plan, i) => (
                        <div className='plan' key={i}>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>

                            <div className="features">
                                {plan.features.map((feature, i) => (
                                    <div className='feature' key={i}>
                                        <img src={whiteTick} alt="" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div><span>See more benefits </span></div>
                            <button onClick={() => setShowFormModal(true)} className='btn' style={{ color: 'black', borderRadius: '10px' }}>Join now</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className='Extra-info'>
                <span className='stroke-text'>And Many More !</span>
                <div className='mini-gallery1'>
                    <img src={gympic1} alt="" />
                    <img src={gympic2} alt="" />
                    <img src={gympic3} alt="" />
                </div>
                <div className='line-break'>
                    <img src={Akatsuki} alt="" />
                    <img src={Akatsuki} alt="" />
                    <img src={Akatsuki} alt="" />
                    <img src={Akatsuki} alt="" />
                </div>
            </div>

            {/* Form Modal */}
            {showFormModal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <button className='close-button' onClick={() => setShowFormModal(false)}>X</button>
                        <h2>Sign Up Form</h2>
                        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
                        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
                        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} />
                        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} />
                        <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleInputChange} />
                        <select name="plan" value={formData.plan} onChange={handleInputChange}>
                            <option value="basic">Basic Plan</option>
                            <option value="premium">Premium Plan</option>
                            <option value="pro">Pro Plan</option>
                        </select>
                        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} />
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                        <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInputChange} />
                        <button onClick={handleFormSubmit}>Submit</button>
                    </div>
                </div>
            )}

            {/* Confirmation Modal */}
            {showConfirmationModal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <h2>Confirm Your Details</h2>
                        <p><strong>First Name:</strong> {formData.firstName}</p>
                        <p><strong>Last Name:</strong> {formData.lastName}</p>
                        <p><strong>Address:</strong> {formData.address}</p>
                        <p><strong>City:</strong> {formData.city}</p>
                        <p><strong>Postal Code:</strong> {formData.postalCode}</p>
                        <p><strong>Plan:</strong> {formData.plan}</p>
                        <p><strong>Age:</strong> {formData.age}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
                        <button className='edit-button' onClick={handleEdit}>Edit</button>
                        <button onClick={handleFinalSubmit}>Confirm</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Programs;
