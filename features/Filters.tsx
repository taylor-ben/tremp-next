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

import Card from '@mui/material/Card'

import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'

interface Props {
  toHebrew: CityNameTranslate
}

export const Filters = ({ toHebrew }: Props) => {
  const cityOptions: string[] = Object.values(toHebrew)

  const { params, setParams } = useCityParams(toHebrew)

  const swap = () => {
    setParams({
      cityFrom: params.cityTo,
      cityTo: params.cityFrom,
    })
  }

  return (
    <ThemeWrap>
      <div className='grid justify-center'>
        <Card className='grid grid-rows-2 gap-4 p-4 md:flex'>
          <div className='grid grid-cols-hug w-min items-center gap-1'>
            <Autocomplete
              disablePortal
              autoHighlight
              value={params.cityFrom || null}
              options={cityOptions}
              sx={{ width: 200 }}
              onChange={(_, cityFrom) => setParams({ cityFrom })}
              renderInput={(params) => (
                <TextField {...params} variant='outlined' label='מאיפה' />
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
              sx={{ width: 200 }}
              onChange={(_, cityTo) => setParams({ cityTo })}
              renderInput={(params) => (
                <TextField {...params} variant='outlined' label='לאן' />
              )}
            />
          </div>
          <div className='grid grid-flow-col gap-9 '>
            <ToggleButtonGroup
              className='w-80 !grid grid-cols-2'
              color='primary'
              value={params.driver}
              exclusive
              onChange={(_, driver) => setParams({ driver })}
              aria-label='Driver'
            >
              <ToggleButton value={true} className='flex gap-1'>
                <DirectionsCarFilledIcon />
                נהגים
              </ToggleButton>
              <ToggleButton value={false} className='flex gap-1'>
                <ThumbUpAltIcon className='-rotate-90' />
                טרמפיסטים
              </ToggleButton>
            </ToggleButtonGroup>

            <Button variant='contained'>חיפוש</Button>
          </div>
        </Card>
      </div>
    </ThemeWrap>
  )
}
/*



*/
