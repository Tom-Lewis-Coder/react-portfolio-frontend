import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsGithub onClick={() => window.open('https://github.com/Tom-Lewis-Coder', '_blank')} />
    </div>
    <div>
      <BsLinkedin onClick={() => window.open('https://www.linkedin.com/in/tomlewis139', '_blank')}/>
    </div>
    <div>
      <SiCodewars onClick={() => window.open('https://www.codewars.com/users/Tom-Lewis-Coder', '_blank')}/>
    </div>
  </div>
)

export default SocialMedia