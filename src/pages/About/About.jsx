import React from "react"
import "./index.scss"
import priyanka from "./priyanka.png"
import mayank from "./mayank.png"
import { AboutCard } from "../../components/ĀboutCard"
const About = () => {
  return (
    <>
      <div className='home'>
        <div className='about-main'>
          <AboutCard
            name='Priyanka Prasad'
            role='Web Designer'
            linkedin='https://www.linkedin.com/in/prykdev/'
            github='https://github.com/prykdev'
            email='mailto:priyankaafssulur@gmail.com'
            twitter='https://twitter.com/prykdev'
            img={priyanka}
            portfolio='https://priyankaprasad.vercel.app/'
            dashboard='prykdev'
          />
          <AboutCard
            name='Mayank'
            role='Full Stack Developer'
            linkedin='https://www.linkedin.com/in/mayank-1'
            github='https://github.com/mayank-1'
            email='mailto:mayankmk165@gmail.com'
            twitter='https://twitter.com/mayankcodes'
            img={mayank}
            portfolio='https://mayank-1.github.io/'
            dashboard='ayu913'
          />
        </div>
      </div>
    </>
  )
}

export default About

