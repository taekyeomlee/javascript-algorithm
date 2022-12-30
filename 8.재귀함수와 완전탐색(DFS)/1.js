/**
 * 1. 재귀함수와 스택프레임(중요)
 *
 * 자연수 N이 입력되면 재귀함수를 이용하여
 * 1부터 N까지를 출력하는 프로그램을 작성하세요
 *
 * 3
 *
 * 123
 */

function solution(n) {
  function DFS(level) {
    if (level === 0) return

    DFS(level - 1)
    console.log(level)
  }

  DFS(n)
}

let n = 3
console.log(solution(n))
