export function SectionCards() {
  return (
    <section className="grid gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-6 w-full max-w-7xl mx-auto">
      <StatCard label="Total Sales" value="$1,249.00" icon={<DollarIcon />} />
      <StatCard label="Total Orders" value="234" icon={<OrderIcon />} />
      <StatCard label="Avg. Order Value" value="$12.45" icon={<AvgIcon />} />
      <StatCard label="Active Tables" value="8" icon={<TableIcon />} />
    </section>
  )
}

function StatCard({ label, value, icon }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <h3 className="mt-1 text-2xl font-bold text-gray-900">{value}</h3>
        </div>
        <div className="rounded-full bg-primary/10 p-2 text-primary">
          {icon}
        </div>
      </div>
    </div>
  )
}

function DollarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  )
}

function OrderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="6" height="20" x="4" y="2" rx="2"></rect>
      <rect width="6" height="12" x="14" y="10" rx="2"></rect>
    </svg>
  )
}

function AvgIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m2 12 5.25 5 2.625-5H16l-3.125 5H18l3-6"></path>
      <path d="m22 12-5.25-5-2.625 5H8l3.125-5H6l-3 6"></path>
    </svg>
  )
}

function TableIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7h18M3 11h18M3 15h18M3 19h18"></path>
    </svg>
  )
}

export default SectionCards; 