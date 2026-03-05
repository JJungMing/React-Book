import Chance from 'chance'

const chance = new Chance()

export const randomUUID = () => chance.guid() // 고유한 식별자(GUID/UUID)를 생성하는 함수
export const randomName = () => chance.name() // 무작위 이름(풀네임)을 생성하는 함수
export const randomEmail = () => chance.email() // 무작위 이메일 형식의 문자열을 생성하는 함수
export const randomId = () => chance.fbid() // 무작위 Facebook ID를 생성하는 함수
export const randomJobTitle = () => chance.profession() // 무작위 직업 명칭을 생성하는 함수
export const randomCompanyName = () => chance.company() // 무작위 회사 이름을 생성하는 함수
export const randomSentence = (words = 5) => chance.sentence({words}) // 무작위 문장을 생성하는 함수, 매개변수로 단어 수를 지정할 수 있음
export const randomParagraph = (sentences = 3) => chance.paragraph({sentences}) // 무작위 단락을 생성하는 함수, 매개변수로 문장 수를 지정할 수 있음
