type Props = {
  // A type with a question mark after it means that the property is optional
  greeting?: boolean
  label?: string
  endings: string[]
}

export const App = ({ greeting, label, endings }: Props) => {
  return (
    <div>
      {greeting ? 'Hello' : 'Goodbye'} {label ?? 'Placeholder'}
      {endings.map((ending) => (
        <span>{ending}</span>
      ))}
    </div>
  )
}
