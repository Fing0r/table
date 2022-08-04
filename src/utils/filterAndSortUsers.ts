import sortUsers from "@/utils/sortUsers";
import filterUsers from "@/utils/filterUsers";
import { IUserItem } from "@/components/user-item";

const filterAndSortUsers = (
    isFilter: boolean,
    typeSort: string | null,
    usersData: IUserItem[],
) => {
    const filteredUsers = filterUsers(isFilter, usersData);
    return sortUsers(typeSort, filteredUsers);
};

export default filterAndSortUsers;
