function solution(tickets) {
  const result = []
  const visited = Array.from({ length: tickets.length }, () => false)

  tickets.sort()

  const backtrack = (start, path) => {
    if (path.length === tickets.length + 1) {
      result.push([...path])
      return
    }

    for (let i = 0; i < tickets.length; i++) {
      const [from, to] = tickets[i]

      if (visited[i] || from !== start) continue

      path.push(to)
      visited[i] = true
      backtrack(to, path)
      visited[i] = false
      path.pop()
    }
  }

  backtrack('ICN', ['ICN'])

  return result[0]
}

/**
 * 방향성 Graph로 접근 (인접리스트)
 *
 * 1번 케이스가 중복된 티켓
 * From -> To (중복된 티켓이 있어서 해당 경로를 여러번 가는 케이스가 있다.)
 * key값을 idx를 추가하여 방문 여부를 파악하는 방법으로 해결.
 *
 * 예외 상황
 * Graph[from] 접근시 undefined 케이스가 있다.
 * 초기에 모든 Node의 인접리스트를 빈 배열로 초기화해서 해결.
 */

function solution(tickets) {
  const result = []
  const graph = {}
  const visited = {}

  const set = new Set(tickets.flat())
  for (const node of set) {
    graph[node] = []
  }

  for (const [from, to] of tickets) {
    graph[from].push(to)
  }

  for (const from in graph) {
    graph[from].sort()
  }

  const backtrack = (start, path) => {
    if (path.length === tickets.length + 1) {
      result.push([...path])
      return
    }

    for (let i = 0; i < graph[start].length; i++) {
      const next = graph[start][i]
      const key = `${start}${i}`

      if (visited[key]) continue

      path.push(next)
      visited[key] = true
      backtrack(next, path)
      visited[key] = false
      path.pop()
    }
  }

  backtrack('ICN', ['ICN'])

  return result[0]
}
