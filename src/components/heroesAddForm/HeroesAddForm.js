import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heroesAdd } from "../heroesList/heroesSlice";
import { useHttp } from "../../hooks/http.hook";
import { uid } from "uid";

const HeroesAddForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [element, setElement] = useState('');
    const dispatch = useDispatch();
    const { filters, filtersLoadingStatus } = useSelector(state => state.filters);

    const { request } = useHttp();

    const onHandleSubmit = (e) => {
        e.preventDefault();

        const newHero = {
            id: uid(),
            name,
            description,
            element
        }

        request('http://localhost:3001/heroes', "POST", JSON.stringify(newHero))
            .then(res => console.log(res, 'Отправка успешна'))
            .then(dispatch(heroesAdd(newHero)))
            .catch(err => console.log(err))

        setName('');
        setDescription('');
        setElement('');
    }

    const renderFilters = (filters, status) => {
        if (status === 'loading') {
            return <option>Загрузка элементов</option>
        } else if (status === "error") {
            return <option>Ошибка загрузки</option>
        }
        if (filters && filters.length > 0) {
            return filters.map(({ value, text }) => {
                //eslint-disable-next-line
                if (value === 'all') return;

                return <option key={value} value={value} >{text}</option>
            })
        }
    }

    const elements = renderFilters(filters, filtersLoadingStatus);

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onHandleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text"
                    className="form-control"
                    id="text"
                    placeholder="Что я умею?"
                    style={{ "height": '130px' }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    value={element}
                    onChange={(e) => setElement(e.target.value)}
                >
                    <option value="">Я владею элементом...</option>
                    {elements}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;