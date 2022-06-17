enum RadioMessage {
    message1 = 49434,
    reverse = 52434,
    accelerate = 42979,
    lights = 8859,
    left = 14947,
    right = 32391
}
radio.onReceivedMessage(RadioMessage.accelerate, function () {
    servos.P0.run(100)
})
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.accelerate)
})
radio.onReceivedMessage(RadioMessage.left, function () {
    servos.P1.setAngle(30)
})
radio.onReceivedMessage(RadioMessage.lights, function () {
    pins.digitalWritePin(DigitalPin.P3, 1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.lights)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.reverse)
})
radio.onReceivedMessage(RadioMessage.reverse, function () {
    servos.P0.run(-75)
})
radio.onReceivedMessage(RadioMessage.right, function () {
    servos.P1.setAngle(150)
})
let steering_angle_P4 = 0
radio.setGroup(3)
servos.P1.setAngle(90)
basic.forever(function () {
    steering_angle_P4 = pins.digitalReadPin(DigitalPin.P4)
    if (input.pinIsPressed(TouchPin.P2)) {
        radio.sendMessage(RadioMessage.left)
    } else if (steering_angle_P4 == 1) {
        radio.sendMessage(RadioMessage.right)
    }
})
