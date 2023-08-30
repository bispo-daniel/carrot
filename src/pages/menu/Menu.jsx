import { Button } from '@mui/material'
import Carrot from '../../assets/Carrot.png'
import { useNavigate } from 'react-router-dom'

export const Menu = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token');
    setTimeout(() => navigate(0), 500);
  }

  return (
    <main className='w-full min-h-screen flex flex-col items-center justify-center'>
      <img src={Carrot} alt="" srcSet="" className='animate-pulse'/>

      <Button variant="contained"
            sx={{width: '50%', height: '50px', maxWidth: '240px'}}
            onClick={() => logout()}
      >
            logout
      </Button>
    </main>
  )
}
