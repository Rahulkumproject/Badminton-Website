import React,{useState} from 'react'

export default function Textform(props) {
    const[text,setText]=useState('');
    const upcase= ()=>{
      let newText=text.toUpperCase();
      setText(newText);  
      props.showAlert("Converted to upper case",'success');
    }
    const lowcase= ()=>{
      let newText=text.toLowerCase();
      setText(newText);  
      props.showAlert("Converted to lower case",'success');
    }
    const del=()=>{
      let newText="";
      setText(newText);
      props.showAlert("Text cleared",'success');
    }
    const title=()=>{
      let regex=/.([0-9]){10}/;
      const digits=text.match(regex);
      const res=digits.join("");
      let rem=res.slice(1,11);
      setText(rem);
      props.showAlert("Your phone number is extracted",'success');

    }
    
    const handle= (e)=>{
        setText(e.target.value);
    }
    return (
      <>
        <div className='container'  style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea className="form-control my-3" value={text}   onChange={handle} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="mybox" rows="6"></textarea>
      </div>
      <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    More functions
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" onClick={upcase}href="#">Convert to Uppercase</a></li>
    <li><a className="dropdown-item" href="#" onClick={lowcase} >Convert to Lowercase</a></li>
    {/* <li><a className="dropdown-item" href="#" onClick={del}>Delete</a></li> */}
    {/* <li><a className="dropdown-item" href="#" onClick={title}>Extract Phone Number</a></li> */}
  </ul>
  <button className='btn btn-primary mx-3 my-2' onClick={title}>Extract Phone Number</button>
  <button className='btn btn-primary mx-3 my-2' onClick={del}>Delete</button>
</div>
     
    
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}} >
        {/* <h2>Your Text Summary</h2> */}
        <p><h2>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,{text.length} characters</h2></p>
        <p>It will take approx {(0.008 * text.split(" ").length-0.008).toFixed(3)} minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in above textbox to preview it here"}</p>
      </div>
      </>
    )
}
