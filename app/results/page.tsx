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
      <ul>
        {votes.results.map((result, index) => {
          const { value, count, percent, max } = result

          return (
            <li key={index}>
              <div>
                <span>{value}</span>
                <span>{` ${percent}%`}</span>
              </div>
              <progress value={count} max={max} />
            </li>
          )
        })}
        <p> {`${votes.total} votes`}</p>
      </ul>
    </>
  )
}
