/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return (
    <a
      className="flex text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  )
}

export default CustomLink
