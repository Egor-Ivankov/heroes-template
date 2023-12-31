import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filtersGetActive, fetchFilters, selectAll } from './filtersSlice';
import Spinner from '../spinner/Spinner';
import classNames from 'classnames';
import store from '../../store/index';

const HeroesFilters = () => {
    const { filtersLoadingStatus, activeFilter } = useSelector(state => state.filters);
    const filters = selectAll(store.getState());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilters());
        // eslint-disable-next-line
    }, []);

    if (filtersLoadingStatus === "loading") {
        return <Spinner />;
    } else if (filtersLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderFilters = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Фильтры не найдены</h5>
        }
        return arr.map(({ className, value, text }) => {

            const btnClass = classNames('btn', className, {
                'active': value === activeFilter
            });

            return (
                <button
                    key={value}
                    id={value}
                    className={btnClass}
                    onClick={() => dispatch(filtersGetActive(value))}
                >
                    {text}
                </button>
            )
        })
    };
    const elements = renderFilters(filters);
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;