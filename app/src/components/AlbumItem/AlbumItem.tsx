import React from 'react';
import { Album } from '../../../../ts/AlbumInterface';

export type AlbumItemProps = {
	data: Album
}

const AlbumItem: React.FC<AlbumItemProps> = ({ data }) => {
	return (
		<div>
			<h2>{data.title}</h2>
		</div>
	);
};

export default AlbumItem;
