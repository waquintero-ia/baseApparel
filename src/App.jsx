import './App.css'
import Email from './component/Email'
import Hero from './component/Hero'
import Navigation from './component/Navigation'
import Title from './component/Title'

function App() {

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className='xl:flex xl:flex-row-reverse'>
        <Hero />
        <div className="container flow__container">
          <Title />
          <Email />
        </div>
      </main>
    </>
  )
}

export default App
