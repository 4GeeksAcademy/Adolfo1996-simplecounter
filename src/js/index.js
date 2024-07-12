//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let segundo = 0
setInterval(() => {
    const one = Math.floor((segundo / 1) % 10)
    const two = Math.floor((segundo / 10) % 10)
    const three = Math.floor((segundo / 100) % 10)
    const four = Math.floor((segundo / 1000) % 10)
    const five = Math.floor((segundo / 10000) % 10)
    const six = Math.floor((segundo / 100000) % 10)
    segundo+=1
    ReactDOM.createRoot(document.getElementById('app')).render(<Home digito1= {one} digito2={two} digito3
        ={three} digito4={four} digito5={five} digito6={six} />)

}, 1000)

