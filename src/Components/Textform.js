import React,{useState} from 'react'

export default function Textform(props) {
     const [btntext,setbtntext] = useState('Enable dark mode');
     const [mystyle,setStyle] = useState({
       color:'black',
       backgroundColor:'white'
     })
     let toggle=()=>{
       if(mystyle.color=='black'){
         setStyle({
         color: 'white',
         backgroundColor:'black'
         })
         setbtntext('Disable dark mode');
       }else{
        setStyle({
          color: 'black',
          backgroundColor:'white'
          })
          setbtntext('Enable dark mode');
       }
     }
    const[text,setText]=useState('');
    const upcase= ()=>{
      let newText=text.toUpperCase();
      setText(newText);  
    }
    const lowcase= ()=>{
      let newText=text.toLowerCase();
      setText(newText);  
    }
    const del=()=>{
      let newText="";
      setText(newText);
    }
    const title=()=>{
      let regex=/.([0-9]){10}/;
      const digits=text.match(regex);
      const res=digits.join("");
      let rem=res.slice(1,11);
      setText(rem);

    }
    
    const handle= (e)=>{
        setText(e.target.value);
    }
    return (
      <>
        <div className='container' style={mystyle}>
            <h1>{props.heading}</h1>
      <div className="mb-3" style={mystyle}>
        <textarea className="form-control my-3" value={text} style={mystyle}  onChange={handle} id="mybox" rows="7"></textarea>
      </div>
      <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" onClick={upcase}href="#">Convert to Uppercase</a></li>
    <li><a className="dropdown-item" href="#" onClick={lowcase} >Convert to Lowercase</a></li>
    {/* <li><a className="dropdown-item" href="#" onClick={del}>Delete</a></li> */}
    <li><a className="dropdown-item" href="#" onClick={title}>Extract Phone Number</a></li>
  </ul>
  <button className='btn btn-primary mx-3' onClick={toggle}>{btntext}</button>
  <button className='btn btn-primary mx-3' onClick={del}>Delete</button>
</div>
     
    
      </div>
      <div className="container" style={mystyle}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length-1} words,{text.length} characters</p>
        <p>It will take approx {0.008 * text.split(" ").length} minutes to read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
    )
}
