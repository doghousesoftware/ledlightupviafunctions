let Xxx = 0
let Yyy = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    lightupTypical(4, 4, -1, -1)
})
// assume start at top 0,0
function lightupTypical (Horizontalstart: number, Verticalstart: number, Horizontalstep: number, Verticalstep: number) {
    Xxx = Horizontalstart
    Yyy = Verticalstart
    for (let index = 0; index < 5; index++) {
        Yyy = Verticalstart
        for (let index = 0; index < 5; index++) {
            led.plot(Xxx, Yyy)
            Yyy += Verticalstep
            basic.pause(100)
        }
        Xxx += Horizontalstep
    }
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    lightupReverse(0, 0, 1, 1)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    lightupReverse(4, 4, -1, -1)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.clearScreen()
    lightupTypical(0, 0, 1, 1)
})
// assume start at bottom 4,4
function lightupReverse (Horizontalstart: number, Verticalstart: number, Horizontalstep: number, Verticalstep: number) {
    Xxx = Horizontalstart
    Yyy = Verticalstart
    for (let index = 0; index < 5; index++) {
        Yyy = Verticalstart
        for (let index = 0; index < 5; index++) {
            led.plot(Yyy, Xxx)
            Yyy += Verticalstep
            basic.pause(100)
        }
        Xxx += Horizontalstep
    }
}
