import { Greeting } from '@/Greeting'
import { List } from '@/List'

const labels = ['a', 'b', 'c']

export const App = () => {
  return (
    <div>
      <Greeting greeting label="everybody" endings={['!', '!', '1', '!']} />
      <List labels={labels} />
    </div>
  )
}
