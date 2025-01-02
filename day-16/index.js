//import { workshopData } from './data.js'
/*---------GEMINI -------*/
export const findNaughtyElf = (workshopData) => {
  for (const elf of workshopData) {
    const toysMade = elf.toysMade;
    const discrepancies = [];

    for (const toy in toysMade) {
      let shippedCount = 0;

      // Sum up shipped counts across regions and subregions
      for (const region in elf.toysShipped) {
        for (const subregion in elf.toysShipped[region]) {
          for (const shipment of elf.toysShipped[region][subregion]) {
            if (shipment.toy === toy) {
              shippedCount += shipment.count;
            }
          }
        }
      }

      // Compare with toysMade and record discrepancies
      if (shippedCount !== toysMade[toy]) {
        discrepancies.push({ toy, made: toysMade[toy], shipped: shippedCount });
      }
    }

    // If there are discrepancies, return the elf's name
    if (discrepancies.length > 0) {
      return elf.name;
    }
  }

  // No discrepancies found
  return null;
};

function sumToys(shipmentData) {
  for (const region in shipmentData) {
    const subRegion = shipmentData[region];
    if (Array.isArray(subRegion)) {
      subRegion.forEach(({ toy, count }) => {
        totalShipped[toy] = (totalShipped[toy] || 0) + count;
      });
    } else {
      sumToys(subRegion); /* 👈 */
    }
  }
}

// Example usage
console.log(sumToys(workshopData)); //Elf Kalvin Armadillo

/* ------ORG------*/
// const findNaughtyElf = (workshopData) => {
//     console.log("findNaughtyElf");
//     for (const toyObj of data.toysShipped) {
//         for (const region in toyObj) {
//             for (const subRegion in toyObj[region]) {
//                 console.log(toyObj[region][subRegion])
//             }
//         }
//     }
// }

// Example usage
//console.log(findNaughtyElf(workshopData)) //Elf Kalvin Armadillo

//findNaughtyElf(workshopData)

// const sample = {Canada: [{toy: 'Blocks', count: 5}], USA: [{toy: 'Blocks', count: 10}]};

// const execGroupBy = (data) =>{
//     let temp = {};
//     for(const region in data){
//         data[region].map((obj) =>{
//             const key = obj.toy;
//             if(temp.hasOwnProperty(key)){
//                 temp[key] = temp[key] + obj.count;
//             }else{
//                 temp[key] = obj.count;
//             }
//         });
//     }
//     console.log(temp);
// }

//execGroupBy(sample)

// {MainWarehouse: [{toy: 'Teddy Bear', count: 3}, {toy: 'Race Car', count: 5}], Overflow: [{toy: 'Teddy Bear', count: 2}]}
// {Germany: [{toy: 'Teddy Bear', count: 5}], France: [{toy: 'Doll', count: 7}]}

// {Japan: [{toy: 'Puzzle', count: 15}], China: [{toy: 'Blocks', count: 5}]}

// {Canada: [{toy: 'Blocks', count: 5}], USA: [{toy: 'Blocks', count: 10}]}

// {Brazil: [{toy: 'Drone', count: 1}], Argentina: []}

// {Australia: [{toy: 'Robot', count: 5}], Fiji: [{toy: 'Robot', count: 5}]}

// {Brazil: [{toy: 'Board Game', count: 3}], Argentina: []}

// {Nigeria: [{toy: 'Doll', count: 10}], Namibia: [{toy: 'Doll', count: 8}]}
/* ------ORG------*/
