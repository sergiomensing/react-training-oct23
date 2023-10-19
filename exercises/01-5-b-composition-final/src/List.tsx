import { ListItem } from '@/ListItem'

type Props = {
  labels: string[]
}

export const List = ({ labels }: Props) => (
  <ul>
    {labels.map((label, index) => (
      <ListItem label={label} key={index} />
    ))}
  </ul>
)
