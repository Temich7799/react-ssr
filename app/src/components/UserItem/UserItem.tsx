import React from 'react';
import { User } from '../../../../ts/UserInterface';

export type UserItemProps = {
	data: User
}

const UserItem: React.FC<UserItemProps> = ({ data }) => {
	return (
		<div>
			<h2>User Info</h2>
			<p><strong>ID:</strong> {data.id}</p>
			<p><strong>Name:</strong> {data.name}</p>
			<p><strong>Username:</strong> {data.username}</p>
			<p><strong>Email:</strong> {data.email}</p>
			<p><strong>Address:</strong> {data.address.street}, {data.address.suite}, {data.address.city}, {data.address.zipcode}</p>
			<p><strong>Phone:</strong> {data.phone}</p>
			<p><strong>Website:</strong> {data.website}</p>
			<p><strong>Company:</strong> {data.company.name} - {data.company.catchPhrase}</p>
		</div>
	);
};

export default UserItem;
