export function getRandomNumbers(numbersToGenerate: number): number[] {
  
  const returnList: number[] = [];

  for(let i:number = 1; i <= numbersToGenerate; i++) {
    returnList.push(Math.ceil(Math.random() * 10))
  }

  return returnList;
}

console.log(`API Base: ${process.env.API_BASE}`);