// let mapkey = [27, 38, 37, 38, 39, 65, 37, 40, 66, 40, 39, 65, 66, 40, 39, 65, 13]
let mapkey = [38, 37, 38, 39, 65, 37, 40, 66, 40, 39, 65, 66, 40, 39, 65]
let mapkeyTemp = []
document.onkeydown=function(e){
  if(e.keyCode == 27){
    mapkeyTemp = []
    console.log(mapkeyTemp)
    return
  }
  if(e.keyCode == 13){
    if(mapkey.join('') == mapkeyTemp.join('')){
      console.log('Open the secret book')
      mapkeyTemp = []
      return
    }
    mapkeyTemp = []
    return
  }
  if(mapkeyTemp.length > mapkey.length){
    mapkeyTemp = []
    return
  }
  mapkeyTemp.push(e.keyCode)
  console.log(mapkeyTemp)
}
