import React from 'react'
import styles from '../styles'
import { socialMedia } from '../constants'

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
                <p className={`font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite`}>
                     &copy; RentNest. All Rights Reserved. <br className='sm:block hidden'/>Created By JAIMIN HAPANI
                </p>
                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, index) => (
                        <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
                    ))}
                </div>
            </div>
    </section>
  )
}

export default Footer
