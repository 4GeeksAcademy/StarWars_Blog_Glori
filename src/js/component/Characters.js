import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import { Params } from 'react-router';
import { Link, useParams } from 'react-router-dom';

const Characters = () => {

    const [charfavorite, setcharfavorite] = useState(false);
    const { store, actions } = useContext(Context);
    return (
        <>
            {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="..." alt="First slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                
            </div> */}
            <div className="text-center" style={{ background: "#000000" }}>
                <div className='d-inline-flex'>
                    {store.charactersSW.map((value, id) => (
                        <div key={id} className="card" style={{ width: "18rem" }}>
                            <img
                                src={`https://starwars-visualguide.com/assets/img/characters/${id + 1}.jpg`}
                                className="card-img-top"
                            />
                            <div className="card-body mx-0">
                                <h5 className="card-title">{value.name}</h5>
                                <div >
                                    <Link to={`/character-description/${id + 1}`}>
                                        <button href="#" className="btn btn-outline-danger col-6"> Learn more! </button>
                                    </Link>
                                    <button className="btn btn-outline-danger">♡</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    )
}

export default Characters