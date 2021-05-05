let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 25; index++) {
        led.unplot(x, y)
        x += -1
        if (x == -1) {
            x += 5
            y += -1
        }
        basic.pause(500)
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    x = 4
    y = 4
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
