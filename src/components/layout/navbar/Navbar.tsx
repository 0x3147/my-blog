'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { name: '首页', href: '/' },
    { name: '技术博客', href: '/posts' },
    { name: '生活随笔', href: '/life' },
  ]

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
          <nav className="flex items-center space-x-8 ml-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-[#FF6B6B]'
                    : 'text-gray-500 hover:text-[#FF6B6B]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4 ml-auto">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-gray-900"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
