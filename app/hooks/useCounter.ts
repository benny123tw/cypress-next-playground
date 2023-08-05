import { useRef, useCallback, useState } from 'react'

interface Options {
  min?: number
  max?: number
}

export const useCounter = (initial: number = 0, options: Options = {}) => {
  const _initial = useRef(initial)
  const [count, setCount] = useState(_initial.current)

  const { max = Number.POSITIVE_INFINITY, min = Number.NEGATIVE_INFINITY } = options

  const set = useCallback(
    (value: number) => {
      setCount(Math.max(min, Math.min(max, value)))
    },
    [max, min],
  )

  const inc = useCallback(
    (value: number = 1) => {
      setCount((prevCount) => Math.min(max, prevCount + value))
    },
    [max],
  )

  const dec = useCallback(
    (value: number = 1) => {
      setCount((prevCount) => Math.max(min, prevCount - value))
    },
    [min],
  )

  const reset = useCallback(
    (value: number = initial) => {
      _initial.current = value
      setCount(initial)
    },
    [initial],
  )

  return {
    count,
    set,
    inc,
    dec,
    reset,
  }
}
