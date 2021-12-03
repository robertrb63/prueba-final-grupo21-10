import React from 'react';
import {Link} from 'react-router-dom';
import { heroes } from "../data/heroes";

const getHeroesByPublisher = (publisher) => {
    return heroes.filter(hero => hero.publisher === publisher);

}

const ensayi= ({publisher})  => {

    const heroes = getHeroesByPublisher(publisher)
  
    return (
      <div className="col">
      <div className="card">
          <img src={`/assets/${hero.id}.jpg`} class="card-img-top" alt="{hero.superhero}"/>  
  
          <div className="card-body">
                  <h5 className="card-title">{heroes.superhero}</h5>      
                  <ul className="list-group list-group-flush">
                  <li className="list-group-item">{hero.alter_ego}</li>
                  <li className="list-group-item">{hero.first_appearance}</li>
                  <li className="list-group-item">{hero.chatacters}</li>
                  </ul>
                  <div className="card-footer">
                      <small className="text-muted">
                          <Link to={`/hero/${hero.id}`}>
                          </Link>
                      </small>
                  </div>
  
          </div>
      </div>
  </div>
    );
  }
  export default ensayi;
 