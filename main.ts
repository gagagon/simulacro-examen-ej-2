input.onButtonPressed(Button.A, function () {
    if (led.point(2, 2)) {
        led.plot(1, 2)
        led.unplot(2, 2)
    } else if (led.point(1, 2)) {
        led.plot(0, 2)
        led.unplot(1, 2)
    } else if (led.point(3, 2)) {
        led.plot(2, 2)
        led.unplot(3, 2)
    } else if (led.point(4, 2)) {
        led.plot(3, 2)
        led.unplot(4, 2)
    }
})
input.onButtonPressed(Button.B, function () {
    if (led.point(2, 2)) {
        led.plot(3, 2)
        led.unplot(2, 2)
    } else if (led.point(1, 2)) {
        led.plot(2, 2)
        led.unplot(1, 2)
    } else if (led.point(3, 2)) {
        led.plot(4, 2)
        led.unplot(3, 2)
    } else if (led.point(0, 2)) {
        led.plot(1, 2)
        led.unplot(0, 2)
    }
})
led.plot(2, 2)
