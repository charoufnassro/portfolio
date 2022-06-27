import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Logo-t.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'C', 'H', 'A', 'R', 'O', 'U', 'F']
  const jobArray = ['S', 'y', 's', 't', 'e', 'm', ' ', 'A', 'd', 'm', 'n', 'i', 's', 't', 'a', 'i', 'o', 'n', '.']

  return (

    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>

          <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            />
          </h1>
          <h2>Linux, Proxmox / Vmware / Nginx / Commvault</h2>
          <Link to="/contact" className='flat-button' >CONTACT ME</Link>
      </div>
    </div>

  );
}

export default Home