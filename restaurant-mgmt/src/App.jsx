import './App.css';
import { useState } from 'react';
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import data from "./data.json"

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

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
                {activeSection === 'dashboard' && (
                  <div className="container mx-auto flex flex-col gap-6 p-4 md:p-6">
                    <SectionCards />
                    <div className="w-full">
                      <ChartAreaInteractive />
                    </div>
                    <DataTable data={data} />
                  </div>
                )}
                {activeSection === 'orders' && (
                  <div className="container mx-auto p-4 md:p-6">
                    <h2 className="mb-6 text-2xl font-bold">Orders</h2>
                    <p>Orders section content will go here.</p>
                  </div>
                )}
                {activeSection === 'menu' && (
                  <div className="container mx-auto p-4 md:p-6">
                    <h2 className="mb-6 text-2xl font-bold">Menu</h2>
                    <p>Menu section content will go here.</p>
                  </div>
                )}
                {activeSection === 'customers' && (
                  <div className="container mx-auto p-4 md:p-6">
                    <h2 className="mb-6 text-2xl font-bold">Customers</h2>
                    <p>Customers section content will go here.</p>
                  </div>
                )}
                {activeSection === 'settings' && (
                  <div className="container mx-auto p-4 md:p-6">
                    <h2 className="mb-6 text-2xl font-bold">Settings</h2>
                    <p>Settings section content will go here.</p>
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
