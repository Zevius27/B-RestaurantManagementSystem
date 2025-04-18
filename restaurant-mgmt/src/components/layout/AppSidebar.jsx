import { useSidebar } from "../ui/sidebar"

export function AppSidebar({ variant = "default", activeSection = "home", onNavigate }) {
  const { isOpen, setIsOpen } = useSidebar()
  
  const handleNavigate = (section) => {
    if (onNavigate) {
      onNavigate(section)
    }
    if (window.innerWidth < 768) {
      setIsOpen(false)
    }
  }
  
  return (
    <aside 
      className={`
        ${variant === "inset" ? "border-r border-gray-200" : ""} 
        h-full w-64 flex-shrink-0 bg-white z-20
        fixed md:relative inset-y-0 left-0 
        transform ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} 
        transition-transform duration-200 ease-in-out
      `}
    >
      <div className="flex h-16 items-center border-b border-gray-200 px-4">
        <h2 className="text-lg font-semibold text-gray-800">Restaurant Manager</h2>
      </div>
      <nav className="flex flex-col gap-1 p-2">
        <NavItem 
          label="Home" 
          active={activeSection === "home"} 
          onClick={() => handleNavigate("home")}
          icon={<HomeIcon />}
        />
        <NavItem 
          label="Dashboard" 
          active={activeSection === "dashboard"} 
          onClick={() => handleNavigate("dashboard")}
          icon={<DashboardIcon />}
        />
        <NavItem 
          label="Orders" 
          active={activeSection === "orders"} 
          onClick={() => handleNavigate("orders")}
          icon={<OrdersIcon />}
        />
        <NavItem 
          label="Menu" 
          active={activeSection === "menu"} 
          onClick={() => handleNavigate("menu")}
          icon={<MenuIcon />}
        />
        <NavItem 
          label="Customers" 
          active={activeSection === "customers"} 
          onClick={() => handleNavigate("customers")}
          icon={<CustomersIcon />}
        />
        <NavItem 
          label="Settings" 
          active={activeSection === "settings"} 
          onClick={() => handleNavigate("settings")}
          icon={<SettingsIcon />}
        />
        <NavItem 
          label="About Us" 
          active={activeSection === "about"} 
          onClick={() => handleNavigate("about")}
          icon={<AboutIcon />}
        />
      </nav>
    </aside>
  )
}

function NavItem({ label, active = false, onClick, icon }) {
  return (
    <button 
      onClick={onClick}
      className={`
        flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm 
        transition-colors hover:bg-gray-100
        ${active ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}
      `}
    >
      <span className="flex h-5 w-5 items-center">{icon}</span>
      <span>{label}</span>
    </button>
  )
}

function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  )
}

function DashboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1"></rect>
      <rect width="7" height="5" x="14" y="3" rx="1"></rect>
      <rect width="7" height="9" x="14" y="12" rx="1"></rect>
      <rect width="7" height="5" x="3" y="16" rx="1"></rect>
    </svg>
  )
}

function OrdersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
      <rect width="6" height="4" x="9" y="3" rx="2"></rect>
      <path d="M9 14h.01"></path>
      <path d="M13 14h2"></path>
      <path d="M9 18h.01"></path>
      <path d="M13 18h2"></path>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7h18"></path>
      <path d="M3 12h18"></path>
      <path d="M3 17h18"></path>
    </svg>
  )
}

function CustomersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  )
}

function AboutIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 16v-4"></path>
      <path d="M12 8h.01"></path>
    </svg>
  )
} 