import { useState } from 'react'
import DashboardSidebar from '../components/dashboard_sidebar/DashboardSidebar'
import DashboardNavbar from '../components/navigation/DashboardNavbar'
import { Helmet } from 'react-helmet'

function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
            <Helmet>
                <title>Dashboard - Trolliey</title>
                <meta name="description" content="Trolliey is a modern ecommerce platform. You can become a seller or become a buyer and trade your items from anywhere you like. You can manage you inventory and customers using our intuitive dashboard" />
            </Helmet>
            <div className="relative h-screen flex overflow-hidden bg-gray-100">
                <div className="h-full">
                    <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                </div>

                {/* // the body of the dashboard */}

                <div className="flex-1 overflow-auto focus:outline-none">
                    <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
                        {/* Page header */}
                        <DashboardNavbar setSidebarOpen={setSidebarOpen} />

                        {/* // the rest of the dashboard */}
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout
