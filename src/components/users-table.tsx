import {FC, useState, MouseEvent} from "react";
import usersData from "@/data/users";
import { UserItem } from "@/components/user-item";
import filterAndSortUsers from "@/utils/filterAndSortUsers";

interface UsersTableProps {
    sort: string | null;
    filter: boolean;
}

const UsersTable: FC<UsersTableProps> = ({sort, filter}) => {
    const [activeID, setActiveID] = useState<number>(0)
    const users = filterAndSortUsers(filter, sort, usersData);
    
    const handleClick = (e: MouseEvent<HTMLTableRowElement>) => {
        const id = e.currentTarget;
        const isRow = id.dataset.id;
        const isClickAgain = isRow && Number(id.dataset.id) === activeID;
        
        if (isClickAgain) {
            setActiveID(0);
            return;
        }
        
        if (isRow) setActiveID(Number(id.dataset.id));
    };

    return (
        <div className='table-wrapper'>
            <table className='user-table'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>День рождения</th>
                    <th>Имя</th>
                    <th>Вебсайт</th>
                    <th>Номер телефона</th>
                    <th>Почта</th>
                    <th>Логин</th>
                </tr>
                </thead>
                <tbody>{users.map((user) => (
                    <UserItem 
                        user={user}
                        key={user.id}
                        isActive={activeID === user.id}
                        handleClick={handleClick}/>
                ))}</tbody>
            </table>
        </div>
    );
};

export {UsersTable};
