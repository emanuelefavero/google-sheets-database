import Link from 'next/link'
import ArrowLeftShort from '@/components/icons/ArrowLeftShort'
import getAllVotes from './get-all-votes'

export default async function Page() {
  const votes = await getAllVotes()

  return (
    <>
      <h1>Results</h1>

      <Link
        href='/'
        className='text-primary flex items-center max-w-fit pr-2 py-0 mb-4 rounded-lg hover:text-primary-dark active:scale-90 group
          transition-transform duration-100 ease-in-out'
      >
        <ArrowLeftShort className='w-7 h-7 fill-violet-500 group-hover:fill-violet-600 group-active:scale-90' />
        Back
      </Link>
      <ul className='mb-4 max-w-72'>
        {votes.results.map((result, index) => {
          const { value, count, percent, max } = result

          return (
            <li key={index} className='py-2 rounded-lg'>
              <div className='mb-2 w-full flex justify-between'>
                <span className='font-medium text-text-secondary'>
                  {value} &nbsp;
                </span>
                <span className='font-bold'>{` ${percent}%`}</span>
              </div>

              <div
                className='relative flex w-40 h-1 bg-violet-500 bg-opacity-25 rounded-full overflow-hidden'
                role='progressbar'
                aria-valuenow={count}
                aria-valuemin={0}
                aria-valuemax={max}
              >
                <div
                  className='relative flex flex-col justify-center rounded-full overflow-hidden bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500'
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </li>
          )
        })}
      </ul>
      <p> {`${votes.total} votes`}</p>
    </>
  )
}
