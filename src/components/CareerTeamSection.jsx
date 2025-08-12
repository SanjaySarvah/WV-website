import React from 'react';
import cpIcon from '../assets/img/icon/cp-icon.svg';
import locIcon from '../assets/img/icon/loc-icon.svg';
import clockIcon from '../assets/img/icon/clock-icon.svg';

const CareerTeamSection = () => {
  const jobs = [
    {
      title: "Enterprise SEO Consultant",
      categories: "cat1 cat3 cat5",
      location: "Remote, (USA)",
      link: "#!",
      time: "Full time"
    },
    {
      title: "IT Infrastructure Manager",
      categories: "cat2 cat4",
      location: "Remote, Colombia",
      link: "#!"
    },
    {
      title: "Technical Project Manager",
      categories: "cat1 cat5",
      location: "Warsaw, Poland",
      link: "#!"
    },
    {
      title: "Cloud Solutions Architect",
      categories: "cat2 cat3",
      location: "Bangalore (Hybrid)",
      link: "#!"
    },
    {
      title: "IT Support Engineer",
      categories: "cat1 cat4",
      location: "Remote, Argentina",
      link: "#!"
    },
    {
      title: "Global Benefits Manager",
      categories: "cat2 cat3 cat5",
      location: "Remote, Canada",
      link: "#!"
    }
  ];

  return (
    <section className="team pt-130 pb-130" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="sec-title--two text-center mb-50">
          <div
            className="sub-title wow fadeInDown"
            data-wow-duration="600ms"
            style={{ visibility: "visible", animationDuration: "600ms", animationName: "fadeInDown" }}
          >
            <img src={cpIcon} alt="cp icon" />
            Open Positions
          </div>
          <h2
            className="title wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
            style={{
              visibility: "visible",
              animationDuration: "600ms",
              animationDelay: "150ms",
              animationName: "fadeInDown"
            }}
          >
            Join our team
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="team-menu mb-50">
              <button className="active" data-filter="*">View all</button>
              <button data-filter=".cat1">Development</button>
              <button data-filter=".cat2">Design</button>
              <button data-filter=".cat3">Marketing</button>
              <button data-filter=".cat4">Customer services</button>
              <button data-filter=".cat5">Management</button>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="cp-team-wrap grid" style={{ position: "relative", height: "1071.68px" }}>
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className={`cp-team-item grid-item ${job.categories}`}
                  style={{ position: "absolute", left: "0%", top: `${index * 178}px` }}
                >
                  <div className="xb-item--inner ul_li_between">
                    <div className="xb-item--content">
                      <h3 className="xb-item--title">
                        <a href={job.link} style={{ textDecoration: "none" }}>
                          {job.title}
                        </a>
                      </h3>
                      <div className="xb-item--holder ul_li">
                        <span className="xb-item--meta">
                          <img src={locIcon} alt="location icon" />
                          {job.location}
                        </span>
                        <span className="xb-item--meta">
                          <img src={clockIcon} alt="clock icon" />
                          {job.time || "Full time"}
                        </span>
                      </div>
                    </div>
                    <div className="cp-team-btn">
                      {/* <a href="https://worleyventure.com/booking" className="cp-btn blue-btn">
                        Schedule Interview <i className="fal fa-arrow-right"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTeamSection;
