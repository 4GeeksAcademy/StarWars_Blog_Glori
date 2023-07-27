import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Params } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Characters from "../component/Characters";
import Planets from "./Planets";
import Vehicles from "./Vehicles";

export const Home = () => {
    let box = document.querySelector(".charactersRow")
    const { store, actions } = useContext(Context);
    return (
        <>

            <div className="container">
                <div className='row'>
                    <h1>Characters</h1>
                </div>
                <div className="charactersRow" >
                    <Characters />
                </div>
                <div className='row'>
                    <h1>Planets</h1>
                </div>
                <div className="row" >
                    <Planets />
                </div>
                <div className='row'>
                    <h1>Vehicles</h1>
                </div>
                <div className="row" >
                    <Vehicles />
                </div>
            </div>

        </>
    )
};
