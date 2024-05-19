
export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
            {children}
        </div>
    )
  }