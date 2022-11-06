'use client'

import { TextField } from '@mui/material'
import { ThemeWrap } from './ThemeWrap'

export const Filters = () => {
  return (
    <ThemeWrap>
      <div dir='rtl'>
        <TextField dir='rtl' id='filled-basic' label='מאיפה' variant='filled' />
      </div>
    </ThemeWrap>
  )
}
