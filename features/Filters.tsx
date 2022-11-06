'use client'

import { TextField } from '@mui/material'
import { ThemeWrap } from './ThemeWrap'

export const Filters = () => {
  return (
    <ThemeWrap>
      <div>
        <TextField id='filled-basic' label='מאיפה' variant='filled' />
      </div>
    </ThemeWrap>
  )
}
