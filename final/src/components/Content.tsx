import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'

export const Content = ({ children }: PropsWithChildren) => {
  return <Box p={2}>{children}</Box>
}
