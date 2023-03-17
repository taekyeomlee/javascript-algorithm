/**
 * 완전탐색 > 소수 찾기 (Level 2)
 */
function solution(numbers) {
  const nums = numbers.split('').sort((a, b) => a - b)
  const used = Array.from({ length: numbers.length }, () => false)
  const result = new Set()

  const backtrack = (cur) => {
    if (cur.length > nums.length) {
      return
    }

    const num = Number(cur)
    if (isPrime(num)) {
      result.add(num)
    }

    for (let i = 0; i < numbers.length; i++) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue

      used[i] = true
      backtrack(cur + nums[i])
      used[i] = false
    }
  }

  backtrack('')

  return result.size
}

function isPrime(n) {
  if (n <= 1) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

// numbers	return
// "17"	3
// "011"	2

// 예제 #1
// [1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

// 예제 #2
// [0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.
// 11과 011은 같은 숫자로 취급합니다.
