import Head from 'next/head'
 
import Navbar from '../components/navbar/navbar'
import HomePage from '../components/homeBanner/home'
import Container from '../components/container/container'
 

export default function App() {
  return (
    <div >
           <Navbar />
           <HomePage  imgUrl='/static/banner.jpg'/>
           <Container /> 
    </div>
  )
}
