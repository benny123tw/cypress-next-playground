import { useCounter } from '@/hooks/useCounter'
import { cn } from '@/lib/utils'

export default function TheCounter() {
  const max = 10,
    min = -10
  const { count, inc, dec, reset } = useCounter(0, { max, min })
  const isMax = max === count
  const isMin = min === count

  return (
    <>
      <div className="grid grid-cols-3 gap-4 text-lg">
        <button
          data-test-id="btn-inc-1"
          className="flex items-center justify-center px-4 py-2 border border-violet-300 hover:bg-violet-500 hover:text-white transition-colors ease-linear rounded-md uppercase active:outline active:outline-2 active:outline-offset-2 active:outline-violet-500"
          onClick={() => inc()}
        >
          +
        </button>
        <div data-test-id="count" className="flex items-center justify-center">
          {count}
        </div>
        <button
          data-test-id="btn-dec-1"
          className="flex items-center justify-center px-4 py-2 border border-violet-300 hover:bg-violet-500 hover:text-white transition-colors ease-linear rounded-md uppercase active:outline active:outline-2 active:outline-offset-2 active:outline-violet-500"
          onClick={() => dec()}
        >
          -
        </button>
        <button
          data-test-id="btn-inc-5"
          className="flex items-center justify-center px-4 py-2 border border-violet-300 hover:bg-violet-500 hover:text-white transition-colors ease-linear rounded-md uppercase active:outline active:outline-2 active:outline-offset-2 active:outline-violet-500"
          onClick={() => inc(5)}
        >
          +5
        </button>
        <button
          data-test-id="btn-dec-5"
          className="flex items-center justify-center px-4 py-2 border border-violet-300 hover:bg-violet-500 hover:text-white transition-colors ease-linear rounded-md uppercase active:outline active:outline-2 active:outline-offset-2 active:outline-violet-500"
          onClick={() => dec(5)}
        >
          -5
        </button>
        <button
          data-test-id="btn-reset"
          className="flex items-center justify-center px-4 py-2 border border-violet-300 hover:bg-violet-500 hover:text-white transition-colors ease-linear rounded-md uppercase active:outline active:outline-2 active:outline-offset-2 active:outline-violet-500"
          onClick={() => reset()}
        >
          Res
        </button>
      </div>
      <span
        data-test-id="warn-text"
        className={cn({
          hidden: !isMax && !isMin,
          'text-red-500': isMin,
          'text-lime-500': isMax,
        })}
      >
        {isMax ? 'The value reached max' : isMin ? 'The value reached min' : ''}
      </span>
    </>
  )
}
