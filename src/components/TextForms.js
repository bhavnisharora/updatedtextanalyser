import React, {useState} from 'react'
// import validator from 'validator'

export default function TextForms(props) {

  const handleUpClick= () => {
  //  console.log("Uppercase was Clicked");
   let newText = text.toUpperCase();
   setText(newText);
   props.showAlert("Converted to uppercase!", "Success")
 }

 
 const handledownClick= () => {
  //  console.log("Uppercase was Clicked");
   let newText = text.toLowerCase();
   setText(newText);
   props.showAlert("Converted to lowercase!", "Success")
 }
 
 const handleResetClick= () => {
   let newText = "";
   setText(newText);
   props.showAlert("Text cleared!", "Success")
 }

 const handleRemoveSpacesClick = () => {
  setText(prevState => {
    let modify = '';
    for(let i = 0; i < prevState.length; i++){
      if( prevState[i] !== ' '){
        modify = modify + prevState[i];
      }
    }
    return modify;
  });
}


 const handleOnChange= (event) => {
  // console.log("On Change");
  setText(event.target.value);
}
 

const handleCopy = (event) => {
let text = document.getElementById("mybox");
text.select();
navigator.clipboard.writeText(text.value);
props.showAlert("Copied to clipboard!", "Success")
} 


const [text,setText] = useState("");


  return (
    <>
    <div className="container">
      <h1 className = "text-center my-3"> {props.heading}</h1>
      <div className="container ">
  <textarea className="form-control" value = {text} onChange={handleOnChange} placeholder="Enter your text" id="mybox" rows= "12"></textarea>
<button disabled={text.length===0} className="btn btn-primary my-3 mx-2"onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary my-3 mx-2"onClick={handledownClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary my-5 mx-2"onClick={handleRemoveSpacesClick}>Remove Spaces</button>
<button disabled={text.length===0} className="btn btn-primary my-3 mx-2"onClick={handleResetClick}> Reset </button>
<button disabled={text.length===0} className="btn btn-primary my-3 mx-2"onClick={handleCopy}> Copy Text </button>
</div>

</div>
<div className="container my-3">
  <h1>Your Text Summary</h1>
   <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> 
</div>
<br/>
</>
  )
}
