import Head from 'next/head'
 
import Navbar from '../components/navbar/navbar'
import HomePage from '../components/homeBanner/home'
import Container from '../components/container/container'
import Banner from '../components/banner/banner'
 

export default function App() {
  return (
    <div >
           <Navbar />
           <HomePage  imgUrl='/static/banner.jpg'/>
           <Container /> 
           <Banner imgUrl='/static/startup-1.jpg' pattern='/static/pattern-1.png' />
    </div>
  )
}
