import LatestPosts from '@/components/home/LatestPosts'
import Profile from '@/components/home/Profile'
import Banner from '@/components/home/Banner'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <Banner />
      <div className="container mx-auto px-4 py-8 flex gap-8">
        <LatestPosts />
        <Profile />
      </div>
    </main>
  )
}
