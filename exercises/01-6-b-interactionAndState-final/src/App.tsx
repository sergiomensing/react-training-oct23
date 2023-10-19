import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export const Hover = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div data-cy="HoverComponent">
      <h3
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        Hover over me!
      </h3>
      {isHover && <p>👋</p>}
    </div>
  )
}

export const App = () => {
  return (
    <div>
      <Counter />
      <Hover />
    </div>
  )
}
