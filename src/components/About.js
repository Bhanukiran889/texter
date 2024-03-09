import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const [btnText, setBtnText] = useState("Enable dark mode");

  let toggleStyle = () => {
    if (myStyle.backgroundColor === 'white') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setBtnText("Enable light mode");
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText("Enable dark mode");
    }
  };

  return (
    <div>
      <div className="container" style={myStyle}>
        <div className="accordion" id="accordionExample">

          
        </div>
        <div className="custom-control custom-switch">
          <input
            onClick={toggleStyle}
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            {btnText}
          </label>
        </div>
      </div>
    </div>
  );
}
