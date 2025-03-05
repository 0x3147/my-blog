'use client'

import Link from 'next/link'
import { Clock, Eye, Heart, RefreshCw } from 'lucide-react'
import { useState } from 'react'

interface Post {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  likes: number
  views: number
}

const allPosts: Post[] = [
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
  {
    id: '4',
    title: 'React Hooks 使用技巧总结',
    description:
      '总结 React Hooks 的常用技巧和最佳实践，帮助你更好地使用 Hooks 开发 React 应用。',
    date: '2024-03-01',
    readTime: '15 min',
    likes: 89,
    views: 678,
  },
  {
    id: '5',
    title: 'TypeScript 高级特性详解',
    description:
      '深入探讨 TypeScript 的高级特性，包括泛型、装饰器、高级类型等，提升你的 TypeScript 技能。',
    date: '2024-02-28',
    readTime: '20 min',
    likes: 145,
    views: 987,
  },
  {
    id: '6',
    title: '前端性能优化实践',
    description:
      '分享前端性能优化的各种技巧和最佳实践，包括代码分割、懒加载、缓存策略等。',
    date: '2024-02-27',
    readTime: '18 min',
    likes: 112,
    views: 765,
  },
]

const LatestPosts = () => {
  const [posts, setPosts] = useState<Post[]>(allPosts.slice(0, 3))

  const refreshPosts = () => {
    // 随机打乱文章顺序并取前3篇
    const shuffled = [...allPosts].sort(() => Math.random() - 0.5)
    setPosts(shuffled.slice(0, 3))
  }

  return (
    <section className="w-[906px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">最新文章</h2>
        <button
          onClick={refreshPosts}
          className="flex items-center gap-1 text-[#FF6B6B] hover:text-[#FF6B6B]/80 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>换一批</span>
        </button>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
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
