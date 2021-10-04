let Xxx = 0
let Yyy = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    lightup(4, 4, -1, -1)
})
function lightup (Horizontalstart: number, Verticalstart: number, Horizontalstep: number, Verticalstep: number) {
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
    lightup2(0, 0, 1, 1)
})
function lightup2 (Horizontalstart: number, Verticalstart: number, Horizontalstep: number, Verticalstep: number) {
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
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    lightup2(4, 4, -1, -1)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.clearScreen()
    lightup(0, 0, 1, 1)
})
