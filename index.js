// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  return drivers.map(convertDriverToObject)
}

function convertDriverToObject(driver) {
  let firstName = driver.split(' ')[0]
  let lastName = driver.split(' ')[1]
  return { firstName: firstName, lastName: lastName }
}

function attributesToPhrase(drivers) {
  return drivers.map(convertDriverToPhrase)
}

function convertDriverToPhrase(driver) {
  return `${driver.name} is from ${driver.hometown}`
}