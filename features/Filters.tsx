'use client'

import {
  Autocomplete,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { useQueryParam } from 'use-query-params'
import { IsDriver } from './post.interfaces'
import { ThemeWrap } from './ThemeWrap'

export const Filters = () => {
  const driverChange = (
    event: React.MouseEvent<HTMLElement>,
    driverValue: IsDriver
  ) => {
    setDriver(driverValue)
  }

  const cityOptions = [{ label: 'yes' }]

  const [driver, setDriver] = useQueryParam('driver')

  return (
    <ThemeWrap>
      <div>
        <Autocomplete
          disablePortal
          options={cityOptions}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} variant='filled' label='מאיפה' />
          )}
        />
        <Autocomplete
          disablePortal
          options={cityOptions}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} variant='filled' label='לאן' />
          )}
        />
        <ToggleButtonGroup
          color='primary'
          value={driver}
          exclusive
          onChange={driverChange}
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
