import { IUserItem } from "@/components/user-item";

export enum SortType {
    ID = "ID",
    NAME_ASC = "NAME_ASC",
    NAME_DESC = "NAME_DESC",
    BIRTHDAY_ASC = "BIRTHDAY_ASC",
    BIRTHDAY_DESC = "BIRTHDAY_DESC",
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

const sortUsers = (type: string | null, data: IUserItem[]) => {
    switch (type) {
        case SortType.ID:
            return [...data.sort((a, b) => a.id - b.id)];
        case SortType.NAME_ASC:
            return [...data.sort((a, b) => sortByName(a.name, b.name))];
        case SortType.NAME_DESC:
            return [...data.sort((a, b) => sortByName(b.name, a.name))];
        case SortType.BIRTHDAY_ASC:
            return [...data.sort((a, b) => sortByBirthday(a.birthday, b.birthday))];
        case SortType.BIRTHDAY_DESC:
            return [...data.sort((a, b) => sortByBirthday(b.birthday, a.birthday))];
        default:
            return data;
    }
};

export default sortUsers;
