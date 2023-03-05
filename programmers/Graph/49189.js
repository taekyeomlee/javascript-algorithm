function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => [])

  for (const [from, to] of edge) {
    graph[from].push(to)
    graph[to].push(from)
  }

  const dists = new Array(n + 1).fill(Infinity)
  dists[1] = 0

  const queue = [[1, 0]]

  while (queue.length > 0) {
    const [cur, dist] = queue.shift()

    if (dist > dists[cur]) {
      continue
    } else {
      dists[cur] = dist
    }

    for (const next of graph[cur]) {
      queue.push([next, dist + 1])
    }
  }

  const max = Math.max(...dists.slice(1))
  return dists.filter((dist) => dist === max).length
}
