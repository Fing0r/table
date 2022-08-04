import { IUserItem } from "@/components/user-item";

function getAge(DOB: string) {
    const today = new Date();
    const birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age -= 1;
    }
    return age;
}

function filterByAge(data: IUserItem[]) {
    return data.filter(({ birthday }) => getAge(birthday) >= 18);
}

const filterUsers = (filter: boolean, data: IUserItem[]) => (filter ? filterByAge(data) : data);

export default filterUsers;
