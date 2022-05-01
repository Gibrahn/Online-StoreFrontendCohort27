 import React from "react";
 import "./about.css";


const About = () => {

    let [name, setName] = React.useState("");

    const handleShowName = () =>{
        setName("Gibrahn Duarte");
    }

    let [email, setEmail] = React.useState("");

    const handleShowEmail = () =>{
        setEmail("gibrahn09@gmail.com");
    }

    return (
    <div className="about">

        <h1>About me</h1>
        <hr></hr>
        <h3>{name}</h3>
        <h3>{email}</h3>

        <button onClick={handleShowName} className="btn btn-sm btn-danger">Click me!</button>
    </div>      
    );
}

export default About;