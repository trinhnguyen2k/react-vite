
import Header from './component/layout/header';
import Footer from './component/layout/footer';
import { Outlet } from 'react-router-dom';
const App = () => {


  return (
    <>
      <Header />
      {/* // Outlet = nested router với Outlet */}
      <Outlet />
      <Footer />
    </>

  )
}

export default App
