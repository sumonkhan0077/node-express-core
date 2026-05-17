import { createServer, IncomingMessage, Server } from "node:http";

const server: Server = createServer ((req: IncomingMessage , res ) => {
    console.log(req)
})

server.listen(5000 , () => {
    console.log("server is running on 5000 port")
})