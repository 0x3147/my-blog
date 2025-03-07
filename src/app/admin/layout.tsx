import { AntdRegistry } from '@ant-design/nextjs-registry'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <AntdRegistry>{children}</AntdRegistry>
    </div>
  )
}
