import { PageTemplate } from "../../app/src/templates/PageTemplate";
import Page from "../classes/Page";
import { Post } from "../../ts/PostInterface";
import { PostItem } from "../../app/src/components/PostItem";
import { AlbumItem } from "../../app/src/components/AlbumItem";
import { ItemWrapper } from "../../app/src/components/ItemWrapper";
require('dotenv').config();

export const userPage = async (userId: number) => {

    const paramsStr = `?userId=${userId}`;

    const [postsResponse, albumsResponse] = await Promise.all([
        fetch(process.env.API_URL + process.env.POSTS_ENDPOINT + paramsStr),
        fetch(process.env.API_URL + process.env.ALBUMS_ENDPOINT + paramsStr),
    ]);

    if (!postsResponse.ok || !albumsResponse.ok) {
        throw new Error('Failed to fetch data');
    }

    const [posts, albums] = await Promise.all([
        postsResponse.json(),
        albumsResponse.json(),
    ]);

    return new Page(
        <PageTemplate>
            <ItemWrapper title="Posts">
                {posts.map((item: Post) => <PostItem data={item} key={item.id} />)}
            </ItemWrapper>
            <ItemWrapper title="Albums">
                {albums.map((item: Post) => <AlbumItem data={item} key={item.id} />)}
            </ItemWrapper>
        </PageTemplate>, {
        title: 'User page',
        description: albums.title
    });
};