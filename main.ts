let steering_angle_P2 = 0
let steering_angle_P4 = 0
input.onButtonPressed(Button.A, function () {
    servos.P0.run(100)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P3, 1)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.run(-75)
})
basic.forever(function () {
    steering_angle_P2 = pins.digitalReadPin(DigitalPin.P2)
    steering_angle_P4 = pins.digitalReadPin(DigitalPin.P4)
    if (steering_angle_P2) {
        servos.P2.setAngle(30)
    } else if (steering_angle_P4) {
        servos.P2.setAngle(150)
    }
})
