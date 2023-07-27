import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import { Params } from 'react-router';
import { Link } from 'react-router-dom';

const Planets = props => {
    const [charfavorite, setcharfavorite] = useState(false);
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center" style={{ background: "#000000" }}>
            <div className='scroll' >
                <div className='d-inline-flex'>
                    {store.planetsSW.map((value, id) => (
                        <div key={id} className="card" style={{ width: "20rem" }}>
                            {

                                id == 0 ? <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4' /> : <img
                                    src={`https://starwars-visualguide.com/assets/img/planets/${id + 1}.jpg`}
                                    className="card-img-top"
                                />
                            }
                            <div className="card-body mx-0">
                                <h5 className="card-title">{value.name}</h5>
                                <div >
                                    <Link to={`/planet-description/${id + 1}`}>
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

export default Planets