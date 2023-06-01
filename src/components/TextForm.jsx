/* eslint-disable no-unused-vars */

import React, { useState } from 'react'

const TextForm = (props) => {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = () => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    // setText("enter the text");

    const handleDownClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }

    const handleCopy = () => {

        let selectTextid = document.getElementById("myBox")
        selectTextid.select()
        navigator.clipboard.writeText(selectTextid.value)

    }

    const ClearText = () => {
        // let selectTextid = document.getElementById("myBox")
        // selectTextid.value = ""  // why you leave empty like this 
        // because value need to be empty wh if  i pass in this blank then 
        // even you can use one more method
        setText("")
        // both are simillar one is using dom and one using state
    }

    return (     // style={{marginLeft:"px"}} Got it yellow props name should be here and same
        <>
            <div className="container" style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea id="myBox" className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white', color: props.Mode === 'dark' ? 'white' : 'black' }} rows="8">
                    </textarea>
                </div>

                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleDownClick}>Convert to lowerCase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-1 my-1' onClick={ClearText}>Clear Text</button>

                {/* </div> */}

                <div className="container" style={{ backgroundColor: props.Mode === 'dark' ? 'black' : 'white' }}>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length}charcters</p>
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read </p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
                </div>

            </div>
        </>

    );
}

export default TextForm;