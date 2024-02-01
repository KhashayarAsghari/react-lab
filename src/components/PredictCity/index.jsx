import React from "react";
import cities from "./cities.json";

export default function PredictCity() {

    function handleChange(e) {
        
        if (e.key !== "Backspace") {
          const textInputValue = e.target.value;
          const suggestion = cities.find((city) =>
            city.toLowerCase().startsWith(textInputValue.toLowerCase())
          );

          console.log(suggestion)
          if (suggestion) {
            let selectedText = suggestion.slice(textInputValue.length);
            e.target.value = textInputValue + selectedText;
            e.target.setSelectionRange(textInputValue.length, -1);
          }
        }
      }

    return (
        <div className="container">
            <h1
                style={{ color: "darkslategray", margin: "0 auto", fontSize: "25px" }}
            >
                Please enter your city :
            </h1>
            <input
                type="text"
                placeholder="Search city..."
                onKeyUp={handleChange}
                style={{ fontWeight: "700", fontSize: "20px" }}
                autoFocus
            />
        </div>
    )
}