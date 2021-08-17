input.onButtonPressed(Button.A, function () {
    segundos = segundos + 1
    if (segundos < 59) {
        minutos += 1
    }
    if (segundos == minutos) {
        horas = 0
    }
})
let horas = 0
let minutos = 0
let segundos = 0
segundos += 58
minutos += 58
horas += 12
