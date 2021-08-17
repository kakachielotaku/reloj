let horas = 0
let minutos = 0
let segundos = 0
segundos += 58
minutos += 58
horas += 12
basic.forever(function () {
    if (segundos < 58) {
        segundos += 1
    } else {
        segundos = 0
    }
    if (minutos < 58) {
        minutos += 1
    } else {
        minutos = 0
    }
    if (horas < 12) {
        horas += 1
    } else {
        horas = 0
    }
})
