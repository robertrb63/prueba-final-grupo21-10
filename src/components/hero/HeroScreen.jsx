import React, { useMemo } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {

    const { heroId } = useParams();
    const navigate = useNavigate();

    

    const hero = useMemo(() => getHeroById(heroId), [heroId])   ;
  

    if (!hero) {
        return <Navigate to="/marvel"/>
    }

      const { id, superhero, alter_ego, publisher, first_appearance, characters } = hero;

    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div className="container">
            <h1>{publisher}</h1>
          <hr />
               <div className="col-3">
                    <div className="card h-100">
                    <img src={`/assets/${id}.jpg`} class="card-img-top" alt={superhero} />
              </div>
          </div>
          <h2 >{id}</h2>
          <hr />
            <div className="card h-100" >   
                <h3 className="card-title  ">{superhero} </h3>
          <ul className="list-group list-group-flush">
                    <li className="list-group-item "> Descripicion de la Pizza:  {alter_ego}</li>
          <li className="list-group-item"> Numero del Pedido: {first_appearance}</li>
              <li className="list-group-item">Cantidad en Stock: {characters}</li>
          </ul>
          </div>
          <hr />
          <div className="card-footer text-end">
              <button className="btn btn-primary"
                  onClick={handleReturn} >Regresar</button>
          </div>
    </div>
  );
}
export default HeroScreen;
/**
*/