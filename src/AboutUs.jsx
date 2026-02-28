import Details from "./Details";

export default function About() {
  return (
    <>
      <div className="about-hero">
        <div className="black-cover">
          <div className="home-details">
            <img src="/images/church-pfp.png" alt="" />
            <h1>About Us</h1>
          </div>
          <div className="about-gap">
            <p className="intro space"> Know more about our</p>
            <div className="service-block block-2">
              <div className="service-periods period-2">
                <p>HISTORY</p>
              </div>

              <div class="divider"></div>

              <div className="service-periods period-2">
                <p>VISION AND MISSION</p>
              </div>

              <div class="divider"></div>

              <div className="service-periods period-2">
                <p>STATEMENT OF FAITH/BELIEFS</p>
              </div>

              <div class="divider"></div>

              <div className="service-periods period-2">
                <p>CORE VALUES</p>
              </div>

              <div class="divider"></div>

              <div className="service-periods period-2">
                <p>LEADERSHIP OVERVIEW</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Details />
    </>
  );
}
