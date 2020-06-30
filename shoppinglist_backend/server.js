const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const port = 8080;
const filename = __dirname + "/products.json";
const filename1 = __dirname + "/favourites.json";

//Middleware
app.use(express.json());
app.use(cors());
function log(req, res, next){
    console.log(req.method + " Request at " + req.url);
    next();
}
app.use(log);

//Endpoints
app.get("/products", function (req, res){
    fs.readFile(filename, "utf8", function (err, data) {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(data);
    });
});

app.get("/favourites", function (req, res){
    fs.readFile(filename1, "utf8", function (err, data) {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(data);
    })
})

app.get("/products/:id", function (req, res){
    fs.readFile(filename, "utf8", function (err, data) {
        const product = JSON.parse(data)[req.params.id];
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(JSON.stringify(product));
    });
});

app.put("/products/:id", function (req, res){
    fs.readFile(filename, "utf8", function (err, data) {
        let product = JSON.parse(data);
        product[req.params.id].name = req.body.name;
        product[req.params.id].amount = req.body.amount;
        fs.writeFile(filename, JSON.stringify(product), () => {
            res.writeHead(200, {
                "Content-Type": "application/json",
            });
            res.end(JSON.stringify(product));
        });
    });
});

app.delete("/products/:id", function (req, res){
    fs.readFile(filename, "utf8", function (err, data) {
        let product = JSON.parse(data);
        product.splice(req.params.id, 1);
        for(let i = 0; i < product.length; i++){
            product[i].id = i;
        }
        fs.writeFile(filename, JSON.stringify(product), () => {
            res.writeHead(200, {
                "Content-Type": "application/json",
            });
            res.end(JSON.stringify(product));
        });
    });
});

app.delete("/favourites/:id", function (req, res){
    fs.readFile(filename1, "utf8", function (err, data) {
        let fav = JSON.parse(data);
        let index = fav.map(function(e) {return e.idMeal; }).indexOf(req.params.id)
        fav.splice(index, 1);
        fs.writeFile(filename1, JSON.stringify(fav), () => {
            res.writeHead(200, {
                "Content-Type": "application/json",
            });
            res.end(JSON.stringify(fav));
        })
    })
})

app.post("/products", function (req, res){
    fs.readFile(filename, "utf8", function (err, data) {
        let product = JSON.parse(data);
        product.push({
            id: product.length,
            name: req.body.name,
            amount: req.body.amount,
        });
        fs.writeFile(filename, JSON.stringify(product), () => {
            res.writeHead(200, {
                "Content-Type": "application/json",
            });
            res.end(JSON.stringify(product));
        });
    });
});

app.post("/favourites", function (req, res){
    fs.readFile(filename1, "utf8", function (err, data) {
        let fav = JSON.parse(data);
        if (fav.map(function(e) {return e.idMeal; }).indexOf(req.body.idMeal) == -1){
            fav.push(req.body);
        }
        fs.writeFile(filename1, JSON.stringify(fav), () => {
            res.writeHead(200, {
                "Content-Type": "application/json",
            });
            res.end(JSON.stringify(fav));
        })
    })
})

app.listen(port, () => console.log(`Server listening on port ${port}`));