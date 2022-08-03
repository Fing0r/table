import { Dispatch, FC, SetStateAction } from "react";
import classNames from "classnames";
import { ReactComponent as Arrow } from "@/assets/arrow.svg";
import { SortType } from "@/utils/sortUsers";

interface FiltersProps {
    setFilter: Dispatch<SetStateAction<boolean>>;
    setSort: Dispatch<SetStateAction<string | null>>;
    sort: string | null;
    filter: boolean;
}

const Filters: FC<FiltersProps> = ({ setFilter, setSort, sort, filter }) => {
    const handleSortByName = () => {
        const sortType = sort === SortType.NAME_UP ? SortType.NAME_DOWN : SortType.NAME_UP;

        setSort(sortType);
    };

    const handleSortByBirthday = () => {
        const sortType =
            sort === SortType.BIRTHDAY_UP ? SortType.BIRTHDAY_DOWN : SortType.BIRTHDAY_UP;

        setSort(sortType);
    };

    const handleFilterByAge = () => {
        setFilter(!filter);
    };

    const classesBtnName = classNames("filters__btn", {
        "filters__btn--active": sort === SortType.NAME_UP || sort === SortType.NAME_DOWN,
        "filters__btn--rotate": sort === SortType.NAME_DOWN,
    });

    const classesBtnAge = classNames("filters__btn", {
        "filters__btn--active": sort === SortType.BIRTHDAY_UP || sort === SortType.BIRTHDAY_DOWN,
        "filters__btn--rotate": sort === SortType.BIRTHDAY_DOWN,
    });

    return (
        <div className='filters'>
            <h2 className='filters__title'>Сортировка</h2>
            <div className='filters__btns'>
                <button
                    disabled={sort === SortType.ID}
                    className='filters__btn'
                    type='button'
                    onClick={() => {
                        setSort("ID");
                    }}
                >
                    По ID
                </button>

                <button className={classesBtnName} type='button' onClick={handleSortByName}>
                    По имени
                    <Arrow width='15px' height='8px' className='icon' />
                </button>

                <button className={classesBtnAge} type='button' onClick={handleSortByBirthday}>
                    По дате рождения
                    <Arrow width='15px' height='8px' className='icon' />
                </button>
            </div>

            <label className='filters__label' htmlFor='filter'>
                <input
                    className='filters__checkbox'
                    type='checkbox'
                    checked={filter}
                    name='filter'
                    id='filter'
                    onChange={handleFilterByAge}
                />
                Только совершеннолетние
            </label>
        </div>
    );
};

export { Filters };
