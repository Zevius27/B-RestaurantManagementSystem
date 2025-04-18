import './App.css';
import { useState } from 'react';
import { AppSidebar } from "@/components/layout/AppSidebar"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Home, Dashboard, Orders, Menu, Customers, Settings } from "@/components/pages"

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="h-screen w-full bg-gray-50 antialiased overflow-hidden">
      <SidebarProvider>
        <div className="flex h-full w-full">
          <AppSidebar 
            variant="inset" 
            activeSection={activeSection} 
            onNavigate={setActiveSection}
          />
          <SidebarInset>
            <div className="flex h-full w-full flex-col overflow-hidden">
              <SiteHeader title={activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} />
              <main className="flex-1 overflow-auto">
                {activeSection === 'home' && <Home />}
                {activeSection === 'dashboard' && <Dashboard />}
                {activeSection === 'orders' && <Orders />}
                {activeSection === 'menu' && <Menu />}
                {activeSection === 'customers' && <Customers />}
                {activeSection === 'settings' && <Settings />}
                {activeSection === 'about' && (
                  <div className="container mx-auto p-4 md:p-6">
                    <h2 className="mb-6 text-2xl font-bold">About Us</h2>
                    <p>About Us section content will go here.</p>
                  </div>
                )}
              </main>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default App;
