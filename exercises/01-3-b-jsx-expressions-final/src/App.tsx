const greeting = true
const label = 'World'
const endings = ['!', '!', '1', '!']

export const App = () => {
  return (
    <div>
      {greeting ? 'Hello' : 'Goodbye'} {label ?? 'Placeholder'}
      {endings.map((ending, index) => (
        <span key={index}>{ending}</span>
      ))}
    </div>
  )
}
