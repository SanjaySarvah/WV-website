import React from "react";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="title-container">
        <h1 className="title">Our team</h1>

        {/* Positioned team member images */}
        <div className="member-img img1">
          <img src="https://worleyventure.com/assets/img/team/img01.png" alt="Member 1" />
        </div>
        <div className="member-img img2">
          <img src="https://worleyventure.com/assets/img/team/img02.png" alt="Member 2" />
        </div>
        <div className="member-img img3">
          <img src="https://worleyventure.com/assets/img/team/img03.png" alt="Member 3" />
        </div>
        <div className="member-img img4">
          <img src="https://worleyventure.com/assets/img/team/img04.png" alt="Member 4" />
        </div>
        <div className="member-img img5">
          <img src="https://worleyventure.com/assets/img/team/img05.png" alt="Member 5" />
        </div>
        <div className="member-img img6">
          <img src="https://worleyventure.com/assets/img/team/img06.png" alt="Member 6" />
        </div>
        <div className="member-img img7">
          <img src="https://worleyventure.com/assets/img/team/img07.png" alt="Member 7" />
        </div>
      </div>

     <style jsx>{`
        .team-section {
          padding: 90px 20px 30px 20px;
          background: #edf1f4;
          text-align: center;
          position: relative;
        }

        .title-container {
          position: relative;
          display: inline-block;
          
        }

        .title {
          font-size: 180px;
          color: #003087;
          font-weight: 700;
          line-height: 1.1;
          position: relative;
          z-index: 1;
        }

        .member-img {
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid #fff;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .member-img:hover {
          transform: scale(1.1);
        }

        .member-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Desktop precise positioning */
        .img1 { bottom: 50px; left: -60px; }
        .img2 { top: -40px; left: 160px; }
        .img3 { top: -35px; right: 80px; }
        .img4 { top: 5px; right: -60px; }
        .img5 { bottom: 10px; left: 100px; }
        .img6 { bottom: 0; right: 160px; }
        .img7 { bottom: 10px; right: -60px; }

        /* Tablet View */
        @media (max-width: 992px) {
          .title {
            font-size: 120px;
          }
          .member-img {
            width: 60px;
            height: 60px;
            border-width: 4px;
          }
              .team-section {
          padding: 30px 20px 0px 20px !important;
         
        }
        }

        /* Mobile View: Hide member images */
        @media (max-width: 768px) {
          .title {
            font-size: 60px;
          }
          .member-img {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
