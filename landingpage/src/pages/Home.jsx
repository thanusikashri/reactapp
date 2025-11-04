import React from "react";
import bg from '../assets/bg.jpg'
import './Page.css'

function Home(props) {
  return (
    <section className="page">
      
      <h1>{props.title}</h1>
      <h2>"Unlock the Wonders of the World"</h2>
      <h1>Travelling towards the<br></br>Dawn of the Earth</h1>
      <h3>Start your journey to the destination you've always dreamed of. <br></br>Discover stunning locations, plan with ease, 
        and create memories <br></br>that last a lifetime. Whether it's a relaxing escape 
        or <br></br>an exciting adventure, your perfect gateway begins right here.
      </h3> <br></br>
      <div class="flat">
        <h2>Flat 20% on first 20 bookings<br></br><br></br></h2>
    </div>

    </section>
  );
}

export default Home;
