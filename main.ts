radio.onReceivedNumber(function (receivedNumber) {
    block_buttons = true
    basic.clearScreen()
    あひるを表示()
    basic.pause(1000)
    if (receivedNumber == id) {
        あひるexists = true
        basic.showLeds(`
            . # # . .
            # . # . #
            # . # # .
            # . # # .
            . # # . #
            `)
        basic.showIcon(IconNames.Duck)
    } else {
        あひるexists = false
        あひる通過()
    }
    block_buttons = false
})
function あひるを表示 () {
    あひるexists = true
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # #
        . . # # #
        . . . # #
        . . . # #
        . . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # .
        . # # # .
        . . # # #
        . . # # #
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        . . # . .
        `)
}
input.onButtonPressed(Button.A, function () {
    if (あひるexists) {
        id_target = randint(1, id_max)
        radio.sendNumber(id_target)
        あひる通過()
        if (id_target == id) {
            あひるを表示()
        } else {
            あひるexists = false
        }
    }
})
function あひる通過 () {
    あひるexists = false
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # .
        # # # . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # . .
        # # . . .
        . # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(id_max)
    basic.pause(1000)
    if (あひるexists) {
        basic.showIcon(IconNames.Duck)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    id += 1
    if (id > 8) {
        id = 0
    }
    basic.showNumber(id)
})
radio.onReceivedString(function (receivedString) {
    if (id != 0) {
        basic.showString("r")
        block_buttons = true
        radio.sendValue("id", id)
        basic.showNumber(id)
    }
})
input.onButtonPressed(Button.B, function () {
    if (id == 0) {
        radio.sendString("regist")
        basic.pause(1000)
        id_max += 1
        id = id_max
        radio.sendValue("id", id)
        basic.showNumber(id)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(id)
    basic.pause(1000)
    if (あひるexists) {
        basic.showIcon(IconNames.Duck)
    } else {
        basic.clearScreen()
    }
})
radio.onReceivedValue(function (name, value) {
    if (value > id_max) {
        id_max = value
        basic.showString("y" + convertToText(id_max))
    }
    block_buttons = false
})
let id_max = 0
let id_target = 0
let block_buttons = false
let id = 0
let あひるexists = false
radio.setGroup(67)
あひるexists = true
id = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
