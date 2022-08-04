import { Dispatch, FC, SetStateAction } from "react";
import classNames from "classnames";
import styles from "./filters.module.scss"
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
        const sortType = sort === SortType.NAME_ASC ? SortType.NAME_DESC : SortType.NAME_ASC;

        setSort(sortType);
    };

    const handleSortByBirthday = () => {
        const sortType =
            sort === SortType.BIRTHDAY_ASC ? SortType.BIRTHDAY_DESC : SortType.BIRTHDAY_ASC;

        setSort(sortType);
    };

    const handleFilterByAge = () => {
        setFilter(!filter);
    };

    const classesBtn = (asc: string, desc: string) => classNames(styles.filters__btn, {
        [styles['filters__btn--active']]: sort === asc || sort === desc,
        [styles['filters__btn--rotate']]: sort === asc,
    });

    return (
        <div className={styles.filters}>
            <h2 className={styles.filters__title}>Сортировка</h2>
            <div className={styles.filters__btns}>
                <button
                    className={styles.filters__btn}
                    disabled={sort === SortType.ID}
                    type='button'
                    onClick={() => {setSort("ID")}}
                >
                    По ID
                </button>

                <button
                    className={classesBtn(SortType.NAME_ASC, SortType.NAME_DESC)}
                    type='button'
                    onClick={handleSortByName}
                >
                    По имени
                    <Arrow width='15px' height='8px' className={styles.icon} />
                </button>

                <button
                    className={classesBtn(SortType.BIRTHDAY_ASC, SortType.BIRTHDAY_DESC)}
                    type='button'
                    onClick={handleSortByBirthday}
                >
                    По дате рождения
                    <Arrow width='15px' height='8px' className={styles.icon} />
                </button>
            </div>

            <label className={styles.filters__label} htmlFor='filter'>
                <input
                    className={styles.filters__checkbox}
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
