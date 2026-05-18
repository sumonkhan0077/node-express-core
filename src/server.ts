import {
  createServer,
  IncomingMessage,
  Server,
  ServerResponse,
} from "node:http";
import { routehandeler } from "./routes/route";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req)
   routehandeler(req ,res)
  },
);

server.listen(5000, () => {
  console.log("server is running on 5000 port");
});
