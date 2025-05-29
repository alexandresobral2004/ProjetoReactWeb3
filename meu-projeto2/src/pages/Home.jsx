import React from 'react'
import NavBarComponent from '../components/NavBarComponent'
import Container from 'react-bootstrap/esm/Container'
import Sidebar from '../components/Sidebar'
function Home() {
  return (

    <Container className='m-0 w-100'>
      <Sidebar />
      <h1>Home</h1>
    </Container>



  )
}

export default Home