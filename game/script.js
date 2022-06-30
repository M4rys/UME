import Presentation from './scripts/presentation.js'
import KeyboardListener from './scripts/input.js'
import Game from './scripts/game.js'
import Utils from './scripts/utils.js'

// declarações

const ctx = document.getElementById("canvas").getContext('2d')
const game = new Game()

// definições

const label_sala = document.getElementById("label_sala")
let sala = Utils.getData("currentSala")
if (sala === null) window.location.href = "/salas"

label_sala.textContent = "Sala: " + sala.name

// listeners

const keyboardListener = new KeyboardListener()
keyboardListener.subscribe(game.OnKeyPress)

// renderizar

Utils.loadAssets().then((assets) => {
    game.criarObjeto({ id: '0', tipo: 'ground', x: 128, y: 450 })
    game.criarObjeto({ id: '1', tipo: 'ground', x: 128 + 256, y: 420 })
    game.criarObjeto({ id: '2', tipo: 'ground', x: 128 + 512, y: 330 })
    game.criarObjeto({ id: '3', tipo: 'ground', x: 1024-128, y: 200 })


    game.criarPersonagem({ id: '0', x: 128, y: 100 })
    //game.criarPersonagem({ id: '1', x: 250, y: 150 })

    Presentation.renderScreen(ctx, assets, game)
})

window.onbeforeunload = () => {
    Utils.removeData("currentSala")
}