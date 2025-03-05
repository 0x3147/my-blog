'use client'

import Link from 'next/link'
import { Clock, Eye, Heart } from 'lucide-react'

interface Post {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  likes: number
  views: number
}

const mockPosts: Post[] = [
  {
    id: '1',
    title: '使用 Next.js 13 构建现代化博客',
    description:
      '探索 Next.js 13 的新特性，包括 App Router、Server Components 等，并学习如何构建一个现代化的博客系统。',
    date: '2024-03-04',
    readTime: '10 min',
    likes: 128,
    views: 1024,
  },
  {
    id: '2',
    title: 'Tailwind CSS 最佳实践指南',
    description:
      '深入探讨 Tailwind CSS 的使用技巧，包括响应式设计、暗色模式、组件抽象等实用技巧。',
    date: '2024-03-03',
    readTime: '8 min',
    likes: 96,
    views: 856,
  },
  {
    id: '3',
    title: '我的编程学习之路',
    description:
      '分享我从零开始学习编程的经历，包括学习方法、资源推荐、以及一些实用的学习技巧。',
    date: '2024-03-02',
    readTime: '12 min',
    likes: 156,
    views: 1234,
  },
]

const LatestPosts = () => {
  return (
    <section className="w-[906px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">最新文章</h2>
        <Link href="/posts" className="text-[#FF6B6B] hover:text-[#FF6B6B]/80">
          查看全部 →
        </Link>
      </div>

      <div className="space-y-6">
        {mockPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Link href={`/posts/${post.id}`} className="flex p-6 gap-6">
              <div className="w-[280px] h-[186px] flex-shrink-0 rounded-lg bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] group-hover:from-[#FF8E8E] group-hover:to-[#FF6B6B] transition-colors duration-300" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#FF6B6B] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LatestPosts
