import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
// import { Logo } from '../components'
 import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <h1>Signage</h1>
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            D <span>Signage</span> app
          </h1>
          <p>
          We all know digital signage as a digital installation that displays video or multimedia
           content for informational or advertising purposes. We see it everywhere.
            We’ve gazed at advertisements at bus stations, found gate information at the airport,
             ordered food in fast food restaurants, bought movie tickets, pulled up directions at museums,
              all thanks to digital signage. There are endless uses supporting a diversity of businesses and
               audience needs.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
