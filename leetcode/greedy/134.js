/**
 * 134. Gas Station (Medium)
 *
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
  let start = 0
  let totalGas = 0
  let totalCost = 0

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i]
    totalCost += cost[i]
    tank += gas[i] - cost[i]
    if (gas[i] - cost[i] < 0) {
      tank = 0
      start = i + 1
    }
  }

  if (totalGas >= totalCost) {
    return start
  } else {
    return -1
  }
}
