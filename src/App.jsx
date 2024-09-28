import './App.css'
import Email from './component/Email'
import Hero from './component/Hero'
import Navigation from './component/Navigation'
import Title from './component/Title'

function App() {

  return (
    <>
      <main className='grid'>
        <Navigation />
        <Hero />
        <div className="container flow__container" id='container'>
          <Title />
          <Email />
        </div>
      </main>
    </>
  )
}

export default App
