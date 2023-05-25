const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Define your routes and API endpoints here

app.listen(port, () => {
    console.log("Server running on port: " + port);
})


// simple endpoint that returns a json response

app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello, World!" });
});

