import React from 'react'
import './Values.css'

const Values = () => {
    return (
        <div className='ourValuesContainer' >

            <h2 className='lineheading' > <span>OUR VALUES</span> </h2>

            <h4 >Our Stakeholders</h4>

            <div className="values__cards">

                <div className="value-card">

                    <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg" alt="img" className='personImg' />

                    <h4>Individuals</h4>

                    <p>Get your students ready
                        and active for the
                        mysterious corporate
                        world with our AI-driven
                        skill-based training platform.
                    </p>

                </div>

                <div className="value-card">

                    <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg" alt="img" className='personImg' />

                    <h4>Individuals</h4>

                    <p>Get your students ready
                        and active for the
                        mysterious corporate
                        world with our AI-driven
                        skill-based training platform.
                    </p>

                </div>

                <div className="value-card">

                    <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg" alt="img" className='personImg' />

                    <h4>Individuals</h4>

                    <p>Get your students ready
                        and active for the
                        mysterious corporate
                        world with our AI-driven
                        skill-based training platform.
                    </p>

                </div>

            </div>

            <button className='connectBtn' >Connect with Us</button>


        </div>
    )
}

export default Values