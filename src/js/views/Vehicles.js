import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Params } from 'react-router';
import { Link, useParams } from 'react-router-dom';

const Vehicles = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="text-center" style={{ background: "#000000" }}>
            <div className='d-inline-flex'>
                {store.vehicleSW.map((value, id) => (
                    <div key={id} className="card" style={{ width: "18rem" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/vehicles/${id + 1}.jpg`}
                            className="card-img-top"
                        />
                        <div className="card-body mx-0">
                            <h5 className="card-title">{value.name}</h5>
                            <div >
                                <Link to={`/vehicles-description/${id + 1}`}>
                                    <button href="#" className="btn btn-outline-danger col-6"> Learn more! </button>
                                </Link>
                                <button className="btn btn-outline-danger">♡</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Vehicles