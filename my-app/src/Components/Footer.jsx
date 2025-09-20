// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <div className="bg-stone-700 text-black py-4 w-full h-80">
//         <div className="flex flex-col italic cursor-pointer gap-2">
//           <div className="flex justify-around text-red-50">
//             <p className="">WhatsApp</p>
//             <p>Instagram</p>
//             <p>Tiktok</p>
//             <p>Facebook</p>
//           </div>
//           <div className="flex justify-around text-red-100">
//             <p>About Us</p>
//             <p>Contact</p>
//             <p>Privacy Policy</p>
//             <p>Terms of Service</p>
//             Cookies Notice, New Arrivals, C
//             Arts, Davinci, Email, Newsletter, Sell on Unix, Create Art, Help, Chat With Us
//           </div>
//           Join us on Instagram, Tiktok, Facebook, Youtube,Twitter,<Linkedin></Linkedin>
//           Payment Methods : Visa, Mastercard, Mpesa
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;
 

import React from 'react'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter.png'
import youtube from '../assets/images/youtube.png'
import facebook from '../assets/images/facebook.png'
import linkedin from '../assets/images/linkedin.png'
import tiktok from '../assets/images/tik-tok.png'
import mastercard from '../assets/images/mastercard.png'
import mpesa_icon from '../assets/images/mpesa_icon.png'
import paypal from '../assets/images/paypal.png'
import visa from '../assets/images/visa.png'



const Footer = () => {
  return (
    <div className='bg-[#292929] w-full'>
      <div className='flex justify-center'>
        <div className='flex flex-col'>
          <div className='w-[900px] h-[200px] flex justify-around  text-[#d1d1d1] mt-7'>
          <div className='flex flex-col gap-0.5'>
            <p className='text-white font-semibold tracking-[-0.5px]'>NEED HELP</p>
            <a href="">Chat With Us</a>
            <a href="">Help Center</a>
            <a href="">Contact Us</a>
          </div>
          <div className='flex flex-col gap-0.5'>
            <p className='text-white font-semibold tracking-[-0.5px]'>ABOUT UNIX</p>
            <a href="">About Us</a>
            <a href="">Terms and Conditions</a>
            <a href="">Cookie Policy</a>
          </div>
          <div className='flex flex-col gap-0.5'>
            <p className='text-white font-semibold tracking-[-0.5px]'>MAKE MONEY WITH UNIX</p>
            <a href="">Sell Your Products</a>
            <a href="">Post Your Art</a>
            <a href="">Freelance</a>
          </div>
          <div className='flex flex-col gap-0.5'>
            <p className='text-white font-semibold tracking-[-0.5px]'>WHATS NEW</p>
            <a href="">New Deals</a>
            <a href="">Best Art</a>
            <a href="">Flash Sales</a>
          </div>
        </div>
          <div className='flex justify-start ml-10'>
          <div>
            <p className='text-white font-semibold tracking-[-0.5px]'>JOIN US ON</p>
            <div className='flex justify-start gap-5'>
                <a href="#">
              <img src={twitter} alt="twitter" className='h-[25px]' />
              </a>
            <a href="#">
          <img src={facebook} alt="facebook" className='h-[30px]'/>
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" className='h-[30px]' />
            </a>
            <a href="#">
              <img src={tiktok} alt="tiktok" className='h-[30px]'/>
            </a>
            <a href="#">
              <img src={youtube} alt="youtube" className='h-[40px]'/>
            </a>
            </div>
          </div>
          <div>
            <p className='text-white font-semibold tracking-[-0.5px]'>PAYMENT METHODS</p>
            <div className='flex justify-start'>
              <a href="#">
                <img src={mastercard} alt="mastercard" className='h-[60px]' />
              </a>
              <a href="#">
                <img src={visa} alt="visa"  className='h-[60px]'/>
              </a>
              <a href="#">
                <img src={mpesa_icon} alt="mpesa" className='h-[40px] w-[50px]'/>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Footer

