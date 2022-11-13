'use client'

import {
  Autocomplete,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { useMemo } from 'react'
import { useQueryParam } from 'use-query-params'
import { CityNameTranslate, IsDriver } from './post.interfaces'
import { ThemeWrap } from './ThemeWrap'
import { useCityParams } from './useSearchParams'

interface Option {
  label: string
  value: string
}

interface Props {
  mapToHebrew: CityNameTranslate
}

export const Filters = ({ mapToHebrew }: Props) => {
  const cityOptions: Option[] = useMemo(
    () =>
      Object.entries(mapToHebrew).map(([english, hebrew]) => ({
        label: hebrew,
        value: english,
      })),
    [mapToHebrew]
  )

  const { params, setDriverParam, setToParam, setFromParam } =
    useCityParams(mapToHebrew)

  return (
    <ThemeWrap>
      <div>
        <Autocomplete
          disablePortal
          autoHighlight
          options={cityOptions}
          sx={{ width: 300 }}
          onChange={(_, option) => setFromParam(option?.value as string)}
          renderInput={(params) => (
            <TextField {...params} variant='filled' label='מאיפה' />
          )}
        />
        <Autocomplete
          disablePortal
          autoHighlight
          options={cityOptions}
          sx={{ width: 300 }}
          onChange={(_, option) => setToParam(option?.value as string)}
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
