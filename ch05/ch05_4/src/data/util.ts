// length만큼의 크기를 가진 배열 만들기 (모든 칸을 null로 채우기)
export const makeArray = (length: number) => new Array(length).fill(null)

// min부터 max - 1 까지의 숫자 배열 만들기 (notUsed는 배열의 각 칸에 들어갈 값이지만, 실제로는 사용하지 않음)
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min)

// min 이상 max 미만의 랜덤한 숫자 하나 반환
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min
