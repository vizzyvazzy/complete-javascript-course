const doplhinsFScore = 110
const doplhinsSScore = 108
const doplhinsTScore = 89

const koalasFScore = 900
const koalasSScore = 91
const koalasTScore = 110

const dolphinScoreAvg = (doplhinsFScore + doplhinsSScore + doplhinsTScore) / 3
const koalaScoreAvg = (koalasFScore + koalasSScore + koalasTScore) / 3

console.log(koalaScoreAvg, dolphinScoreAvg)

if (koalaScoreAvg > 100 && koalaScoreAvg > dolphinScoreAvg) {
    console.log(`Koalas won the trophy with a score ${koalaScoreAvg}`)
} else if (dolphinScoreAvg > 100 && koalaScoreAvg < dolphinScoreAvg) {
    console.log(`Dolphins won the trophy with a score ${dolphinScoreAvg}`)
} else {
    console.log(`Nobody won the trophy`)
}
