'use client'

import { useState } from 'react'
import config from '@/utils/poll-config'
import { useRouter } from 'next/navigation'

import submitVote from './submit-vote'

interface Props {
  searchParams: {
    error: boolean
  }
}

export default function Page({ searchParams }: Props) {
  const router = useRouter()
  const { error } = searchParams
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleClick = (id: string) => {
    submitVote(id)
    setIsSubmitting(true)
  }

  return (
    <>
      <h1 className='font-bold text-4xl mb-4'>Vote</h1>

      <ul>
        {config.map((item, index) => {
          const { name, id } = item

          return (
            <li key={index} className='mb-2'>
              <button onClick={() => handleClick(id)} disabled={isSubmitting}>
                <span>{name}</span>
              </button>
            </li>
          )
        })}

        <li>
          <button onClick={() => router.push('/results')} className=''>
            Just see results
          </button>
        </li>

        {error ? <p>Server error</p> : null}
      </ul>
    </>
  )
}
