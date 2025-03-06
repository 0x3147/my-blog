'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  item: {
    name: string
    href: string
  }
}

const NavLink = ({ item }: NavLinkProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={item.href}
      className={`text-sm font-medium transition-colors ${
        pathname === item.href
          ? 'text-[#FF6B6B]'
          : 'text-gray-500 hover:text-[#FF6B6B]'
      }`}
    >
      {item.name}
    </Link>
  )
}

export default NavLink
