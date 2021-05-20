function Turn_by (a: number) {
    angle += a
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, angle)
}
input.onButtonPressed(Button.A, function () {
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 90)
    angle = 90
})
input.onButtonPressed(Button.B, function () {
    mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 45)
    angle = 45
})
let x = 0
let x2 = 0
let x1 = 0
let angle = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.pause(200)
huskylens.writeName(1, "My name")
basic.pause(200)
huskylens.writeName(2, "Another classmaate")
mbitbot.move_servo_pin(mbitbot.SePin.Sepin1, 90)
angle = 90
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    huskylens.request()
    x1 = huskylens.readeBox(1, Content1.xCenter)
    x2 = huskylens.readeBox(2, Content1.xCenter)
    if (x1 >= 0 && x2 >= 0) {
        x = (x1 + x2) / 2
    } else if (x1 >= 0) {
        x = x1
    } else if (x2 >= 0) {
        x = x2
    } else {
        x = -1
    }
    if (x > 190 && x < 320) {
        Turn_by(-1)
    } else if (x > 0 && x < 130) {
        Turn_by(1)
    }
})
