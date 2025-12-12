require("dotenv").config();
const exprees = require('express')
const mongoose = require('mongoose')
const { userModel } = require('./model/user')
const app = exprees()
const PORT = 3000
const jwt = require("jsonwebtoken")
const cors = require('cors')
const MONGODB_URL = process.env.MONGODB_URL
const JWT_USER_SECRETE = process.env.JWT_USER_SECRETE


app.use(exprees.json())

app.use(cors({
  origin: "*"
}));


mongoose.connect(MONGODB_URL).then(() => console.log("mogodb connected successfully")).catch(() => console.log("db connection faild"))

app.post('/signup', async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    await userModel.create({
        name: name,
        email: email,
        password: password
    })

    res.json({
        success: "user registered successfully"
    })


})

app.post('/signin', async (req, res) => {
    try {
        const { name, password } = req.body;

        const response = await userModel.findOne({ name, password });

        if (!response) {
            return res.status(400).json({
                message: "Invalid name or password"
            });
        }

        const token = jwt.sign(
            { userId: response._id },
            JWT_USER_SECRETE
        );

        res.json({ token });

    } catch (err) {
        console.error("Signin error:", err.message);  // print actual issue
        res.status(500).json({ message: "Internal server error" });
    }
});



app.listen(PORT, () => {
    console.log("server running at ", PORT)
})