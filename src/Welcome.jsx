import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-details">
        {/* <img src="/images/church-pfp.png" alt="" /> */}
        <h1>Welcome To</h1>
        <h2>Destiny Christian Church Int'l</h2>
        <p>where everyone is somebody and Jesus Christ is Lord</p>
        <p className="sort">
          Welcome to Destiny Christian Church! We’re so glad you’re here to
          worship, connect, and grow with us in God’s love. May your time with
          us be full of joy and inspiration!
        </p>
      </div>
      <div>
        <p className="intro"> We Have Our Services by</p>
        <div className="service-block">
          <div className="service-periods">
            <p>SUNDAY</p>
            <h6>SUNDAY SERVICE</h6>
            <p>9:00am - 11:00am</p>
          </div>

          <div class="divider"></div>

          <div className="service-periods">
            <p>WEDNESDAY</p>
            <h6>SCHOOL OF WISDOM</h6>
            <p>6:00pm - 7:00pm</p>
          </div>

          <div class="divider"></div>

          <div className="service-periods">
            <p>FRIDAY</p>
            <h6>REVIVAL/BREAKTHROUGH SERVICE</h6>
            <p>6:00pm - 7:00pm</p>
          </div>

          <div class="divider"></div>

          <div className="service-periods">
            <p>MONTHLY · 1st FRIDAY</p>
            <h6>TARRY NIGHT</h6>
            <p>6:00pm - 7:00pm</p>
          </div>
        </div>
      </div>

      <div>
        <p className="intro">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M8 1a5 5 0 0 0-5 5c0 1.14.56 2.488 1.377 3.934c.827 1.463 1.967 3.107 3.216 4.857l.407.57l.407-.57c1.25-1.75 2.389-3.394 3.216-4.857C12.44 8.488 13 7.14 13 6a5 5 0 0 0-5-5m0 2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"
              clip-rule="evenodd"
            />
          </svg>
          We are located at
        </p>
        <div className="service-block-2">
          <div className="service-periods">
            <p className="clash">
              80 SCHOOL ROAD, ASA OPPOSITE CKC, 1ST FLOOR, ABA, ABIA STATE
            </p>
            <h6>UPPER-ROOM PARISH</h6>
            <p>9:00am - 11:00am</p>
          </div>

          <div class="divider"></div>

          <div className="service-periods">
            <p>WEDNESDAY</p>
            <h6>GLORY LAND PARISH (HQ)</h6>
            <p>6:00pm - 7:00pm</p>
          </div>

          <div class="divider"></div>

          <div className="service-periods">
            <p>FRIDAY</p>
            <h6>POTTER'S HOUSE</h6>
            <p>6:00pm - 7:00pm</p>
          </div>

          <div class="divider"></div>

          <div className="service-periods">
            <p>MONTHLY · 1st FRIDAY</p>
            <h6>GRACE ARENA</h6>
            <p>6:00pm - 7:00pm</p>
          </div>
        </div>
      </div>

      <div className="video-container">
        <p className="intro">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" stroke-width="1.5">
              <path
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14 12l-3.5 2v-4z"
              />
              <path d="M2 12.708v-1.416c0-2.895 0-4.343.905-5.274c.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9s2.561.027 3.912.065c2.851.081 4.277.121 5.182 1.053S22 8.398 22 11.292v1.415c0 2.896 0 4.343-.905 5.275c-.906.931-2.331.972-5.183 1.052c-1.35.039-2.73.066-3.912.066s-2.561-.027-3.912-.066c-2.851-.08-4.277-.12-5.183-1.052S2 15.602 2 12.708Z" />
            </g>
          </svg>
          Experience Our Messages Online
        </p>

        <div className="video-grid">
          <div className="video-card">
            <img src="/images/video-pic1.jpg" alt="" className="thumbnail" />
            <p className="video-title">
              Day 1: Annual Prayer Camp - CONTEND FOR YOUR PROPHECY
            </p>
            <a href="http://">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M14.581 9.402C16.194 10.718 17 11.375 17 12.5s-.806 1.783-2.419 3.098a23 23 0 0 1-1.292.99c-.356.25-.759.508-1.176.762c-1.609.978-2.413 1.467-3.134.926c-.722-.542-.787-1.675-.918-3.943A33 33 0 0 1 8 12.5c0-.563.023-1.192.06-1.833c.132-2.267.197-3.401.919-3.943c.721-.541 1.525-.052 3.134.926c.417.254.82.512 1.176.762a23 23 0 0 1 1.292.99"
                />
              </svg>
              Watch Now!
            </a>
          </div>
          <div className="video-card">
            <img src="/images/video-pic1.jpg" alt="" className="thumbnail" />
            <p className="video-title">
              Day 1: Annual Prayer Camp - CONTEND FOR YOUR PROPHECY
            </p>
            <a href="http://">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M14.581 9.402C16.194 10.718 17 11.375 17 12.5s-.806 1.783-2.419 3.098a23 23 0 0 1-1.292.99c-.356.25-.759.508-1.176.762c-1.609.978-2.413 1.467-3.134.926c-.722-.542-.787-1.675-.918-3.943A33 33 0 0 1 8 12.5c0-.563.023-1.192.06-1.833c.132-2.267.197-3.401.919-3.943c.721-.541 1.525-.052 3.134.926c.417.254.82.512 1.176.762a23 23 0 0 1 1.292.99"
                />
              </svg>
              Watch Now!
            </a>
          </div>
          <div className="card">
            <p>Want To Know Watch more?</p>
            <Link className="circle" to="/video">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="48"
                  d="m268 112l144 144l-144 144m124-144H100"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="know-more">
        <p>Want To Know About Us and our History?</p>
        <Link className="button" to="/about">
          Click Here!
        </Link>
      </div>
    </div>
  );
}
