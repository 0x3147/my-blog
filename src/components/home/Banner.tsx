'use client'

const Banner = () => {
  return (
    <div
      className="w-full h-[392px] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url(/banner.png)' }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">欢迎来到我的博客</h1>
        <p className="text-lg text-white/90 max-w-2xl">
          这里是我分享技术（一知半解）、生活（发牢骚）和思考的地方。让我们一起探索、学习和成长。
        </p>
      </div>
    </div>
  )
}

export default Banner
