import React, { useState } from 'react';
import './Faq.css'; 

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are your gym's operating hours?",
      answer: "We are open from 6:00 AM to 12:00 PM, Monday through Friday, and from 8:00 AM to 12:00 PM on weekends."
    },
    {
      question: "Do you offer personal training services?",
      answer: "Yes, we offer personal training services. You can book a session with one of our certified trainers at the front desk or through our website."
    },
    {
      question: "What is your cancellation policy for memberships?",
      answer: "Memberships can be canceled with a 30-day notice. Please visit our customer service desk for more details."
    },
    {
      question: "Are there any age restrictions for gym members?",
      answer: "Members must be at least 16 years old. Those under 18 require parental consent to join."
    },
    {
      question: "Do you provide gym towels and water bottles?",
      answer: "We provide towels for your convenience. We also have a water station where you can refill your water bottle."
    },
    {
      question: "Can I bring a guest to the gym?",
      answer: "Yes, members can bring a guest. A guest pass can be obtained at the front desk, and a fee may apply."
    },
    {
      question: "What types of classes do you offer?",
      answer: "We offer a variety of classes including yoga, pilates, spin, and high-intensity interval training (HIIT)"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id='faq'>
      <div className="blur5 main-blur5"></div>
      <div className="title">
        <h2>Frequently</h2>
        <h2 className='stroke-text'>Asked</h2>
        <h2>Questions</h2>
      </div>
    
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={`faq-arrow ${openIndex === index ? 'open' : ''}`}>▼</span>
            </button>
            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
