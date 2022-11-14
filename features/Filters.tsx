'use client'

import {
  Autocomplete,
  Button,
  IconButton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { useMemo } from 'react'
import { useQueryParam } from 'use-query-params'
import { CityNameTranslate, IsDriver } from './post.interfaces'
import { ThemeWrap } from './ThemeWrap'
import { useCityParams } from './useSearchParams'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'

interface Props {
  toHebrew: CityNameTranslate
}

export const Filters = ({ toHebrew }: Props) => {
  const cityOptions: string[] = Object.values(toHebrew)

  const { params, setDriverParam, setToParam, setFromParam } =
    useCityParams(toHebrew)

  const swap = () => {
    const { cityFrom, cityTo } = params
    setToParam(cityFrom)
    setFromParam(cityTo)
  }

  return (
    <ThemeWrap>
      <div>
        <Autocomplete
          disablePortal
          autoHighlight
          options={cityOptions}
          sx={{ width: 300 }}
          onChange={(_, option) => setFromParam(option as string)}
          renderInput={(params) => (
            <TextField {...params} variant='filled' label='מאיפה' />
          )}
        />
        <IconButton aria-label='delete' color='primary' onClick={swap}>
          <SwapHorizIcon />
        </IconButton>
        <Autocomplete
          disablePortal
          autoHighlight
          options={cityOptions}
          sx={{ width: 300 }}
          onChange={(_, option) => setToParam(option as string)}
          renderInput={(params) => (
            <TextField {...params} variant='filled' label='לאן' />
          )}
        />
        <ToggleButtonGroup
          color='primary'
          value={params.driver}
          exclusive
          onChange={(_, driverValue) => setDriverParam(driverValue)}
          aria-label='Driver'
        >
          <ToggleButton value={'true'}>נהגים</ToggleButton>
          <ToggleButton value={'false'}>טרמפיסטים</ToggleButton>
        </ToggleButtonGroup>

        <Button variant='contained'>חפש</Button>
      </div>
    </ThemeWrap>
  )
}
