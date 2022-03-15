require('dotenv').config({
    path: process.env.NODE_ENV === "develop" ? ".env.example" : ".env"
})
console.log(process.env.KEY)

const projeto = process.env.PROJETO

if(projeto === "1"){
    console.log("Executando script 01")
}
if(projeto === "2"){
    console.log("Executando script 02")
}
if(projeto === "3"){
    console.log("Executando script 02")
}
if(!(["1", "2", "3"].includes(projeto))){
    console.log("Não foi encontrado!")
}