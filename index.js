const colors = require("colors/safe");

let count = 0

let [firstPrime, secondPrime] = process.argv.slice(2)

const colorList = [colors.green, colors.yellow, colors.red]

if (!firstPrime || !secondPrime) {
    console.log(colors.red('Ошибка! Введите два простых числа'))

} else {
    if (firstPrime < 2) {
        firstPrime = 2
    }

    for (let i = firstPrime; i <= secondPrime; i++) {
        let isPrime = true

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false
            }
        }

        if (isPrime) {
            console.log(colorList[count % 3](i))
            count++
        }
    }

    if (!count) {
        console.log(colors.red('Не найдено простых чисел в диапазоне'))
        process.exit ()
    }
}