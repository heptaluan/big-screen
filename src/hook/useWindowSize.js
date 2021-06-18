import { useEffect, useState, useCallback } from 'react'

export default function useWindowSize() {
  const computedStyle = size => {
    let scale = 0.875,
      origin = `0 0`,
      top = null,
      left = null,
      leftCenter = Math.abs((1920 - size.width) / 2),
      topCenter = Math.abs((1080 - size.height) / 2),
      wScale = size.width / 1920,
      hScale = size.height / 1080
    if (size.width >= 1680 && size.height >= 945) {
      scale = hScale
      origin = `center 0`
      top = `0`
      left = hScale > 0.875 ? `${leftCenter}px` : `-${leftCenter}px`
    } else if (size.width >= 1680 && size.height < 945) {
      scale = hScale
      origin = `center 0`
      top = `0`
      left = hScale > 0.875 ? `${leftCenter}px` : `-${leftCenter}px`
    } else if (size.width < 1680 && size.height >= 945) {
      scale = wScale
      origin = `0 center`
      top = wScale > 0.875 ? `${topCenter}px` : `-${topCenter}px`
      left = `0`
    } else if (size.width < 1680 && size.height < 945) {
      scale = wScale
      origin = `0 center`
      top = wScale > 0.875 ? `${topCenter}px` : `-${topCenter}px`
      left = `0`
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
