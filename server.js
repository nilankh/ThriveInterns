const express = require("express");

// Create express app
const app = express();


app.get('/', (req, res) => {
    res.json({"message": "Welcome to Thrive Interns"})
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
