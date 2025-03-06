import Link from 'next/link'
import { Suspense } from 'react'
import NavLink from './NavLink'

const navItems = [
  { name: '首页', href: '/' },
  { name: '技术博客', href: '/posts' },
  { name: '生活随笔', href: '/life' },
]

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-[#FF6B6B]">
              My Blog
            </Link>
          </div>

          {/* Navigation */}
          <nav className="items-center space-x-8 ml-8 hidden md:flex">
            <Suspense fallback={null}>
              {navItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </Suspense>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
