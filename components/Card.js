import Image from './Image'
import Link from './Link'

const ExternalLink = ({ href, children }) => (
  <a
    className="flex text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

const Card = ({ title, description, imgSrc, sourceCode, liveLink }) => {
  return (
    <div className="flex m-4 mr-2 p-2 pl-1 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="flex-none w-32 md:w-60">
        {imgSrc && (
          <Image
            alt={title}
            src={imgSrc}
            className="absolute rounded-lg inset-0 object-cover w-48 h-48"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-xl font-semibold dark:text-gray-50 ml-2 mt-2">{title}</h1>
        <div className="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2 ml-2 break-words">
          {description}
        </div>
        <div className="flex mt-2 mb-6 text-gray-700 dark:text-gray-300 ml-2">
          <div className="flex space-x-2 mb-4 text-sm font-medium">
            {sourceCode && (
              <ExternalLink href={sourceCode}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-1"
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
              </ExternalLink>
            )}
            {liveLink && (
              <ExternalLink href={liveLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-1 mx-auto"
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
              </ExternalLink>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
