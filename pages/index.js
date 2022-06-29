import Head from 'next/head'
 
import Navbar from '../components/navbar/navbar'
import HomePage from '../components/homeBanner/home'
 

export default function App() {
  return (
    <div >
           <Navbar />
           <HomePage  imgUrl='/static/banner.jpg'/>
    </div>
  )
}
