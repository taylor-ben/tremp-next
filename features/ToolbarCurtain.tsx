import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export const ToolbarCurtain = () => {
  return (
    <>
      {/* @ts-ignore */}
      <AppBar position='static' color='info' elevation={0}>
        <Toolbar color='primary' className=' h-14 ' variant='dense'>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>

          <div className=' flex grow items-center  '>
            <Typography className='!mb-1' variant='h5'>
              טרמפיאדה
            </Typography>
          </div>
          <Button color='inherit'>התחברות</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
