input.onButtonPressed(Button.A, function () {
    if (time > 0) {
        time += -1
        basic.showNumber(time)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (running == 1) {
        running = 0
    } else {
        running = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (time < 60) {
        time += 1
        basic.showNumber(time)
    }
})
let running = 0
let time = 0
time = 0
running = 0
basic.showNumber(time)
basic.forever(function () {
	
})
basic.forever(function () {
    while (time >= 0 && running == 1) {
        time += -1
        if (time == 0) {
            music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
            running = 0
        }
        basic.showNumber(time)
        basic.pause(1000)
    }
})
