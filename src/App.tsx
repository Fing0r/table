import React, { FC, useState } from "react";
import "./style/App.css";
import { Filters } from "./components/filters/filters";
import { UsersTable } from "@/components/users-table";

const App: FC = () => {
    const [sort, setSort] = useState<string | null>(null);
    const [filter, setFilter] = useState<boolean>(false);

    return (
        <div className='container'>
            <Filters setFilter={setFilter} setSort={setSort} sort={sort} filter={filter} />
            <UsersTable sort={sort} filter={filter} />
        </div>
    );
};

export default App;
