import React, { ReactNode } from 'react';

export type ItemWrapperProps = {
	title: string
	children: ReactNode
}

const ItemWrapper: React.FC<ItemWrapperProps> = ({ title, children }) => {
	return (
		<section>
			<h2>Posts</h2>
			{children}
		</section>
	);
};

export default ItemWrapper;
