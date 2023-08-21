import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filtersFetched, getFilter } from '../../actions';
import { useHttp } from '../../hooks/http.hook';

const HeroesFilters = () => {
    const { filters } = useSelector(state => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(er => console.log(er))
        // eslint-disable-next-line
    }, []);


    const Buttons = ({ filters }) => filters.map(item => <button
        className={`btn ${item.className}`}
        key={item.value}
        onClick={() => dispatch(getFilter(item.value))}
    >
        {item.text}
    </button>);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <Buttons filters={filters} />
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;