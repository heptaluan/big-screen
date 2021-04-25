import { useEffect, useState, useCallback } from 'react'

export default function useWindowSize() {
  const computedStyle = size => {
    let scale = 0.875,
      origin = `0 0`,
      top = null,
      left = null,
      leftCenter = `-${Math.abs((1920 - size.width) / 2)}px`,
      topCenter = `-${Math.abs((1080 - size.height) / 2)}px`,
      wScale = size.width / 1920,
      hScale = size.height / 1080
    if (size.width >= 1680 && size.height >= 945) {
      scale = hScale
      origin = `center 0`
      top = `0px`
      left = leftCenter
    } else if (size.width >= 1680 && size.height < 945) {
      scale = hScale
      origin = `center 0`
      top = `0px`
      left = leftCenter
    } else if (size.width < 1680 && size.height >= 945) {
      scale = wScale
      origin = `0 center`
      top = topCenter
      left = `0px`
    } else if (size.width < 1680 && size.height < 945) {
      scale = wScale
      origin = `0 center`
      top = topCenter
      left = `0px`
    }
    return {
      scale: `scale(${scale})`,
      origin: origin,
      top: top,
      left: left,
    }
  }

  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  const styles = computedStyle(size)

  return styles
}
