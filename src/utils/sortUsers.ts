import { UserItemProps } from "@/components/user-item";

export enum SortType {
    ID = "ID",
    NAME_UP = "NAME_UP",
    NAME_DOWN = "NAME_DOWN",
    BIRTHDAY_UP = "BIRTHDAY_UP",
    BIRTHDAY_DOWN = "BIRTHDAY_DOWN",
}

function sortByName(a: string, b: string) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function sortByBirthday(a: string, b: string) {
    const birthdayA = new Date(a).getTime();
    const birthdayB = new Date(b).getTime();

    return birthdayA - birthdayB;
}

const sortUsers = (type: string | null, data: UserItemProps[]) => {
    switch (type) {
        case SortType.ID:
            return [...data.sort((a, b) => a.id - b.id)];
        case SortType.NAME_UP:
            return [...data.sort((a, b) => sortByName(a.name, b.name))];
        case SortType.NAME_DOWN:
            return [...data.sort((a, b) => sortByName(b.name, a.name))];
        case SortType.BIRTHDAY_UP:
            return [...data.sort((a, b) => sortByBirthday(a.birthday, b.birthday))];
        case SortType.BIRTHDAY_DOWN:
            return [...data.sort((a, b) => sortByBirthday(b.birthday, a.birthday))];
        default:
            return data;
    }
};

export default sortUsers;
