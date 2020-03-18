// configurando servidor
const express = require("express")
const server = express()

// configurar servidor para apresentar aquivos estaticos
server.use(express.static("public"))

// habilitar body do formulario
server.use(express.urlencoded({extended: true}))

// configurando a template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

const donors = [
    {
        name: "Daniel italo",
        blood: "AB+"
    },
    {
        name: "Marcelo Herique",
        blood: "A+"
    },
    {
        name: "Fernanda Lima",
        blood: "AB-"
    },
    {
        name: "Vinicios Olivio",
        blood: "O+"
    },
]



//configurando apresentação da pagina
server.get("/", function(req, res){
    return res.render("index.html", {donors})
})

server.post("/", function(req, res){
    //pegar dados do formulario
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood
    //coloco valores dentro do arrey
    donors.push({
        name: name,
        blood: blood,
    })

    return res.redirect("/")

})
  //ligar servidor e permitir o acesso na porta 3000
server.listen(3000)
