'use client'

import { useCounter } from '@/hooks/useCounter'
import { cn } from '@/lib/utils'

export default function Counter() {
  const max = 10,
    min = -10
  const { count, inc, dec, reset } = useCounter(0, { max, min })
  const isMax = max === count
  const isMin = min === count

  return (
    <>
      <div className="grid grid-cols-3 gap-4 text-lg">
        <button data-test-id="btn-inc-1" className="btn btn-outline" onClick={() => inc()}>
          +
        </button>
        <div data-test-id="count" className="flex items-center justify-center">
          {count}
        </div>
        <button data-test-id="btn-dec-1" className="btn btn-outline" onClick={() => dec()}>
          -
        </button>
        <button data-test-id="btn-inc-5" className="btn btn-outline" onClick={() => inc(5)}>
          +5
        </button>
        <button data-test-id="btn-dec-5" className="btn btn-outline" onClick={() => dec(5)}>
          -5
        </button>
        <button data-test-id="btn-reset" className="btn btn-outline" onClick={() => reset()}>
          Res
        </button>
      </div>
      <span
        data-test-id="warn-text"
        className={cn({
          hidden: !isMax && !isMin,
          'text-error': isMin,
          'text-success': isMax,
        })}
      >
        {isMax ? 'The value reached max' : isMin ? 'The value reached min' : ''}
      </span>
    </>
  )
}
