/**
 * 210. Course Schedule II (Medium)
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => [])
  const inDegree = new Array(numCourses).fill(0)
  const queue = []
  const order = []

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course)
    inDegree[course]++
  }

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i)
    }
  }

  while (queue.length) {
    const curr = queue.shift()
    order.push(curr)

    for (const next of graph[curr]) {
      inDegree[next]--

      if (inDegree[next] === 0) {
        queue.push(next)
      }
    }
  }

  return numCourses === order.length ? order : []
}
