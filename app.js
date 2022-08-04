const port = 8000

const express = require('express')
const { request } = require('http')
const app = express()
const path = require("path")
let list = []

app.use('/', express.static("pages"))

app.get('/', (request, response) => {
    response.send("Hello world")
})

app.get('/about', (request, response)=>{
    let filePath = path.join(__dirname,"pages", "myResume.html")
    response.sendFile(filePath)
})

app.get('/convert', (request, response)=>{
    let filePath = path.join(__dirname,"pages", "convert.html")
    response.sendFile(filePath)
})

app.get('/add', (request, response)=>{
    let filePath = path.join(__dirname,"pages", "add.html")
    response.sendFile(filePath)
})

app.get('/todo', (request, response)=>{
    let filePath = path.join(__dirname,"pages", "main.html")
    response.sendFile(filePath)
})

app.get("/contact", (request, response)=>{
    let filePath = path.join(__dirname,"pages", "contact.html")
    response.sendFile(filePath)
})

app.get("/register", (request, response)=>{
    let data = request.query
    list.push(data)
    response.redirect("/list")
})

app.get("/list", (request, response)=> {
    response.send(list)
})


app.listen(port, ()=>{
    console.log("Server is running on port..." + port)
})