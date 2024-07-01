import config from '@/utils/poll-config'

function getRandomWidthClass() {
  const randomWidths = [
    'w-8',
    'w-12',
    'w-16',
    'w-20',
    'w-24',
    'w-28',
    'w-32',
    'w-36',
    'w-40',
  ]
  return randomWidths[Math.floor(Math.random() * randomWidths.length)]
}

export default function Loading() {
  const dataLength = config.length
  const arrayOfDataLength = Array.from({ length: dataLength })

  return (
    <>
      <h1>Results</h1>

      <div
        className='text-primary flex items-center max-w-fit pr-2 py-0 mb-4 rounded-lg hover:text-primary-dark active:scale-90 group
          transition-transform duration-100 ease-in-out'
      >
        Back
      </div>
      <ul className='mb-4 max-w-72'>
        {arrayOfDataLength.map((_, index) => {
          return (
            <li key={index} className='py-2 rounded-lg'>
              <div className='mb-2 w-full flex justify-between'>
                <span
                  className={`${getRandomWidthClass()} py-1 font-medium text-text-secondary rounded-lg bg-violet-500 bg-opacity-25 animate-pulse`}
                ></span>
                <span className='font-bold animate-pulse bg-violet-500 bg-opacity-25 px-2 rounded-lg'>
                  &nbsp;
                </span>
              </div>

              <div
                className='relative flex w-40 h-1 bg-violet-500 bg-opacity-25 rounded-full overflow-hidden animate-pulse'
                role='progressbar'
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={0}
              >
                <div
                  className='relative flex flex-col justify-center rounded-full overflow-hidden bg-primary text-xs text-white text-center whitespace-nowrap transition duration-500'
                  style={{ width: `${0}%` }}
                ></div>
              </div>
            </li>
          )
        })}
      </ul>
      <p className='animate-pulse w-20 h-4 bg-violet-500 bg-opacity-25 rounded-lg'></p>
    </>
  )
}
