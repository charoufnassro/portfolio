import { useEffect, useState } from 'react'
import {
  faGitAlt,
  faJsSquare,
  faLinux,
  faReact,
  faRedhat,
  faWindows,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Over 5 years of system and infrastructure engineer experience, mainly focus on Virtualization, OS, Storage, DataCenter, Traditional infrastructure and HCI Solutions.
          </p>
          <p>
          I am a very ambitious systems engineer looking for a position in an established IT company with the opportunity to work with the latest technologies on ambitious and diverse projects.
          </p>
          <p align="LEFT">
          I have a good experience to study and deploy a modern HCI infrastructure or a traditional infrastructure.
          </p>
          <p>
          If i had to define myself in one sentence, it would be a family member, father of a beautiful daughter, photography enthusiast and obsessed with technology!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faRedhat} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faLinux} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faWindows} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default About
