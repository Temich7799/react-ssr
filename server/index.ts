import React from "react";
import express, { Express, Request, Response } from "express";
import { usersPage } from "./pages/usersPage";
import { userPage } from "./pages/userPage";

// import webpack from 'webpack';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import config from '../webpack.config';

export const app: Express = express();
// const compiler = webpack(config);

// app.use(
//     webpackDevMiddleware(compiler, {
//         publicPath: (config.output as webpack.Configuration['output']).publicPath
//     })
// );

// app.use(webpackHotMiddleware(compiler));

app.get('/', (req: Request, res: Response) => usersPage.then(page => res.send(page.get())));

app.get('/user/:userId', (req: Request, res: Response) => userPage(parseInt(req.params.userId)).then(page => res.send(page.get())));

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

try {
    app.listen(PORT, () => {
        console.log(`✅ App started and ready on http://localhost:${PORT}`);
    });
}
catch {
    console.error('Unexpected error ❌')
}
