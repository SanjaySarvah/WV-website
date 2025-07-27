
import pageBg from "../assets/img/bg/page_bg01.jpg"; // Background Image
import magicIcon from "../assets/img/icon/magic-icon.svg"; // Icon Image

function PageTitle() {
  return (
    <section
      className="page-title pt-5 position-relative bg_img"
      style={{
        backgroundImage: `url(${pageBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="container">
        <div className="page-title-wrap">
          <div className="row g-0 align-items-end">
            {/* Left column */}
            <div className="col-xl-9 col-lg-8 mt-4">
              <div className="page-title-box">
                <span
                  className="sub-title d-flex align-items-center"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  <img
                    src={magicIcon}
                    alt="Magic Icon"
                    className="me-2"
                  />
                  About Worley Ventures
                </span>
                <h2
                  className="title mt-3"
                  style={{
                    fontSize: "3.5rem",
                    lineHeight: "5rem",
                    fontWeight: "700",
                  }}
                >
                  Empowering Your Digital Journey With Worley Ventures. <br />
                  Helps you to convert your data into a strategic asset and get
                  business insights
                </h2>
              </div>
            </div>

            {/* Right column */}
            <div className="col-xl-3 col-lg-4 mt-4">
              <div className="count-box text-xl-end text-lg-end text-center">
                <h2
                  className="number display-4"
                  style={{
                    fontWeight: "700",
                    fontSize: "10rem",
                    marginBottom: "1.5rem",
                    letterSpacing: "-0.01em",
                    color: "#0f55dc",
                  }}
                >
                  12<span className="suffix">+</span>
                </h2>
                <span
                  className="text"
                  style={{
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    textTransform: "uppercase",
                    color: "#0f55dc",
                    fontFamily: "Aeonik",
                  }}
                >
                  Years of experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageTitle;
