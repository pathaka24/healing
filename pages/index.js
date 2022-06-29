 
 
import Navbar from '../components/navbar/navbar'
import HomePage from '../components/homeBanner/home'
import Container from '../components/container/container'
import Banner from '../components/banner/banner'
import Service from '../components/service/service'
import List from '../components/testimon/list'
import Contact from '../components/contact/contact'
 

export default function App() {
  return (
    <div >
           <Navbar />
           <HomePage  imgUrl='/static/banner.jpg'/>
           <Container /> 
           <Banner imgUrl='/static/proudly-1.jpg' pattern='/static/pattern-1.png' />
           <Service />
           <div style={{display:'flex'}}>
           <List />
           <List />
           <List />
           <List />
           </div>
            <Contact />
    </div>
  )
}
