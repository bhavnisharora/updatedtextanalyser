import React from 'react'
import './Analyzer.css'
import { useState } from 'react'

const Analyzer = () => {
    const [text, setText] = useState("");
    const handleupper = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handlelower = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handlereset = () => {
        let newtext = ""
        setText(newtext)
    }
    const handlecopy = () => {
        let text = document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const handleremovespaces = () => {
        setText(prevstate => {
            let modify = ""
            for (let i = 0; i < prevstate.length; i++) {
                if (prevstate[i] != ' ') {
                    modify = modify + prevstate[i]
                }
            }
            return modify;
        })
    }
    const displaytext = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <div className="container">
                {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                <textarea value={text} onChange={displaytext} name="" id="mybox" cols="90" rows="15" ></textarea>
                <div className="btn-container">
                    <button disabled={text.length === 0} onClick={handleupper}>uppercase</button>
                    <button disabled={text.length === 0} onClick={handlelower}>lowercase</button>
                    <button disabled={text.length === 0} onClick={handlereset}>reset</button>
                    <button disabled={text.length === 0} onClick={handlecopy}>copy</button>
                    <button disabled={text.length === 0} onClick={handleremovespaces}>remove spaces</button>
                </div>
            </div>
        </>

    )
}

export default Analyzer
