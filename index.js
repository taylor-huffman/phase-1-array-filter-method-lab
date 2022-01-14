// Code your solution here
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