import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({ id, superhero, alter_ego, publisher, first_appearance, characters }) => {

    return (
          <div className="col">
                                <div className="card">
                                    <img src={`/assets/${id}.jpg`} class="card-img-top" alt={superhero} />

                                    <div className="card-body">
                                        <h5 className="card-title">{superhero}</h5>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{alter_ego}</li>
                                            <li className="list-group-item">{first_appearance}</li>
                        <li className="list-group-item">{characters}</li>
                                        </ul>
                                        <div className="card-footer">
                                            <small className="text-muted">
                            <Link to={`/hero/${id}`}>Ver mas
                                                </Link>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
    );
}
export default HeroCard;