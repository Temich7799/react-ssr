import { UserItem } from "../../app/src/components/UserItem";
import { PageTemplate } from "../../app/src/templates/PageTemplate";
import { User } from "../../ts/UserInterface";
import Page from "../classes/Page";
require('dotenv').config();

export const usersPage = fetch(process.env.API_URL + process.env.USERS_ENDPOINT)
    .then(res => res.json())
    .then((data: Array<User>) => new Page(
        <PageTemplate>
            {data.map(item => <UserItem data={item} key={item.id} />)}
        </PageTemplate>
        , { title: 'Users', description: 'List of users' })
    );