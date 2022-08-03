import React, { FC } from "react";

export interface UserItemProps {
    id: number;
    birthday: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

const UserItem: FC<UserItemProps> = ({ email, id, name, website, phone, birthday, username }) => {
    return (
        <tr>
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

export { UserItem };
