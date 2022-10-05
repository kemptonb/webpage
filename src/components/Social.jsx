import React from 'react'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'

export const Social = () => {
  return (
    <div className='app__social'>
        <div>
            <a 
              href='https://github.com/kemptonb' 
              target={'_blank'}
              rel='noreferrer'
              >
                <BsGithub />
              </a>
        </div>
        <div>
            <a 
              href='#' 
              target={'_blank'}
              rel='noreferrer'
              >
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a 
              href='#' 
              target={'_blank'}
              rel='noreferrer'
              >
                <BsInstagram />
            </a>
        </div>
    </div>
  )
}

export default Social
