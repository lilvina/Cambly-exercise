const fs = require("file-system")

fs.readFile('paragraph.txt', 'utf-8', (error, data) => {
  if(error) {
    throw error;
  }

  let newData = {}

  let nextData = data.replace(/(\r\n|\n|\r)/gm, " ")

  let nextData2 = nextData.replace(/[&\/\\#,+()$~%.'":;*?<>{}]/g, "")

  let nextData3 = nextData2.toLowerCase()

  let array = nextData3.split(' ')

  for(let i = 0; i < array.length; i++) {
    if(!(array[i] in newData)) {
      newData[array[i]] = 1
    } else {
      newData[array[i]] += 1
    }
  }

  let arrayOne = Object.keys(newData)
  let arrayTwo = Object.values(newData)
  let arrayMap = arrayOne.map((x, y) => {
    return [x, arrayTwo[y]]
  })
  arrayMap.sort((a, b) => {
    b[1] - a[1]
  })
  console.log(arrayMap)
})
