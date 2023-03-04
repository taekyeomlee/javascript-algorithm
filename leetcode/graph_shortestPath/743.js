/**
 * 743. Network Delay Time (Medium)
 *
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const graph = new Array(n + 1)

  for (let i = 1; i <= n; i++) {
    graph[i] = []
  }

  for (const [u, v, w] of times) {
    graph[u].push([v, w])
  }

  const dists = new Array(n + 1).fill(Infinity)
  dists[k] = 0

  const pq = [[k, 0]]

  while (pq.length > 0) {
    const [node, time] = pq.shift()

    if (time > dists[node]) continue

    for (const [v, w] of graph[node]) {
      if (dists[node] + w < dists[v]) {
        dists[v] = dists[node] + w
        pq.push([v, dists[v]])
      }
    }
  }

  const maxDist = Math.max(...dists.slice(1))
  return maxDist === Infinity ? -1 : maxDist
}
