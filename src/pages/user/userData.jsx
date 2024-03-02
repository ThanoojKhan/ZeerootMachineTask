import Footer from '../../components/footer'
import Navbar from '../../components/user/navbar'
import UserTable from '../../components/user/userTable'

function Home() {

  return (
    <div>
      <Navbar />
      <UserTable />
      <Footer/>
    </div>
  )
}

export default Home