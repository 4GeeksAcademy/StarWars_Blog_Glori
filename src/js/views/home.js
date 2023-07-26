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
                    {
                        <>
                            <Characters />
                            <span className="arrowsCh">
                                <img src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-rouge.png" onClick={
                                    () => {
                                        let width = box.clientWidth;
                                        box.scrolleft = box.scrolleft - width;
                                    }
                                } />
                                <img style={{ float: "right" }} src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-rouge.png" onClick={
                                    () => {
                                        let width = box.clientWidth;
                                        box.scrolleft = box.scrolleft + width;
                                    }
                                } />
                            </span>
                        </>
                    }
                </div>
                <div className='row'>
                    <h1>Planets</h1>
                </div>
                <div className="row" >
                    {
                        <>
                            <Planets />
                            <span className="arrowsPl">
                                <img src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-rouge.png" />
                                <img style={{ float: "right" }} src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-rouge.png" />
                            </span>
                        </>
                    }
                </div>
                <div className='row'>
                    <h1>Vehicles</h1>
                </div>
                <div className="row" >
                    {
                        <>
                            <Vehicles />
                            <span className="arrowsPl">
                                <img src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-rouge.png" />
                                <img style={{ float: "right" }} src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-rouge.png" />
                            </span>
                        </>
                    }
                </div>
            </div>

        </>
    )
};
