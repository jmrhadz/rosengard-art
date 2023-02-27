import { loadStripe } from '@stripe/stripe-js'
import Hero from '../components/hero'

// Currently this just loads stripe.js, supposedly for fraud prevention and not to sell cookies, and the hero component

//TODO: add about section and more calls to action
//TODO: process images? videos?

function Home(){

    return <About/>
}


export default Home

function About(){

    return (
        <div className="vh-80">
                <Hero/>  
            </div>

    )
}