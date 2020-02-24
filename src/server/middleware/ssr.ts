
require('@skatejs/ssr/register');
const render = require('@skatejs/ssr');

const url = require("url");
const path = require("path");
const fs = require("fs");

const { routes } = require('./../view/index.js');

const indexPath = path.resolve(process.cwd(), "dist", "client", "index.html");

export default async (req, res) => {
    let template = class { };
    const dom = fs.readFileSync(indexPath).toString();
    template = routes.find(route => route.path === url.parse(req.url).pathname).component;
    if (template) {
        render(new template()).then((tmpl) => {
            const index = dom.replace(`<div id="root"></div>`, `<div id="root">${tmpl}</div>`)
                .replace('__ssr()', '');
            res.send(index);
        })
    } else {
        res.send(dom);
    }

}