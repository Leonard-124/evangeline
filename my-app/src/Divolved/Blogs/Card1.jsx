
import React from 'react'
import Navbar from '../../Pages/Navbar'
import cottonbro from '../../assets/Arts/cottonbro.jpg'


const Card1 = () => {
  return (
    <>
    <Navbar />
    <div className='mt-28'>
        <div className='flex justify-between w-full'>
            <div className='w-full border-r-[1px] mr-1'>
                <div className='flex'>
                    <img src={cottonbro} alt="" className='ml-1 w-full h-40 object-cover' />
                    <h1 className='text-black font-sans tracking-[-0.5px]'>Asia / Africa / Middle-East</h1>
                </div>
                <div className='font-light'>
                    <p>
                        A standout in this region is Yayoi Kusama’s retrospective at the National Gallery of Victoria in Melbourne. It brings together works over many decades of her career, including immersive installations like Narcissus Garden and her signature mirrored spheres that invite a sensorial experience. The exhibition marries her early experimental work with her influence in pop culture and recent explorations, showing how she remains groundbreaking.
                    </p>
                    <p>
                        Another compelling example is One Must Be Seated by Rita Mawuena Benissan at Zeitz MOCAA, Cape Town. The artist explores Ghanaian cultural symbols (stools, umbrellas, ritual items) and visually ties them to identity, history, and power. The show is deeply rooted in tradition but presented in contemporary forms—photo, film, sculpture, tapestry—that engage visitors with both past and present narratives.
                    </p>
                </div>
            </div>
            <div className='w-full border-r-[1px] mr-1 ml-1'>
                <div className='flex'>
                    <img src={cottonbro} alt="" className='w-full h-40 object-cover' />
                    <h1 className='text-black font-sans tracking-[-0.5px]'> America (United States / Canada / Mexico)</h1>
                </div>
                <div className='font-light'>
                    <p>
                        In North America, there are several high-profile retrospectives. For example, Ai Weiwei: The Art and Activism of Ai Weiwei at the Seattle Art Museum spans four decades of his works, combining political critique, cultural heritage, activism, and art-making into immersive displays. It’s not just about beautiful objects—but how art can confront issues like censorship, identity, human rights, and memory.
                    </p>
                    <p>
                        Similarly, Light: Visionary Perspectives at the Aga Khan Museum in Toronto uses installations by artists like Olafur Eliasson and Anish Kapoor to play with the idea of light—not just its visual beauty but its metaphoric power. Light becomes medium, subject, and space. These works invite reflection about how perception, space, and public experience are shaped, especially in museum architecture that interacts with natural light and form.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex'>
                    <img src={cottonbro} alt="" className='w-full h-40 object-cover' />
                    <h1 className='text-black font-sans tracking-[-0.5px]'>Europe & UK</h1>
                </div>
                <div className='font-light'>
                    <p>
                        Europe in 2025 shows a strong trend toward revisiting history, elevating underrepresented voices, and staging ambitious, immersive shows. For example, retrospectives that explore artists’ entire careers—highlighting both early and late works—are flourishing, giving more context to the artist’s evolution. There’s also a rise in exhibitions that bring together visual art with performance, installation, and multimedia.
                    </p>
                    <p>
                        Another trend is spotlighting artists from diverse backgrounds, including Indigenous artists, female artists from earlier centuries who have been overlooked, and non-European artists whose work dialogues with European histories. These shows are not just about re-showing old works but reframing narratives, asking questions about power, identity, and cultural exchange.
                    </p>
                </div>
            </div>
        </div>
    </div>

      
    </>
  )
}

export default Card1

