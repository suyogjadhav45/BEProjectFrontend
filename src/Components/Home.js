import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home(props) {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputText);
    setInputText("");
  }



  return (
    <div>
      <Navbar />

      <div className="pl-24 pr-24">
        HOME
        <div className="mt-32">

          <form className='w-full mx-auto' id="AhtoMrTranslateForm" onSubmit={handleSubmit}>
            <div className='flex flex-row justify-center mx-auto'>

              <label style={{ width: "20%", textAlign: "right", padding: "10px 20px 0px 0px", fontWeight: "bold" }}>
                <h1>
                  Enter Ahirani Text :
                </h1>
              </label>
              <textarea style={{ width: "100%",resize: "none" }} rows="8" cols="5" form="AhtoMrTranslateForm" required className='p-2 resize-x border mt-2 rounded-md' type="text" name='inputText' value={inputText} onChange={(e) => { setInputText(e.target.value); }} placeholder='Enter Text to Translate' />

            </div>

            <div className='flex mx-auto'>
              <button type='submit' style={{ width: "400px", margin: "auto" }} className='font-poppins font-bold border mt-4 mb-4 rounded-md py-2 bg-blue-1 text-white hover:bg-blue-4 ' onSubmit={handleSubmit}>SUBMIT</button>
            </div>

            <div className="flex flex-row justify-center mx-auto">
              <label style={{ width: "20%", textAlign: "right", padding: "10px 20px 0px 0px", fontWeight: "bold" }}>
                <h1>
                  Translated Text :
                </h1>
              </label>
              <textarea
                style={{ width: "100%",resize: "none" }}
                rows="8"
                cols="5"
                form="AhtoMrTranslateForm"
                className='p-2 resize-x border mt-2 rounded-md'
                readOnly={true}
                value={inputText} 
                placeholder='Translated Text'
              />
            </div>
          </form>
        </div>
      </div>


    </div>
  );
}
