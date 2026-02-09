import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './schema'
import './App.css'

function App() {
  const { register, handleSubmit, formState: { errors }} = useForm<FormValues>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: formValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}
      <input {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}
      <button type='submit'>送信</button>
    </form>
  )
}

export default App
