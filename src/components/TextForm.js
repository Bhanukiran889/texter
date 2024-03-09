import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to upperCase","success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    
    props.showAlert("Coverted to lower case","success")
  };
  const handleClClick = () => {
    setText("");
    
    props.showAlert("Cleared the text","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value); // Update the state with the value of the textarea
  };

  const [text, setText] = useState("");

  const handleDownload = () => {
    const blob = new Blob([text], { type: "text/plain" }); 

    const url = window.URL.createObjectURL(blob); 

    const a = document.createElement("a");

    a.href = url;
    a.download = "text.txt";
    a.click();
    window.URL.revokeObjectURL(url);
    
    props.showAlert("Downloaded","success")

  };

  const wordCount = text.split(/\s+/).filter(word => word.trim() !== "").length ;




  return (
    <div>
      <form>
        <div
          className="container "
          style={{ color: props.mode === "dark" ? "#e4e7eb" : "#112233" }}
         >
          <h1 >{props.heading}</h1>
          <div className="form-group my-3">
            <textarea
              className="form-control"
              value={text} // Use curly braces without quotes to evaluate JavaScript expression
              id="mybox"
              rows="10"
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#112233" : "white", color:props.mode === "dark" ? "#ffffff" : "#112233",
              }}
              placeholder="Enter the text " // Clear the initial text when the textarea receives focus
            ></textarea>
          </div>
          <div className="container">
            <button
              type="button"
              className="btn btn-primary mx-3"
              onClick={handleUpClick}
            >
              Convert to Uppercase
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleLoClick}
            >
              Convert to Lowercase
            </button>

            <button
              type="button"
              className="btn btn-primary mx-3 my-3"
              onClick={handleClClick}
            >
              clear text
            </button>
            <button
              type="button"
              className="btn btn-primary "
              onClick={handleDownload}
            >
              Download Text
            </button>
          </div>
        </div>
      </form>

      <div className="container my-3" style={{ color: props.mode === "dark" ? "#e4e7eb" : "#112233" }}>
        <h1>Word Summary</h1>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} mins to read </p>
        <div>
          <h2>Preview</h2>
        </div>
        <p> {text.length>0?text:"Enter the text inside the box "}</p>
      </div>
    </div>
  );
}
