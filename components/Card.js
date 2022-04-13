import Image from './Image'
import Link from './Link'
import CustomLink from './Link'

const Card = ({ title, description, imgSrc, sourceCode, liveLink }) => {
  return (
    <div className="m-4 mr-2 flex rounded-lg bg-white p-2 pl-1 shadow dark:bg-gray-800">
      <div className="w-32 flex-none md:w-60">
        {imgSrc && (
          <Image
            alt={title}
            src={imgSrc}
            className="absolute inset-0 h-48 w-48 rounded-lg object-cover"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex flex-wrap">
        <h1 className="ml-2 mt-2 flex-auto text-xl font-semibold dark:text-gray-50">{title}</h1>
        <div className="mt-2 ml-2 w-full flex-none break-words text-sm font-medium text-gray-500 dark:text-gray-300">
          {description}
        </div>
        <div className="mt-2 mb-6 ml-2 flex text-gray-700 dark:text-gray-300">
          <div className="mb-4 flex space-x-2 text-sm font-medium">
            {sourceCode && (
              <CustomLink href={sourceCode}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Source Code
              </CustomLink>
            )}
            {liveLink && (
              <CustomLink href={liveLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto mr-1 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Live Link
              </CustomLink>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
