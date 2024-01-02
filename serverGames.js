var express = require("express")
var app = express()
const router = express.Router()
app.use(express.json())
const { v4: uuidv4 } = require('uuid')

//porta do localhost
const PORT = 5000

//conectar com banco de dados
const connectData = require ('./dataBase')
connectData()

//integrar o model games
const Game = require('./gamesModels')

//função POST
async function creatGame(request, response) {
    const newGame = new Game ({
        name: request.body.name,
        year: request.body.year,
        platform: request.body.platform
    })
    try {
        const gameDone = await newGame.save()
        response.status(201).json(gameDone)
    } catch (error) {
        console.log(error)
    }
}


// função GET
async function showGames(request, response) {
    try {
        const gamesData = await Game.find()
        response.json(gamesData)
        
    } catch (erro) {
        console.log(erro)
    }
}

//função PATCH
async function updateGame (request, response) {
    try {
        const gameFound = await Game.findById(request.params.id)
        if(request.body.name) {
            gameFound.name  = request.body.name
        }
        if(request.body.year) {
            gameFound.year  = request.body.year
        }
        if(request.body.platform) {
            gameFound.platform  = request.body.platform
        }
        const gameUpdated = await gameFound.save()
        response.json(gameUpdated)
    } catch (error) {
        console.log(error)
    }
}

//função DELET 
async function gameDelete (request, response) {
    try {
        await Game.findByIdAndDelete(request.params.id)
        response.json({message: 'Game delete successfully'})
    } catch (error) {
        console.log(error)
    }
}


//chamada da porta
function showPort () {
    console.log("Server ir running on port: ", PORT)
}

//ROTAS 
app.use(router.get('/serverGames', showGames))
app.use(router.post('/serverGames', creatGame))
app.use(router.patch('/serverGames/:id', updateGame))
app.use(router.delete('/serverGames/:id', gameDelete))


app.listen(PORT, showPort)

