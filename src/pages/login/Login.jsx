import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Carrot from '../../assets/Carrot.png'
import auth from './api/auth'
import { useAtom } from 'jotai'
import { user } from '../../atoms'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const [credentials, setCredentials] = useState(
    {
      email: '',
      password: ''
    }
  )

  const handleChange = (e) => {
    const {name, value} = e.target;

    setCredentials((prevCredentials) => (
      {
        ...prevCredentials,
        [name]: value
      }
    ))
  }

  const handleSubmit = async (e) => {
    e?.preventDefault();

    try {
      const post = await auth(credentials);

      post.then((response) => {
        // setUserAtom(response.token)
        localStorage.setItem('token', response.token)
        setTimeout(() => navigate(0), 500)
      })

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className='w-[300px] h-screen flex flex-col items-center gap-16 pt-4'>
      <img src={Carrot} alt="" srcSet="" className='w-[80px]'/>

      <form action="" method="post" className='flex flex-col items-center justify-evenly h-[225px] w-full' onSubmit={e => handleSubmit(e)}>
        <TextField sx={{width: '100%'}} id="outlined-basic" label="E-Mail" variant="outlined" name='email' onChange={e => handleChange(e)}/>

        <FormControl sx={{width: '100%' }} variant="outlined" onChange={e => handleChange(e)}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name='password'
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button variant="contained"
            sx={{width: '100%', height: '50px'}}
            type='submit'
          >
            login
          </Button>
      </form>
    </main>
  )
}