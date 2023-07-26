import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import { Params } from 'react-router';
import { Link } from 'react-router-dom';

const Planets = props => {
    const [charfavorite, setcharfavorite] = useState(false);
    const { store, actions } = useContext(Context);
    const handlePress = (e) => {
        e.preventDefault()
        let planetfavs = [...store.favorites]
        setcharfavorite(!charfavorite)

        if (!charfavorite === true) {
            planetfavs.push({
                name: value.name,
                id: value.uid,
            })

        } else (
            planetfavs = planetfavs.filter((item) => item.name !== value.name)
        )

        actions.myFavorites(planetfavs)

    }

    useEffect(() => {
        const planetfavorite = store.favorites.some((favorite) => favorite.name === value.name);
        setcharfavorite(planetfavorite);
    }, [store.favorites]);

    return (
        <div className="text-center" style={{ background: "#000000" }}>
            <div className='d-inline-flex'>
                {store.planetsSW.map((value, id) => (
                    <div key={id} className="card" style={{ width: "18rem" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/planets/${id + 1}.jpg`}
                            className="card-img-top"
                        />
                        <div className="card-body mx-0">
                            <h5 className="card-title">{value.name}</h5>
                            <div >
                                <Link to={`/planet-description/${id + 1}`}>
                                    <button href="#" className="btn btn-outline-danger col-6"> Learn more! </button>
                                </Link>
                                <button className="btn btn-outline-danger" onClick={handlePress}>
                                    {
                                        (charfavorite) ? <img className='fullheart' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png' /> : <img className='borderheart' src='https://assets.stickpng.com/images/5a02bfca18e87004f1ca4395.png' />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Planets