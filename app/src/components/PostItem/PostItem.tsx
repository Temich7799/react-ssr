import React from 'react';
import { Post } from '../../../../ts/PostInterface';

export type PostItemProps = {
	data: Post
}

const PostItem: React.FC<PostItemProps> = ({ data }) => {
	return (
		<div>
			<h3>{data.title}</h3>
			<p>{data.body}</p>
			<p><strong>User ID:</strong> {data.userId}</p>
			<p><strong>Post ID:</strong> {data.id}</p>
		</div>
	);
};

export default PostItem;
