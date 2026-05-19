import type { IncomingMessage, ServerResponse } from "node:http";
import { readProduct } from "../services/Products.servics";
import type { IProduct } from "../Types/products.type";
import { parseBody } from "../Utilities/parseBody";

export const productsController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  const urlParts = url?.split("/");

  const id = urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;
  // console.log("this is url id" , id)

  if (url === "/products" && method === "GET") {
    const product = readProduct();

    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "this is products route", data: product }),
    );
  }else if (method === "GET" && id !==null){
    const products = readProduct();
    const product = products.find((p: IProduct)=> p.id === id)
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "this is product resived success  ", data: product }),
    );
  }else if (method === "POST" && url === "/products"){
    const body = await parseBody(req);
    console.log(body)
    
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ message: "this  product create success",  }),
    );
  }
};
