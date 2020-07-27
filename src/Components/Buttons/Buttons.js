import React, { useRef, useEffect } from 'react';
import "../Buttons/Buttons.css";


function Buttons() {

let generatedSequence = [];
let userSequence = [];

//   useEffect(() => {
//     // Update the document title using the browser API
//     //playGame();
//   }, []);

  const buttonOne = useRef(0);

//   function playGame() {
//     let randomNumber = Math.floor(Math.random() * Math.floor(9)) + 1;
//     //console.log(randomNumber);
//     generatedSequence.push(randomNumber);
//     //displaySequenceButtons(generatedSequence);
//   }

//   function displaySequenceButtons(sequence) {
//     for (let i = 0; i < sequence.length; i++) {
//       if (sequence[i]) {
//         buttonOne.current.style.backgroundColor = "cyan";
//       }
//     }
//   }
    buttonOne.current.style.backgroundColor = "blue";

  //playGame();

  return (
    <div>
      <p>
        <span>
          <button ref={buttonOne} className="one" style={{ width: "100px", height: "100px", backgroundColor: "red" }}></button>
          <button className="two"></button>
          <button className="three"></button>
        </span>
      </p>
      <p>
        <span>
          <button className="four"></button>
          <button className="five"></button>
          <button className="six"></button>
        </span>
      </p>
      <p>
        <span>
          <button className="seven"></button>
          <button className="eigth"></button>
          <button className="nine"></button>
        </span>
      </p>
    </div>
  );
}

export default Buttons;