import Sidebar from "../components/Sidebar"

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='bg-slate-100 antialiased'>
			<div className='flex flex-row'>
				<Sidebar />
        <div className="w-full p-4">
          {children}
        </div>
			</div>
		</div>
	)
}
