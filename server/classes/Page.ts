import React, { ReactNode } from "react";
import MetadataInterface from "../../ts/MetadataInterface";
import ReactDOMServer from 'react-dom/server';
import { MetaHead } from "../../app/src/components/MetaHead";

export default class Page {

    language: string = 'en';
    headContent: string = '';
    bodyContent: string = '';
    metaData: MetadataInterface = {
        title: '',
        description: '',
    };

    get() {
        return `
            <!DOCTYPE html>
            <html lang="${this.language}">
                ${this.headContent}
                ${this.bodyContent}
            </html>
        `
    }

    constructor(bodyNode: ReactNode, metaData?: MetadataInterface) {

        const { renderToString } = ReactDOMServer;

        this.bodyContent = renderToString(bodyNode);

        if (metaData) {
            this.metaData = metaData;
            this.headContent = renderToString(MetaHead({ data: metaData }));
        }
    }
}