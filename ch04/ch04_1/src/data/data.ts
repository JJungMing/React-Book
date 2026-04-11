import {DateTime} from 'luxon'

// 현재시간에서 과거의 어느 시점의 날짜를 랜덤으로 생성하는 함수
export const makeRandomPastDate = () => {
  const value = new Date().valueOf() // 현재 시간을 밀리초 단위 숫자로 변환
  const n = 100000
  return new Date(value - Math.floor(Math.random() * n * n)) // n * n은 100,000,000ms (최대 약 27.7시간)
}

// 날짜를 사람이 읽기 편한 상대적인 문구로 변환하는 함수
export const makeRelativeDate = (date: Date) =>
  DateTime.fromJSDate(date).startOf('day').toRelative() // startOf('day')는 시간 차이보다는 일 단위의 차이로 명확하게 계산

// 랜덤한 과거 날짜를 생성하여 상대적인 문구로 변환하는 함수
export const randomRelativeDate = () => makeRelativeDate(makeRandomPastDate())

// 날짜를 해당 지역의 표준 형식으로 변환하는 함수
export const makeDatMonthYear = (date: Date) =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL)

// 랜덤한 과거 날짜를 생성하여 해당 지역의 표준 형식으로 변환하는 함수
export const randomDayMonthYear = () => makeDatMonthYear(makeRandomPastDate())
