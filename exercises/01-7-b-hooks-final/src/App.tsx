import { useEffect, useState } from 'react'

const useHover = (initialState = false) => {
  const [isHovering, setIsHover] = useState(initialState)
  const onEnter = () => setIsHover(true)
  const onLeave = () => setIsHover(false)

  useEffect(() => {
    window.document.title = isHovering
      ? 'App is hovering'
      : 'App is not hovering'
  }, [isHovering])

  return {
    isHovering,
    onEnter,
    onLeave,
  }
}

export const Hover = () => {
  const { onEnter, onLeave, isHovering } = useHover()

  return (
    <div data-cy="HoverComponent">
      <h3 onMouseEnter={onEnter} onMouseLeave={onLeave}>
        Hover over me!
      </h3>
      {isHovering && <p>👋</p>}
    </div>
  )
}

export const Hover2 = () => {
  const { isHovering, onEnter, onLeave } = useHover()

  return (
    <div data-cy="Hover2Component">
      <h3
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{ background: isHovering ? 'red' : 'white' }}
      >
        You can hover over me as well!
      </h3>
    </div>
  )
}

export const App = () => {
  return (
    <div>
      <Hover />
      <Hover2 />
    </div>
  )
}
