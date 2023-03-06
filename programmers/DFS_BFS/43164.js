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
