import { Recipe } from '@/types/Recipe'
import { Box, Button, Card, TextField, Typography } from '@mui/material'
import { FormEvent, useState } from 'react'

type Props = {
  onCancel: () => void
  onSubmit: (recipe: Omit<Recipe, 'id'>) => void
  recipe?: Recipe
}

export const RecipeForm = ({ recipe, onCancel, onSubmit }: Props) => {
  const [title, setTitle] = useState(recipe?.title || '')
  const [description, setDescription] = useState(recipe?.description || '')
  const [img, setImg] = useState(recipe?.img || '')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit({
      title,
      description,
      img,
      ingredients: [{ name: 'test', quantity: 1 }],
      steps: [],
    })
  }

  return (
    <Card sx={{ mx: 'auto', width: 560, padding: 4 }}>
      <Typography variant="h4" fontWeight={600} paddingBottom={2}>
        Recipe Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" rowGap={2}>
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            value={title}
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            value={description}
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="image"
            label="Image"
            variant="outlined"
            value={img}
            fullWidth
            onChange={(e) => setImg(e.target.value)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button onClick={onCancel}>Cancel</Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </Card>
  )
}
