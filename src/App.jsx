import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import ContentContainer from "./components/ContentContainer"
import { AppProvider } from "./lib/context/AppContext"

function App() {
  return (
    <>
      <AppProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-col h-screen w-full  p-2">
            {/* <div className="p-2"> */}
              <SidebarTrigger />
              <ContentContainer />
            {/* </div> */}
          </main>
        </SidebarProvider>
      </AppProvider>
    </>
  )
}

export default App
