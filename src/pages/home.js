import { loadStripe } from '@stripe/stripe-js'
import Hero from '../components/hero'



function Home(){

    return <About/>
}

//hero image
//about section
//call to action

export default Home

function About(){

    return (
        <div className="vh-80">
                <Hero/>  
            </div>

    )
}