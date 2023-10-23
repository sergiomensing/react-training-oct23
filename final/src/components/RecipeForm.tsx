import { Recipe } from '@/types/Recipe'
import { Alert, Box, Button, Card, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type Props = {
  onCancel: () => void
  onSubmit: (model: FormModel) => Promise<void | string>
  recipe?: Recipe
}

export type FormModel = {
  title: string
  description: string
  img: string
}

export const RecipeForm = ({ recipe, onCancel, ...props }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormModel>({
    values: recipe
      ? {
          title: recipe.title,
          description: recipe.description,
          img: recipe.img,
        }
      : undefined,
  })

  console.log(errors)

  const onSubmit = async (data: FormModel) => {
    setIsSubmitting(true)
    const response = await props.onSubmit(data)
    if (response) {
      setError('root', { message: response })
    }
    setIsSubmitting(false)
  }

  return (
    <Card sx={{ mx: 'auto', width: 560, padding: 4 }}>
      <Typography variant="h4" fontWeight={600} paddingBottom={2}>
        Recipe Form
      </Typography>
      {errors.root && (
        <Box paddingBottom={2}>
          <Alert severity="error">{errors.root.message}</Alert>
        </Box>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" rowGap={2}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            error={Boolean(errors.title)}
            helperText={errors.title?.message}
            {...register('title', { required: 'This field is required' })}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            error={Boolean(errors.description)}
            helperText={errors.description?.message}
            {...register('description')}
          />
          <TextField
            label="Image"
            variant="outlined"
            fullWidth
            error={Boolean(errors.img)}
            helperText={errors.img?.message}
            {...register('img')}
          />
          <Box display="flex" justifyContent="space-between">
            <Button onClick={onCancel}>Cancel</Button>
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Box>
        </Box>
      </form>
    </Card>
  )
}
