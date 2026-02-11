import Welcome from "./Welcome";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="black-cover">
          <div className="home-details">
            <img src="/images/church-pfp.png" alt="" />
            <h1>Destiny Christian Church Int'l</h1>
            <p>...changing the World with the Word</p>
          </div>
        </div>
      </div>

      <Welcome />
    </>
  );
}
