import React from "react";
import {Link} from "react-router-dom"


function Home({ data }) {
  console.log(data);
  return (
    <>
   <Link to="/"> <li>Home</li>  </Link>

      {data.map((data,index) => (
        <div key={index} className="container">
          <h3>Title: {data.title}</h3>
          <span>price:{data.price}</span>
          <img
            style={{ height: "200px", width: "200px" }}
            src={data.image}
            alt={data.image}
          />
        </div>
      ))}
    </>
  );
}

export default Home;
