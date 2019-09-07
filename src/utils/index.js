export const penniesToString = pennies => {
  let numberString = pennies.toString()
  
  const i = numberString.length - 2
  numberString = [numberString.slice(0, i), ".", numberString.slice(i)].join("")

  return numberString
}

export const stringToPennies = string => {
  let pennies = parseFloat(string) * 100

  return pennies
}