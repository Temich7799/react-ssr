import React from 'react';
import MetadataInterface from '../../../../ts/MetadataInterface';

export type MetaHeadProps = {
	data: MetadataInterface
	charset?: 'UTF-8'
}

const MetaHead: React.FC<MetaHeadProps> = ({ data, charset }) => {

	const { title, description, keywords } = data;

	return (
		<head>
			<meta charSet={charset || 'UTF-8'} />
			<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			<title>{title}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords.join(',')} />}
		</head>
	);
};

export default MetaHead;
