require('dotenv').config({
    path: process.env.NODE_ENV === "develop" ? ".env.example" : ".env"
})
console.log(process.env.KEY)