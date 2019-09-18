import { useState, useEffect } from 'react'


const useAnimateOnScrolled = () => {
  const [hasScrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    // get the data of where the user has scrolled
    const scrollTop = window.pageYOffset
    scrollTop > 50
      ? setScrolled(true)
      : setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return hasScrolled
}

export default useAnimateOnScrolled;
