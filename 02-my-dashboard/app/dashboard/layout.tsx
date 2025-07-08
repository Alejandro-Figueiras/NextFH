import Sidebar from "../components/Sidebar"

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='bg-slate-100 w-screen h-screen antialiased'>
			<div className='flex flex-row w-screen'>
				<Sidebar />
        <div className="w-full overflow-y-scroll p-4">
          {children}
        </div>
			</div>
		</div>
	)
}
