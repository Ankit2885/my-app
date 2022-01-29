import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handelUpClick = ()=>{
        // console.log("upperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase","success");
    }
    const handelLoClick = ()=>{
        // console.log("upperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase","success");
    }
    const handelOnChange = (event)=>{
        // console.log("onChange was clicked");
        setText(event.target.value);
    }
    const handelClearText = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("your text is clear","success");
    }
    const handelCopyText = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("your text copy to clipBord","success");
    }
    
    const handelExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remover extra spaces","success");
    }
    const [text, setText] = useState("");

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className={`btn btn-${props.them} mx-1 mb-2`} disabled={text.length===0} onClick={handelUpClick}>Convert To UpperCase</button>
            <button className={`btn btn-${props.them} mx-1 mb-2`} disabled={text.length===0} onClick={handelLoClick}>Convert To LowerCase</button>
            <button className={`btn btn-${props.them} mx-1 mb-2`} disabled={text.length===0} onClick={handelClearText}>Clear Text</button>
            <button className={`btn btn-${props.them} mx-1 mb-2`} disabled={text.length===0} onClick={handelCopyText}>CopyText</button>
            <button className={`btn btn-${props.them} mx-1 mb-2`} disabled={text.length===0} onClick={handelExtraSpaces}>Remove Spaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p>
            <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} Minutes to read characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview..."}</p>
        </div>
        </>
    )
}
