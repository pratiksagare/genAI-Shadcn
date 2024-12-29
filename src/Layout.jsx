export default function Layout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex-1 ml-64">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>

    )
}
