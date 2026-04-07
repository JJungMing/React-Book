import {Button} from '../../theme/daisyui'

export default function Size() {
  return (
    <section className="mt-4">
      <h2 className="font-bold text-5xl text-center">Size</h2>
      <div className="mt-4 flex justify-evenly">
        <Button className="btn-lg btn-primary">BTN-lg</Button>
        <Button className="btn-md btn-primary">BTN-md</Button>
        <Button className="btn-sm btn-primary">BTN-sm</Button>
        <Button className="btn-xs btn-primary">BTN-xs</Button>
      </div>
    </section>
  )
}
