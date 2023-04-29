import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Body} from "./site/Body";
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";

function App() {
    return (
        <>
            <Header title={"NEW Header"}/>
            <Body titleForBody={"NEW Body"}/>
            <Footer titleForFooter={"NEW Footer"}/>
        </>

    );
}

export default App;
