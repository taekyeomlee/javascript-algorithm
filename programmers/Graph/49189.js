function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => [])

  for (const [from, to] of edge) {
    graph[from].push(to)
    graph[to].push(from)
  }

  const dists = Array.from({ length: n + 1 }, () => 0)
  dists[1] = 1

  const queue = [1]

  while (queue.length > 0) {
    const cur = queue.shift()

    for (const next of graph[cur]) {
      if (dists[next]) {
        continue
      }

      dists[next] = dists[cur] + 1
      queue.push(next)
    }
  }

  const max = Math.max(...dists.slice(1))
  return dists.filter((dist) => dist === max).length
}
