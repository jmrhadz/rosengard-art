

function Home(){

    return <About/>
}

//hero image
//about section
//call to action

export default Home

function About(){

    return (
            <div className="container">
                <h1>Rosengard Art & Wares</h1>
                <div className="row-md-lg-xl">
                    <img className="col" alt="pots and art" src="https://loremflickr.com/320/240/ceramic"></img>
                  <p className="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
            </div>

    )
}