import LatestPosts from '@/components/home/LatestPosts'
import Profile from '@/components/home/Profile'
import Banner from '@/components/home/Banner'
import Navbar from '@/components/layout/navbar'

export default function Frontend() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <Banner />
      <div className="container mx-auto px-4 py-8 flex gap-8">
        <LatestPosts />
        <Profile />
      </div>
    </main>
  )
}
