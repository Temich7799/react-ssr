import React, { ReactNode } from 'react';

export type HtmlTemplateProps = {
	children: ReactNode
}

const HtmlTemplate: React.FC<HtmlTemplateProps> = ({ children }) => {
	return (
		<body>
			{children}
		</body>
	);
};

export default HtmlTemplate;
