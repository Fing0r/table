import React, {FC, MouseEvent} from "react";
import classNames from "classnames";

export interface IUserItem {
    id: number;
    birthday: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

interface UserItemProps {
    user: IUserItem,
    isActive: boolean,
    handleClick: (e: MouseEvent<HTMLTableRowElement>) => void
}

const UserItem: FC<UserItemProps> = ({
         user: {email, id, name, website, phone, birthday, username},
         isActive, handleClick
     }) => {
    
    const rowClasses = classNames( "row", {"row-selected": isActive})
    
    return (
        <tr
            data-id={id}
            onClick={handleClick}
            className={rowClasses}
        >
            <td>{id}</td>
            <td>{birthday}</td>
            <td>{name}</td>
            <td>{website}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{username}</td>
        </tr>
    );
};

export {UserItem};
