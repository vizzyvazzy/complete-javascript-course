let markWeight;
let markHeight;

let johnWeight;
let johnHeight;

markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;

markBmi = markWeight / markHeight ** 2
johnBmi = johnWeight / johnHeight ** 2

let result;
if (markBmi > johnBmi) {
    result = `Mark's BMI ${markBmi} is higher than John's ${johnBmi}`
} else {
    result = `John's BMI ${johnBmi} is higher than Mark's ${markBmi}`
}
console.log(result)

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBmi = markWeight / markHeight ** 2
johnBmi = johnWeight / johnHeight ** 2

if (markBmi > johnBmi) {
    result = `Mark's BMI ${markBmi} is higher than John's ${johnBmi}`
} else {
    result = `John's BMI ${johnBmi} is higher than Mark's ${markBmi}`
}
console.log(result)
