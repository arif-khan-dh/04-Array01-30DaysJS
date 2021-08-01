let questionSet = [{
        id:1,
        topic: "Array.prototype.filter()",
        question: "Filter the list of inventors for those who were born in the 1500's",
        answer: `
const inventorsFifteen = inventors.filter(inventor => {
    if(inventor.year >= 1500 && inventor.year < 1600) {
        return true
}
}) `
    },
    {
        id: 2,
        topic: "Array.prototype.map()",
        question: "Give us an array of the inventors first and last names",
        answer: `
const fullNames = inventors.map( inventor => 
    inventor.first + ' ' +inventor.last})
console.table(fullNames)`
    }
    ,
    {
        id: 3,
        topic: "Array.prototype.sort()",
        question: "Sort the inventors by birthdate, oldest to youngest",
        answer: `
const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1)
console.table(ordered)`
    }
    ,
    {
        id: 4,
        topic: "Array.prototype.reduce()",
        question: "How many years did all the inventors live all together?",
        answer: `
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0)
console.log(totalYears)
        `
    }
    ,
    {
        id: 5,
        topic: "Array.prototype.sort()",
        question: "Sort the inventors by years lived",
        answer: `
const oldest = inventors.sort((a, b) => 
    (a.passed - a.year) > (b.passed - b.year) ? -1 : 1)
console.table(oldest)
        `
    }
    ,
    {
        id: 6,
        topic: ["Array.prototype.filter()", "Array.prototype.map()"],
        question: "create a list of Boulevards in Paris that contain 'de' anywhere in the name https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris",
        answer: `
const links = document.querySelectorAll('.mw-category-group li a')
const linkArr = [...document.querySelectorAll('.mw-category-group li a')]
const names1 = linkArr.map((link) => link.textContent)
const nameDe = names1.filter(name => name.toLowerCase().includes('de'))
        `
    }
    ,
    {
        id: 7,
        topic: "Array.prototype.sort()",
        question: "Sort the people alphabetically by last name",
        answer:`
const sorted = people.sort((a, b) => {
    return a.split(', ')[0] > b.split[0] ? 1 : -1
})
console.log(sorted)
        `
    }
    ,
    {
        id: 8,
        topic: "Array.prototype.reduce()",
        question: "Sum up the instances of each of these",
        answer: `
const data = ['car', 'car', 'truck', 'truck', 'bike', 
    'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 
    'truck' ];
const reduced = data.reduce((tally, currVal) => {
    if(tally[currVal]){
        tally[currVal]++
    } else {
        tally[currVal] = 1
    }
    return tally
}, {})

console.log(reduced)
        `
    }
]

