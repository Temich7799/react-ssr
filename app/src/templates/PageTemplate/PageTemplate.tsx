import React, { ReactNode } from 'react';
import { HtmlTemplate } from '../HtmlTemplate';

export type PageTemplateProps = {
	children: ReactNode
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
	return (
		<HtmlTemplate>
			<main>
				{children}
			</main>
		</HtmlTemplate>
	);
};

export default PageTemplate;
