const jsonserver=require('json-server')

const server=jsonserver.create()

server.use(jsonserver.defaults())
server.use(jsonserver.router('db.json'))

const PORT=3000||process.env.PORT
server.listen(PORT,()=>{
    console.log("Server Running at:",PORT)
})