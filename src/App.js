import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputVal, setInputVal] = useState("");
  return (
    <>
      <div className="Container">
        <p>꧁ꉓꍏ꒒ꉓꀎ꒒ꍏ꓄ꂦꋪ</p>
        <div className="input-Container">
          <input
            className="inputs"
            type="text"
            placeholder="ᑕᗩᒪᑕᑌᒪᗩ丅ᗝᖇ"
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.v);
            }}
          />
        </div>
        <div className="btn-container">
          <div className="pair-1">
            <button
              className="new"
              value="1"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              1
            </button>

            <button
              className="new"
              value="2"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              2
            </button>
            <button
              className="new"
              value="3"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              3
            </button>
          </div>
          <div className="pair-2">
            <button
              className="new"
              value="4"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              4
            </button>
            <button
              className="new"
              value="5"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              5
            </button>
            <button
              className="new"
              value="6"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              6
            </button>
          </div>
          <div className="pair-3">
            <button
              className="new"
              value="7"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              7
            </button>
            <button
              className="new"
              value="8"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              8
            </button>
            <button
              className="new"
              value="9"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              9
            </button>
          </div>
          <div className="last-pair">
            <button
              className="new"
              value="00"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              00
            </button>

            <button
              className="new"
              value="+"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              +
            </button>

            <button
              className="new"
              value="-"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              -
            </button>
          </div>
          <div className="last-pair">
            <button
              className="new"
              value="*"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              *
            </button>
            <button
              className="new"
              value="/"
              onClick={(e) => {
                setInputVal(inputVal + e.target.value);
              }}
            >
              \
            </button>

            <button
              className="new"
              value="AC"
              onClick={(e) => {
                setInputVal(inputVal.slice(0, -1));
              }}
            >
              AC
            </button>
          </div>
          <div className="shuffle-pair">
            <button
              className="new"
              value="CE"
              onClick={(e) => {
                setInputVal("");
              }}
            >
              CE
            </button>

            <button
              className="new"
              value="="
              onClick={(e) => {
                try {
                  setInputVal(eval(inputVal));
                } catch {
                  console.log("Error");
                }
              }}
            >
              =
            </button>
            <i class="fa fa-wave-square"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
