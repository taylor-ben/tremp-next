'use client'

import {
  Autocomplete,
  Button,
  IconButton,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { CityNameTranslate } from './post.interfaces'
import { ThemeWrap } from './ThemeWrap'
import { useCityParams } from './useSearchParams'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'

interface Props {
  toHebrew: CityNameTranslate
}

export const Filters = ({ toHebrew }: Props) => {
  const cityOptions: string[] = Object.values(toHebrew)

  const { params, setParams } = useCityParams(toHebrew)

  const swap = () => {
    const { cityFrom, cityTo } = params
    // setToParam(cityFrom)
    // setFromParam(cityTo)
  }

  return (
    <ThemeWrap>
      <div>
        <Autocomplete
          disablePortal
          autoHighlight
          value={params.cityFrom || null}
          options={cityOptions}
          sx={{ width: 300 }}
          onChange={(_, cityFrom) => setParams({ cityFrom })}
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
          value={params.cityTo || null}
          options={cityOptions}
          sx={{ width: 300 }}
          onChange={(_, cityTo) => setParams({ cityTo })}
          renderInput={(params) => (
            <TextField {...params} variant='filled' label='לאן' />
          )}
        />
        <ToggleButtonGroup
          color='primary'
          value={params.driver}
          exclusive
          onChange={(_, driver) => setParams({ driver })}
          aria-label='Driver'
        >
          <ToggleButton value={true}>נהגים</ToggleButton>
          <ToggleButton value={false}>טרמפיסטים</ToggleButton>
        </ToggleButtonGroup>

        <Button variant='contained'>חפש</Button>
      </div>
    </ThemeWrap>
  )
}
