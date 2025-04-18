import { 
  DashboardOverview, 
  QuickAccess, 
  RecentActivity, 
  SystemNotifications, 
  PerformanceMetrics 
} from '@/components/features/Home';

export function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-6">
        <DashboardOverview />
        <QuickAccess />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RecentActivity />
          <SystemNotifications />
        </div>
        
        <PerformanceMetrics />
      </div>
    </div>
  );
} 