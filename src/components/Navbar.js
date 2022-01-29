import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';



export default function Navbar(props) {
    const onHandelBlue = ()=>{
        if(props.mode==='light'){
            props.toggleMode();
        }
        props.themSet('primary');
        document.body.style.backgroundColor = 'blue';
        props.showAlert("Blue mode has been enabled","success");
    }
    const onHandelRed = ()=>{
        if(props.mode==='light'){
            props.toggleMode();
        }
        props.themSet('danger');
        document.body.style.backgroundColor = 'red';
        props.showAlert("Blue mode has been enabled","success");
    }
    // dhfjhgdjsdgfsdfjf
    const onHandelGreen = ()=>{
        if(props.mode==='light'){
            props.toggleMode();
        }
        props.themSet('success');
        document.body.style.backgroundColor = 'green';
        props.showAlert("Blue mode has been enabled","success");
    }
    const onHandelYellow = ()=>{
        if(props.mode==='dark'){
            props.toggleMode();
        }
        props.themSet('warning');
        document.body.style.backgroundColor = 'yellow';
        props.showAlert("Blue mode has been enabled","success");
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">{props.aboutText}</a>
                        </li>
                    </ul>
                    
                    <div className="d-flex">
                        <h4 style={{color: props.mode==='dark'?'white':'black'}}>Themes</h4>
                    <div className="bg-primary rounded mx-2" onClick={onHandelBlue} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                    <div className="bg-danger rounded mx-2" onClick={onHandelRed} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                    <div className="bg-success rounded mx-2" onClick={onHandelGreen} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                    <div className="bg-warning rounded mx-2" onClick={onHandelYellow} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
                    </div>

                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="modeBtn"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkMode </label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "set title here",
    aboutText: "set about here"
};
