const http=require("http");
const fs=require("fs");
const port=3000;

const server=http.createServer((req,res)=>{
 
    if(req.url=="/"){
        fs.readFile("./index.html",(err,data)=>{
            res.writeHead(200,{'Content-type':"text-html"});
            res.write(data);
            res.end();
        })
    }

    else if(req.url=="/video"){
        fs.readFile("./cake.mp4",(err,data)=>{
            if(!err){
                res.writeHead(200,{'Content-type':"video/mp4"});
                res.write(data);
                res.end();
            }
        })   
    
    }


    else if(req.url="/book"){
            res.writeHead(200,{'Content-type':"application/json"});
            res.write(JSON.stringify({data:[{BookName:"NODEjs1",Author:"Anudeep"}]}));
            res.end();
        }
        else{
            res.writeHead(404);
            res.write("404 not found");
            res.end();
        }
    });



server.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`server is running on port ${port}`)
    }
})
