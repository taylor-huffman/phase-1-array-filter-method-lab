// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(array, name) {
    return array.filter(driver => driver.toLowerCase() === name.toLowerCase())
    // return array.filter(name)
}

function fuzzyMatch(array, query) {
    return array.filter(driver => driver.slice(0, 1) === query.slice(0, 1))
}

function matchName(array, string) {
    return array.filter(obj => obj.name === string)
}