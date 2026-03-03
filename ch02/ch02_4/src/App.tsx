import P from './P'

export default function App() {
  const texts = ['hello', 'world'].map((text, index) => <P key={index} children={text} />)
  return <div children={texts} />
}

// export default function App() {
//   const texts = ['hello', 'world'].map((text, index) => (
//     <p key={index}>children={text}</p>
//   ))
//   return <div children={texts} />
// }

// export default function App() {
//   const texts = ['hello', 'world'].map((text, index) => <p key={index}>{text}</p>)
//   return <div>{texts}</div>
// }

// export default function App() {
//   const texts = [<p key="1">hello</p>, <p key="2">world</p>]
//   return <div>{texts}</div>
// }

// export default function App() {
//   const texts = [<p>hello</p>, <p>world</p>]
//   return <div>{texts}</div>
// }
