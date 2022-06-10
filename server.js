global.fetch = require("node-fetch");
const path = require("path");
const express = require("express");
const dist = `./dist`;
const { ssr } = require(`${dist}/server/package.json`);
const manifest = require(`${dist}/client/ssr-manifest.json`);
const { default: renderPage } = require(`${dist}/server`);

const server = express();

for (const asset of ssr.assets || []) {
    server.use(
        "/" + asset,
        express.static(path.join(__dirname, `${dist}/client/` + asset))
    );
}

server.get("*", async (request, response) => {
    const url =
        request.protocol + "://" + request.get("host") + request.originalUrl;

    const { html, status, statusText, headers } = await renderPage(url, {
        manifest,
        preload: true,
        request,
        response,
    });

    response.type("html");
    response.writeHead(status || 200, statusText || headers, headers);
    response.end(html);
});

server.listen(3000);