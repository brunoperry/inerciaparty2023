import express from "express";
import ejs from "ejs";
import { fileURLToPath } from "url"; // Import the 'fileURLToPath' function from the 'url' module
import path from "path";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url); // Get the current file's path
const __dirname = path.dirname(__filename); // Get the directory name

const app = express();
const port = 80;

let isLogged = false;

// Configure EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Specify the directory where your EJS templates are located

// Register EJS as the view engine
app.engine("ejs", ejs.renderFile);

app.use(compression());
// Serve static assets from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define a simple route using async/await
app.get("/", async (req, res) => {
  res.render("news", { isLogged: isLogged });
});
app.get("/news", async (req, res) => {
  res.render("news", { isLogged: isLogged });
});
app.get("/about", async (req, res) => {
  res.render("about", { isLogged: isLogged });
});
app.get("/travel", async (req, res) => {
  res.render("travel", { isLogged: isLogged });
});
app.get("/location", async (req, res) => {
  res.render("location", { isLogged: isLogged });
});
app.get("/participate", async (req, res) => {
  res.render("participate", { isLogged: isLogged });
});
app.get("/seminars", async (req, res) => {
  res.render("seminars", { isLogged: isLogged });
});
app.get("/timetable", async (req, res) => {
  res.render("timetable", { isLogged: isLogged });
});
app.get("/login", async (req, res) => {
  res.render("login", { isLogged: false });
});
app.get("/doLogin", async (req, res) => {
  isLogged = true;
  res.redirect("/");
});
app.get("/logout", async (req, res) => {
  isLogged = false;
  res.redirect("/");
});

app.get("/upload", async (req, res) => {
  res.render("upload", { isLogged: true });
});
app.get("/update", async (req, res) => {
  res.render("update", { isLogged: true });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
