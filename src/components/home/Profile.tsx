'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWeixin, faQq } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className="w-[437px] h-[372px] bg-white rounded-lg shadow-md p-12">
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#FF6B6B] ring-offset-2">
            <Image
              src="/avatar.jpeg"
              alt="个人头像"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-bold text-gray-900">0x3147</div>
            <div className="text-[#FF6B6B] text-sm font-medium">
              一个普通的前端开发
            </div>
          </div>

          <div className="text-gray-600 text-sm text-center leading-relaxed">
            什么都想学一点的菜鸡，想要成为全栈高手
          </div>
        </div>

        <div className="flex gap-6">
          <Popover>
            <PopoverTrigger asChild>
              <div className="text-gray-500 hover:text-[#FF6B6B] transition-all duration-300 cursor-pointer hover:scale-110">
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </div>
            </PopoverTrigger>

            <PopoverContent className="w-64">
              <div className="flex flex-col gap-1">
                <div className="text-xs text-gray-500">GitHub</div>
                <a
                  className="text-sm text-gray-900 hover:text-[#FF6B6B] transition-colors break-all"
                  href="https://github.com/0x3147"
                  target="_blank"
                >
                  github.com/0x3147
                </a>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <div className="text-gray-500 hover:text-[#FF6B6B] transition-all duration-300 cursor-pointer hover:scale-110">
                <FontAwesomeIcon icon={faWeixin} className="w-5 h-5" />
              </div>
            </PopoverTrigger>

            <PopoverContent className="w-64">
              <div className="flex flex-col gap-1">
                <div className="text-xs text-gray-500">微信号</div>
                <div className="text-sm text-gray-900">babel_k</div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <div className="text-gray-500 hover:text-[#FF6B6B] transition-all duration-300 cursor-pointer hover:scale-110">
                <FontAwesomeIcon icon={faQq} className="w-5 h-5" />
              </div>
            </PopoverTrigger>

            <PopoverContent className="w-64">
              <div className="flex flex-col gap-1">
                <div className="text-xs text-gray-500">QQ</div>
                <div className="text-sm text-gray-900">475842727</div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <div className="text-gray-500 hover:text-[#FF6B6B] transition-all duration-300 cursor-pointer hover:scale-110">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </div>
            </PopoverTrigger>

            <PopoverContent className="w-64">
              <div className="flex flex-col gap-1">
                <div className="text-xs text-gray-500">邮箱</div>
                <div className="text-sm text-gray-900">radeonk@foxmail.com</div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default Profile
