type Props = {
  greeting?: boolean
  label?: string
  endings: string[]
}

export const Greeting = ({ greeting, label, endings }: Props) => (
  <h1>
    {greeting ? 'Hello' : 'Goodbye'} {label ?? 'Placeholder'}
    {endings.map((ending) => (
      <span>{ending}</span>
    ))}
  </h1>
)
