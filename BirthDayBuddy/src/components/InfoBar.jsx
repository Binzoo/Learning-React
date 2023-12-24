import React from "react";

function InfoBar() {
  return (
    <>
      <div className=" flex">
        <div>
          <img
            className=" w-20 h-20 rounded-full overflow-hidden"
            src="https://www.course-api.com/images/people/person-1.jpeg"
            alt=""
          />
        </div>

        <div>
          <h1>Binamra</h1>
          <p>29 Years</p>
        </div>
      </div>
    </>
  );
}

export default InfoBar;
