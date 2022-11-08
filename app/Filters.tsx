'use client'

import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { City } from './post.interfaces'
import { ThemeWrap } from './ThemeWrap'

interface Props {
  // cities: City[]
}

export const Filters: FC<Props> = () => {
  const [driver, setDriver] = useState<boolean>()
  const handleChange = () => {}
  const driverChange = (
    event: React.MouseEvent<HTMLElement>,
    driverValue: boolean
  ) => {
    setDriver(driverValue)
  }

  // const cityOptions = cities.map(([cityHe, cityEn]) => ({ label: cityHe }))
  const cityOptions = [{ label: 'yes' }]

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
          <ToggleButton value={true}>נהגים</ToggleButton>
          <ToggleButton value={false}>טרמפיסטים</ToggleButton>
        </ToggleButtonGroup>

        <Link
          href={{
            query: { driver: driver },
          }}
        >
          <Button variant='contained'>חפש</Button>
        </Link>
      </div>
    </ThemeWrap>
  )
}
