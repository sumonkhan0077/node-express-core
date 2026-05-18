import type { IncomingMessage, ServerResponse } from "node:http";
import { productsController } from "../controller/Products.controller";

export const routehandeler= (req: IncomingMessage, res: ServerResponse) => {
     const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "this is root route" }));
    } else if (url?.startsWith("/products")) {
      productsController(req , res)
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: " root not found" }));
    }
}