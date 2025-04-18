import { createContext, useContext, useState } from "react"

const SidebarContext = createContext(undefined)

export function SidebarProvider({ children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="flex h-full w-full overflow-hidden">
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  
  return context
}

export function SidebarInset({ children }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      {children}
    </div>
  )
} 