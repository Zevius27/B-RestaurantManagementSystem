import { useState } from "react"
import { useSidebar } from "@/components/ui/sidebar"
import { NotificationPanel } from "@/components/ui/notification-panel"
import { ThemeToggle } from "@/components/ui/theme-provider"

export function SiteHeader({ title = "Dashboard" }) {
  const { isOpen, setIsOpen } = useSidebar()
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-200 bg-white/95 backdrop-blur px-4 lg:px-6 dark:bg-gray-800/95 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <button 
          className="rounded-md p-2 text-gray-500 hover:bg-gray-100 md:hidden focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-gray-400 dark:hover:bg-gray-700" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
          <span className="sr-only">Toggle menu</span>
        </button>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <button 
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-gray-400 dark:hover:bg-gray-700"
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            aria-label="Notifications"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="sr-only">Notifications</span>
          </button>
          <NotificationPanel 
            isOpen={isNotificationOpen}
            onClose={() => setIsNotificationOpen(false)}
          />
        </div>
        
        <ThemeToggle />
        
        <div className="relative">
          <button className="overflow-hidden rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-700">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
              AM
            </div>
          </button>
        </div>
      </div>
    </header>
  )
} 