let Toestand_licht = ""
input.onPinPressed(TouchPin.P0, function () {
    if (Toestand_licht == "0") {
        Toestand_licht += 1
    } else {
        Toestand_licht += 0
    }
})
basic.forever(function () {
    if (Toestand_licht == "1") {
        pins.analogWritePin(AnalogPin.P2, pins.analogReadPin(AnalogPin.P1))
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
