namespace SpriteKind {
    export const UI = SpriteKind.create()
}
namespace StatusBarKind {
    export const game = StatusBarKind.create()
}
function createTitleScreen () {
    scene.setBackgroundImage(assets.image`MenuBG`)
    mainTitle = fancyText.create("Chester", 0, 15, fancyText.art_deco_11)
    mainTitle.setPosition(80, 30)
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("Jogar"),
    miniMenu.createMenuItem("Sair")
    )
    miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            sprites.destroy(myMenu)
            sprites.destroy(mainTitle)
            gameState = 1
            effects.confetti.endScreenEffect()
            createNarration("prologo")
        } else if (selectedIndex == 1) {
        	
        }
    })
}
function createLoadingScreen () {
    loadingText = fancyText.create("Carregando...", 0, 1, fancyText.art_deco_11)
    loadingbar = statusbars.create(140, 10, StatusBarKind.game)
    loadingbar.max = 100
    loadingbar.value = 0
    loadingbar.setColor(1, 2)
    loadingbar.attachToSprite(loadingText, -30, 0)
    while (loadingbar.value < 100) {
        loadingbar.value += 5
        pause(100)
    }
    sprites.destroy(loadingText)
    sprites.destroy(loadingbar)
}
function createNarration (stage: string) {
    color.setPalette(
    color.originalPalette
    )
    if (stage == "prologo") {
        effects.blizzard.startScreenEffect(9999999)
        game.splash("Há muito tempo....")
        textBox = sprites.create(assets.image`textBox`, SpriteKind.UI)
        textBox.setPosition(80, 80)
    }
}
let textBox: Sprite = null
let loadingbar: StatusBarSprite = null
let loadingText: fancyText.TextSprite = null
let myMenu: Sprite = null
let mainTitle: fancyText.TextSprite = null
let gameState = 0
// 0 = menu
// 1 = diálogo
// 2 = exploração
// 3 = combate
gameState = 0
createLoadingScreen()
createTitleScreen()
