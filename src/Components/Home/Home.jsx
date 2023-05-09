import React from 'react';
import "./Home.scss";
import Row from "../Row/Row";

const Home = () => {
  return (
    <section className='home'>
      <div className='banner'></div>

      <Row title={"Popular on Netflix"} />
      <Row title={"Movies"} />
      <Row title={"TV Shows"} />
      <Row title={"Recently Viewed"} />
      <Row title={"My List"} />
    </section>
  )
}

export default Home;
