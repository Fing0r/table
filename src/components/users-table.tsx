import { FC } from "react";
import usersData from "@/data/users";
import { UserItem } from "@/components/user-item";
import filterAndSortUsers from "@/utils/filterAndSortUsers";

interface UsersTableProps {
    sort: string | null;
    filter: boolean;
}

const UsersTable: FC<UsersTableProps> = ({ sort, filter }) => {
    const users = filterAndSortUsers(filter, sort, usersData);
    const userItems = users.map((user) => <UserItem {...user} key={user.id} />);

    const handleClick = () => {};

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
                <tbody>{userItems}</tbody>
            </table>
        </div>
    );
};

export { UsersTable };
