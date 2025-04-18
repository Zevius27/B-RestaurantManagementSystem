import { DashboardOverview, QuickAccess } from '@/components/features/Home';

export function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <h3 className="text-lg font-medium mb-3">Welcome to Restaurant Management System</h3>
          <p className="text-gray-600 mb-4">
            Use the sidebar to navigate through different sections of the application.
          </p>
        </div>
        
        <DashboardOverview />
        <QuickAccess />
      </div>
    </div>
  );
} 