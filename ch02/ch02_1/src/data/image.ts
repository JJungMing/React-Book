import * as U from './util'

// 가로(width)와 세로(height) 크기를 입력받아 https://picsum.photos/가로/세로 형태의 문자열을 반환하는 함수
export const picsumUrl = (width: number, height: number): string =>
  `https://picsum.photos/${width}/${height}`

// 가로(1000 ~ 1200)와 세로(800 ~ 1000) 크기를 랜덤하게 입력받아 https://picsum.photos/가로/세로 형태의 문자열을 반환하는 함수(무작위 크기의 이미지)
export const randomImage = (
  w: number = 1000,
  h: number = 800,
  delta: number = 200
): string => picsumUrl(U.random(w, w + delta), U.random(h, h + delta))

// 가로(200 ~ 400)와 세로(200 ~ 400) 크기를 랜덤하게 입력받아 https://picsum.photos/가로/세로 형태의 문자열을 반환하는 함수(정사각형 이미지)
export const randomAvatar = () => {
  const size = U.random(200, 400)
  return picsumUrl(size, size)
}
