import {useRef, useCallback, useEffect} from 'react'
import {Title} from '../components'
import {Button} from '../theme/daisyui'

// useState 훅을 사용하지 않고 input의 value 속성 값을 가져오는 실습
export default function InputValueTest() {
  const inputRef = useRef<HTMLInputElement>(null)

  const getValue = useCallback(() => alert(`input value: ${inputRef.current?.value}`), [])

  useEffect(() => inputRef.current?.focus(), [])

  return (
    <section className="mt-4">
      <Title>InputValueTest</Title>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-1/3 p-2">
          <input
            ref={inputRef}
            className="input input-primary"
            placeholder="enter some text"
          />
          <Button onClick={getValue} className="mt-4 btn-primary">
            GET VALUE
          </Button>
        </div>
      </div>
    </section>
  )
}
