import React from "react";
import data from "../database/db.json";

const Navbar = () => {
  return (
    <div>
      {data.peopleData.map((ele) => {
        if (ele.name === "Virat Kohli")
          return (
            <div key={ele.id} style={{ width: "55%", margin: "50px auto" }}>
              <img
                src={ele.posts[0].content.imgContent}
                style={{ width: "50%" }}
              ></img>
              ;
            </div>
          );
      })}
    </div>
  );
};

export default Navbar;
