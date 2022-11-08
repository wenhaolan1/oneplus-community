import { Suspense } from 'react'
import RoutesConfig from '@/routes/index'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
function App() {

  return (
    <div className="App">
    <Header />
    <Suspense fallback={ <div>loading...</div>}>
      <RoutesConfig />
    </Suspense>
    <Footer />
    </div>
  )
}

export default App
