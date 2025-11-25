const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear()
    for (const person of people) {
        person.age = (person.yearOfDeath || currentYear) - person.yearOfBirth
    }
    const oldestPerson = people.reduce((maxAgePerson, currentPerson) => {
        return currentPerson.age > maxAgePerson.age ? currentPerson : maxAgePerson;
    }, people[0])
    return oldestPerson
};
console.log(findTheOldest(people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]))
// Do not edit below this line
module.exports = findTheOldest;
