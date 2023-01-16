import express from "express";

const app = express();

app.set("view engine", "pug"); // app.set(name,data) - call pug 

app.set("views", __dirname + "/views")
app.use(express.static(path.join(__dirname,"/public"))); 
// work like configuration option with express 

app.get("/", (req, res)=>res.render("home"));

const handleListen = () => console.log(`listening on http://localhost:3000`);

app.listen(3000, handleListen);