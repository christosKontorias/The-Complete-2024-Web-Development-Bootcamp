import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Christos</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Us</h1><p>Phone: +301234567891</p>");
});

app.listen(3000, ()=> {
    console.log(`Server running on port ${port}.`);
});