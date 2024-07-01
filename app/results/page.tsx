import Link from 'next/link'
import ArrowLeftShort from '@/components/icons/ArrowLeftShort'
import getAllVotes from './get-all-votes'

export default async function Page() {
  const votes = await getAllVotes()

  return (
    <>
      <h1>Results</h1>

      <Link href='/'>
        <ArrowLeftShort />
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
