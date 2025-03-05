'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWeixin, faQq } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const Profile = () => {
  return (
    <div className="w-[437px] h-[372px] bg-white rounded-lg shadow-md p-12">
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center gap-4">
          <div className="text-xl font-bold text-gray-900 mb-2">张三</div>

          <div className="text-[#FF6B6B] text-sm mb-4">全栈开发工程师</div>

          <div className="text-gray-600 text-sm text-center mb-6">
            热爱编程和技术分享，专注于前端开发和用户体验设计。喜欢探索新技术，乐于分享学习经验。
          </div>
        </div>

        <div className="flex gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <div className="text-gray-500 hover:text-[#FF6B6B] transition-colors cursor-pointer">
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
              <div className="text-gray-500 hover:text-[#FF6B6B] transition-colors cursor-pointer">
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
              <div className="text-gray-500 hover:text-[#FF6B6B] transition-colors cursor-pointer">
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
              <div className="text-gray-500 hover:text-[#FF6B6B] transition-colors cursor-pointer">
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
