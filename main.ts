let Unittled: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    Unittled = game.createSprite(randint(0, 4), randint(0, 4))
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111)
})
basic.forever(function () {
	
})
