import React from 'react';
import eyeIcon from '../assets/img/icon/eye-icon.svg';
import processImage from '../assets/img/process/original-6a9b10c285a8334320a9b69f41dfec32.webp';

const CareerProcessTitle = () => {
  return (
    <section className="process process-bg pt-115 pb-130" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="row align-items-center mt-none-30">
          <div className="col-lg-6 mt-30">
            <div className="sec-title--two mb-50">
              <div className="sub-title">
                <img src={eyeIcon} alt="eye icon" /> Hiring process
              </div>
              <h2 className="title">Our hiring process</h2>
            </div>

            <div className="xb-faq cp-faq">
              <div className="accordion accordion_box clearfix" id="hiringAccordion">

                <div className="accordion-item block active-block">
                  <h2 className="accordion-header">
                    <button className="accordion-button acc-btn active" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      <span className="number">01</span> _Send your CV
                      <span className="arrow"></span>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#hiringAccordion">
                    <div className="accordion-body acc_body current content">
                      <p>Apply for a position by sending us your CV or providing a link to your LinkedIn profile, and take the first step toward joining our team.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item block">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      <span className="number">02</span> _Initial screening results?
                      <span className="arrow"></span>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#hiringAccordion">
                    <div className="accordion-body acc_body content">
                      <p>Our recruiter will get back to you if your resume meets our requirements in order to introduce you to the role.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item block">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      <span className="number">03</span> _Job interview
                      <span className="arrow"></span>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#hiringAccordion">
                    <div className="accordion-body acc_body content">
                      <p>You will meet a few of your potential colleagues to talk about your skills, background, and expectations in detail.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item block">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                      <span className="number">04</span> _Test task
                      <span className="arrow"></span>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#hiringAccordion">
                    <div className="accordion-body acc_body content">
                      <p>If needed, we’ll arrange a small test task. Depending on the project and role, this may be followed by a client interview.</p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item block">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                      <span className="number">05</span> _You’re hired!
                      <span className="arrow"></span>
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#hiringAccordion">
                    <div className="accordion-body acc_body content">
                      <p>By deciding we are a good match for each other, we’ll agree the terms of you starting your career at Worley Ventures.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-30">
            <div className="cp-process-right">
              <div className="xb-img-Career">
                <img src={processImage} alt="hiring process" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerProcessTitle;
