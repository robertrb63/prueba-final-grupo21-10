
/*



    return (
        <div>
            <hr />
            <div className="Row">

                <div className="col-5">
                    <h3> Buscar Producto</h3>
                    <form onSubmit={handlesubmit}>
                        <input
                            type="text"
                            placeholder="Ingrese producto a elegir"
                            className="form-control"
                            name="searchText"
                            onChange={handleInputChange}
                            value={searchtext}
                            autoComplete="off"
                        />
                        <button className="btn btn-primary mt-3"
                            type="submit"
                        > Buscar</button>
                    </form>
                </div>
                <div className="col-7">
                    <h3>Resultados</h3>
                    {heroes.map(hero => (
                        <HeroCard key={hero.id} {...hero} />
                    )
                    )}
                </div>
            </div>
        </div>
    );
}
export default SearchScreen;
*/

import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import HeroCard from '../hero/HeroCard';

const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchtext: q
    })

    const { searchtext } = formValues;

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchtext}`)
    }

    const heroes = useMemo(() => getHeroesByName(q), [q]);

    return (
        <div>
            <hr />
            <div className="Row">

                <div className="col-5">
                    <h3> Buscar Producto</h3>
                    <form onSubmit={handlesubmit}>
                        <input
                            type="text"
                            placeholder="Ingrese producto a elegir"
                            className="form-control"
                            name="searchText"
                            onChange={handleInputChange}
                            value={searchtext}
                            autoComplete="off"
                        />
                        <button className="btn btn-primary mt-3"
                            type="submit"
                        > Buscar</button>
                    </form>
                </div>
                <div className="col-7">
                    <h3>Resultados</h3>
                    {heroes.map(hero => (
                        <HeroCard key={hero.id} {...hero} />
                    )
                    )}
                </div>
            </div>
        </div>
    );
}
export default SearchScreen;