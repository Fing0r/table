import sortUsers from "@/utils/sortUsers";
import filterUsers from "@/utils/filterUsers";
import { UserItemProps } from "@/components/user-item";

const filterAndSortFilms = (
    isFilter: boolean,
    typeSort: string | null,
    usersData: UserItemProps[],
) => {
    const filteredUsers = filterUsers(isFilter, usersData);
    return sortUsers(typeSort, filteredUsers);
};

export default filterAndSortFilms;
