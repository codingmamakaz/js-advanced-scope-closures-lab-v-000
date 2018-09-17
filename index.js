function produceDrivingRange(blockRange) {
    return function(start, end) {
        let startPoint = parseInt(start)
        let endPoint = parseInt(end)
        let distance = Math.abs(startPoint - endPoint)
        let checkRange = Math.abs(distance - blockRange)
        
        if (distance > blockRange) {
            return `${checkRange} blocks out of range`
        }else{
            return `within range by ${checkRange}`
        }
    }
}

function produceTipCalculator(percentage) {
    return function(total) {
        return total * percentage
    }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}