// server.tsx
import React from "react";
// import path from "path"
import express from "express";
import ReactDOMServer from 'react-dom/server';
import { App } from "../client/App";

const app = express();

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
    const html = `
        <html lang="en">
        <head>
            <script src="app.js" async defer></script>
        </head>
        <body>
            <div id="root">${app}</div>
        </body>
        </html>
    `
    res.send(html);
});

app.use(express.static("./ssr-built"));

app.listen(4242);