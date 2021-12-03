
/**    */

import React from 'react';
import { Link } from 'react-router-dom';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';



const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher)
    return (
        <div>
            <h2>HeroList</h2>
            <div className="row row-cols-3 row-cols-md-sm-3 g-4">
                {
                    heroes.map(hero => {
                        return (
                            <div key={hero.id} className="col">
                                <div className="card h100">
                                    <img src={`/assets/${hero.id}.png`} class="card-img-top" alt={hero.superhero} />

                                    <div className="card-body">
                                        <h5 className="card-title">{hero.superhero}</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{hero.alter_ego}</li>
                                            <li className="list-group-item">{hero.first_appearance}</li>
                                            <li className="list-group-item">{hero.chatacters}</li>
                                        </ul>
                                        <div className="card-footer">
                                            <small className="text-muted">
                                                <Link to={`/hero/${hero.id}`}>Ver mas
                                                </Link>
                                            </small>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}
export default HeroList;
/**    */