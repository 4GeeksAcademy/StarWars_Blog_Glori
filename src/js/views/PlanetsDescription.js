import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from '../component/navbar';
import Planets from "./Planets";

const PlanetsDescription = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const properties = store.planetsDesc;
    useEffect(() => {
        actions.fetchplanetsDesc(params.theid)
    }, [])
    return (
        <>
            <div className="jumbotron">
                <main className="container">
                    <section className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            {

                                params.theid == 1 ? <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4' />
                                    : <img className="img"
                                        src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}

                                    />
                            }

                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
                            <h1 className="mt-5" style={{ float: "right" }}>{properties.name}</h1>
                            <p className=" mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                                quaerat dolorem corrupti incidunt eligendi, tenetur consectetur!
                                Eaque asperiores maiores totam quaerat? Blanditiis eius
                                necessitatibus beatae quam, ipsum quasi officiis vel! Rem saepe
                                consectetur quam minima facere totam praesentium, illum ea ratione
                                odit vel temporibus ad eos, quasi exercitationem.</p>
                        </div>
                    </section>
                    <hr />
                    <section className="row text-center ">
                        <div className="col-lg-2 col-sm-2 col-6 text-danger">
                            <p className="fw-bold m-0">Name:</p>
                            <p>{properties.name}</p>
                        </div>
                        <div className="col-lg-2 col-sm-2 col-6 text-danger">
                            <p className="fw-bold m-0">Diameter:</p>
                            <p>{properties.diameter}</p>
                        </div>
                        <div className="col-lg-2 col-sm-2 col-6 text-danger">
                            <p className="fw-bold m-0">Population:</p>
                            <p>{properties.population}</p>
                        </div>
                        <div className="col-lg-2 col-sm-2 col-6 text-danger">
                            <p className="fw-bold m-0">Climate:</p>
                            <p>{properties.climate}</p>
                        </div>
                        <div className="col-lg-2 col-sm-2 col-6 text-danger">
                            <p className="fw-bold m-0">Terrain:</p>
                            <p>{properties.terrain}</p>
                        </div>
                        <div className="col-lg-2 col-sm-2 col-6 text-danger">
                            <p className="fw-bold m-0">Gravity:</p>
                            <p>{properties.gravity}</p>
                        </div>

                    </section>
                </main>
            </div>
        </>
    )
}

export default PlanetsDescription