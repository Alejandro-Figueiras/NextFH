'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  path: string
  text: string
}

const ActiveLink = ({path, text}: Props) => {
  const pathName = usePathname()

  return (
    <Link className={`hover:underline hover:text-blue-400 transition-all ${(pathName == path) && 'text-blue-500'}`} href={path}>{text}</Link>
  )
}

export default ActiveLink