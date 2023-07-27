import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Params } from 'react-router';
import { Link, useParams } from 'react-router-dom';

const Vehicles = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center" style={{ background: "#000000" }}>
            <div className='scroll' >
                <div className='d-inline-flex'>
                    {store.vehicleSW.map((value, id) => (
                        <div key={id} className="card" style={{ width: "20rem" }}>
                            <img
                                src={"https://starwars-visualguide.com/assets/img/vehicles/" + value.uid + ".jpg"}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                                    className = "card-img-top"
                                }}
                            />
                            <div className="card-body mx-0">
                                <h5 className="card-title">{value.name}</h5>
                                <div >
                                    <Link to={`/vehicles-description/${value.uid}`}>
                                        <button href="#" className="btn btn-outline-danger col-6"> Learn more! </button>
                                    </Link>
                                    <button className="btn btn-outline-danger" onClick={() => {
                                        if (!store.favorites.includes(value.name)) {
                                            actions.addFavorite(value.name);
                                        }
                                    }}> {
                                            store.favorites.includes(value.name) ? <img className='fullheart' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png' /> : <img className='borderheart' src='https://assets.stickpng.com/images/5a02bfca18e87004f1ca4395.png' />
                                        }</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Vehicles