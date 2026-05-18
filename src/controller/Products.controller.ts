import type { IncomingMessage, ServerResponse } from "node:http";

export const productsController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
  if(url === "/products" && method === "GET")
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ message: "this is products route", data: {} }));
};
