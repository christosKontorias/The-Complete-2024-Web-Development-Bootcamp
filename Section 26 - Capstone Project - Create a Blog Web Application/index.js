import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/blog", (req, res) => {
    res.render("blog.ejs", { posts: blogPosts });
});

app.get("/new_blog", (req, res) => {
    res.render("new_blog.ejs");
});

let blogPosts = [];
app.post("/create", (req, res) => {
    const blogTitle = req.body.blogTitle;
    const blogArticle = req.body.blogArticle;

    const newPost = {
        title: blogTitle,
        content: blogArticle,
        createdAt: new Date() 
    };

    blogPosts.push(newPost);

    res.render("blog.ejs", { posts: blogPosts });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});