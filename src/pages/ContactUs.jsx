import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbxwz-xyay1LOfYzqVlz7aHiHlwfaA24c_wE_OWqwI3SWrfxbHxnnDuYJCSHZpieJybX1A/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      .then(() => {
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ name: '', email: '', phone: '', company: '', description: '' });
      })
      .catch(error => console.error("Error submitting form:", error));      
      
  };

  return (
    <section className="contact-section pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="contact-form-wrapper">
              <div className="sec-title--two text-center mb-60">
                <h2 className="title">Ready to discuss your project?</h2>
                <p className="text-muted">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Form */}
              <div className="contact-form mb-80">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="name" className="fw-bold mb-2">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label htmlFor="email" className="fw-bold mb-2">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="phone" className="fw-bold mb-2">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label htmlFor="company" className="fw-bold mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="description" className="fw-bold mb-2">
                      Project Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      id="description"
                      name="description"
                      rows="5"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="thm-btn thm-btn--aso thm-btn--aso_yellow btn-lg px-5">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Information 
              <div className="contact-info">
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4 text-center">
                    <i className="bi bi-geo-alt-fill text-primary fs-1"></i>
                    <h5>Our Location</h5>
                    <p>123 Business Street<br />City, State 12345</p>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4 text-center">
                    <i className="bi bi-telephone-fill text-primary fs-1"></i>
                    <h5>Phone Number</h5>
                    <p>+1 (555) 123-4567<br />Mon-Fri 9AM-6PM</p>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4 text-center">
                    <i className="bi bi-envelope-fill text-primary fs-1"></i>
                    <h5>Email Address</h5>
                    <p>info@worleyventure.com<br />support@worleyventure.com</p>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;