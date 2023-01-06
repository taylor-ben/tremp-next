import { useEffect } from 'react'

export const useScroll = (onScroll: () => void) => {
  useEffect(() => {
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])
}

export const useBackgroundColor = () => {
  const pass = 160
  let top = true
  useScroll(() => {
    const { scrollY } = window
    if (scrollY > pass && top) {
      top = false
      document.body.style.background = '#3d3c38'
    }
    if (scrollY <= pass && !top) {
      top = true
      document.body.style.background = '#b1ded5'
    }
  })
}
