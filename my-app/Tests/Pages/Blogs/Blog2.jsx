
import React from 'react'
import Header from '../../Components/Header'
import Footer from "../../Components/Footer"
import { items } from '../itemdata'

const Blog2 = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen w-full bg-[#e6e6e6] mt-20 mb-[200px]'>
        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row justify-between w-full gap-3.5 p-2 h-[250px] sm:h-[300px] md:h-[400px]'>
            <div className='flex flex-col gap-2'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-serif'>{items[2]?.title || "img"}</h1>
            <p className='text-base sm:text-lg md:text-xl font-light'>What does it mean to be a Kenyan artist in a city that never stops moving?</p>
            <p className='text-sm sm:text-base md:text-lg font-light'>
              Nairobi is a metropolis of contradictions. Glass towers rise next to corrugated iron <br /> shanties.
              Billion-dollar tech startups operate across the road from open-air jua kali <br /> workshops where men
              weld scrap metal into sculpture. And in the middle of this chaos, a generation of painters,
              sculptors, and mixed-media artists is asking a question that <br /> has no easy answer: Who am I
              when my ancestors speak one language, my customers speak another, and my canvas speaks acrylic?
            </p>
            </div>
            <img src={items[2]?.image2} alt="" className='w-full md:w-1/2 h-full object-cover  rounded-r-md border-r-amber-200'/>
          </div>
          <div className='flex flex-col md:flex-row justify-center'>
            <div className='hidden md:block md:w-[350px] lg:w-[400px]'>
              <div className='bg-[#6b6b6b] h-40 sm:h-48 md:h-[250px] m-2 w-full'>

              </div>
            </div>
            <div className='w-full bg-[#fcfcfcfb] p-3 sm:p-4 md:p-6'>
              <div className='flex flex-col items-start gap-3 font-sans text-sm sm:text-base md:text-lg lg:text-xl'>
                <p>
                  This is the identity crisis of urban Kenyan art. It is not abstract.
                  It is not academic. It is lived every day in studios across the Eastlands,
                  in the slums of Kibera and Mathare, and in the upmarket galleries of Karen
                  and Westlands. And one of the most powerful ways this crisis expresses itself
                  is through artists who are speaking Kikuyu through acrylics—using the visual
                  language of contemporary painting to wrestle with ethnicity, tradition, and
                  the weight of a colonial past that never really ended.
                </p>
                <h1 className='font-semibold text-lg sm:text-xl md:text-2xl m-2'>The Weight of the Label: "Jua Kali" as Identity and Insult</h1>
                <p>
                  To understand the identity crisis, you have to understand the word jua kali.
                  Literally "hot sun" in Swahili, it refers to Kenya's informal sector: the welders,
                  carpenters, mechanics, and artisans who work on roadsides, under corrugated iron
                  roofs, with no employment contract, no pension, and no safety net. But the term
                  has also become a cultural label for self-taught artists—and it cuts both ways
                </p>
                <p>
                  On one hand, being jua kali means resilience, ingenuity, and the kind of
                  "makeshift creativity" that Michel de Certeau wrote about: making art from
                  whatever is at hand. On the other hand, it can be a dismissal. A 2018 article
                  in The Standard reported that some Kenyans label a painting "too jua kali" as
                  a euphemism for low quality, a backhanded way of saying that art made by a
                  self-taught Kenyan could not possibly be as valuable as something imported from Europe.
                </p>
                <p>
                  he artist Daniel Njoroge, who has been selling paintings since 1979, knows
                  this pain intimately. He told a reporter: "Art is being diluted. Uniqueness
                   is being diluted. You have some drawing things that make little sense for
                  the sake of it. It's just a lack of principles. This is a reputable industry
                  that made people like Leonardo Da Vinci world-famous".
                </p>
                <p>
                  Njoroge's frustration is not just about money. It is about recognition.
                  It is about being seen as an artist, not a fundi (technician). It is about
                  the deep, unspoken wound of colonialism: the idea that real art comes from
                  the West, and African creativity is merely craft.
                </p>
                <h1 className='font-semibold text-xl m-1.5'>The Two Worlds of Kenyan Art Training</h1>
                <p>
                  One major source of the identity crisis is the educational divide among Kenyan artists.
                  Momanyi's 2026 study of 481 jua kali artisans in Nairobi's Eastlands found a stark split
                  in how artists acquire their skills:
                </p>
                      <th className='w-full border '>
                        <tr className="flex justify-between border-b">
                            <td className=" border- w-full">Method of Skills Acquisition</td>
                            <td className=" border-l  w-full">Percentage of Artisans</td>
                          
                        </tr>
                        <tr className="flex justify-between border-b font-[400] ">
                             <td className=" border- w-full">Apprenticeship in the informal sector</td>
                            <td className=" border-l  w-full">86.3%</td>
                            
                        </tr>
                        <tr className="flex justify-between border-b font-[400]">
                            <td className=" border- w-full">Formal TVET (Technical Vocational Education)</td>
                            <td className=" border-l w-full ">12.7%</td>
                        </tr>
                        <tr className="flex justify-between  font-[400]">
                            <td className=" border- w-full">Former formal employment</td>
                            <td className=" border-l  w-full">1.0%+</td>
                        </tr>
                    </th>
                <p>
                  More than eight out of ten jua kali artists learned their craft through
                  apprenticeship—watching a master, copying their techniques, absorbing not
                  just skills but also bad business practices, prejudices, and an ingrained
                  sense of being "outside" the formal art world. Only 12.7 percent had formal
                  certification from institutions like the National Industrial Training
                  Authority (NITA).
                </p>
                <p>
                  The result is a two-tier system. Formally trained artists are more likely
                  to have business plans, registered companies, KRA pins, and bank accounts
                  for their art. Self-taught artists, by contrast, often operate entirely
                  in cash, with no records, no contracts, and no protection when a client
                  refuses to pay.
                </p>
                <p>
                  But here is the twist: some of Kenya's most celebrated contemporary
                  artists—including Peterson Kamwathi, whose work hangs in the British
                  Museum—emerged from the jua kali system. The apprentice model is not
                  a dead end. It is a forge. But it is a forge that leaves deep scars.
                </p>
                <h1 className='font-semibold text-xl m-1.5'>Speaking Kikuyu Through Acrylic: Visual Language as Resistance</h1>
                <p>
                  So how do urban Kenyan artists navigate this crisis? One answer is symbolism.
                  They embed ethnic identity into the very materials and forms of their work.
                </p>
                <p>
                  The Kikuyu artist Ryan Engoke (known as "Duk"), born in Nairobi in 1997, 
                  is a striking example. His series Instruments of Becoming (2025) uses acrylic
                  on canvas to explore themes of discipline, survival, and transformation.
                  His painting Fault Line—priced at $1,938—depicts a figure fractured by internal
                  strain, with tectonic shifts across the canvas. The work is abstract.
                  It does not show a mũgumo fig tree or a Kikuyu elder in traditional dress.
                  Yet for a Kikuyu viewer, the language of pressure, of forces building quietly
                  until coexistence becomes impossible, speaks directly to the community's
                  colonial history: land stolen, rebellions crushed, identities fragmented.
                </p>
                <p>
                  Another Kikuyu artist, Ngugi Waweru, works in metal—used knives, motorbike
                  chains, corrugated iron sheets. His installation title comes from a Kikuyu
                  proverb: "Kahio kogi gatemaga o mwene" (a sharp knife cuts the owner).
                  The proverb warns that the tools of advancement—technology, education, even
                  art itself—can harm the very people they are meant to liberate. "Just as a
                  knife is eroded as it is sharpened repeatedly so that it can perform its
                  functions better," Ngugi explains, "so are we made less and less human by
                  the actions we take to adopt and survive within our present society".
                </p>
                <p>
                  This is not nostalgia for a pre-colonial past. It is a sophisticated critique
                  of the present. Urban Kenyan artists are not rejecting modernity. They are
                  rejecting the terms of modernity handed to them by colonialism: the idea that
                  to be modern is to be Western, and to be authentic is to be primitive.
                </p>
                <h1 className='font-semibold text-xl m-1.5'>The Market's Demand for "Authenticity"</h1>
                <p>
                  The identity crisis is not just internal. It is driven by what buyers want.
                </p>
                <p>
                  Danielle de Lame, in her study of the Nairobi art market, notes that for
                  decades, the most commercially successful Kenyan art was the kind that appealed
                  to Western stereotypes: "naive" paintings of wildlife, Maasai warriors, and
                  "unspoiled" African villages. The German-American dealer Ruth Schaffner, who
                  ran the influential Gallery Watatu from 1985 to 1996, explicitly rejected
                  formally trained artists as "too Westernized" and promoted only self-taught
                  painters who fit the primitive mold.
                </p>
                <p>
                  The result was a trap. If you painted contemporary Nairobi—the matatus,
                  the traffic jams, the corruption, the iPhones—you were told your work was
                  not "authentically African." If you painted lions and sunsets, you sold,
                  but you died a little inside.
                </p>
                <p>
                  That trap is slowly being dismantled. Artists like Michael Soi, Peterson
                  Kamwathi, and Beatrice Wanjiku are now exhibited internationally on their
                  own terms. But the tension remains. Every urban Kenyan artist still faces
                  the same question: Do I paint for the tourist, or do I paint for myself?
                </p>
                <h1 className='font-semibold text-xl m-1.5'>The Data of Instability</h1>
                <p>
                  The identity crisis is not just cultural. It is economic. Momanyi's research
                  found that the average age of jua kali artisans in Nairobi's Eastlands is 30.67
                  years, but the average age of those who own a business is 35 years. That gap tells
                  a story: most young artists drop out before they ever establish themselves.
                </p>
                <p>
                  The sustainability of jua kali artisanal businesses depends on three factors:
                </p>
                  <th className='w-full border '>
                        <tr className="flex justify-between border-b">
                            <td className=" border- w-full">Factor</td>
                            <td className=" border-l  w-full">Impact on Business Sustainability</td>
                          
                        </tr>
                        <tr className="flex justify-between border-b font-[400] ">
                             <td className=" border- w-full">Trainees transitioning to business owners</td>
                            <td className=" border-l  w-full">Positive (increases sustainability)</td>
                            
                        </tr>
                        <tr className="flex justify-between border-b font-[400]">
                            <td className=" border- w-full">Master trainers effectively mentoring</td>
                            <td className=" border-l w-full ">Positive (improves management skills)</td>
                        </tr>
                        <tr className="flex justify-between  font-[400]">
                            <td className=" border- w-full">Casuals remaining casual (not owning)</td>
                            <td className=" border-l  w-full">Negative (increases risk of collapse)</td>
                        </tr>
                    </th>
                <p>
                  For every young artist who apprentices under a master, hopes to learn the trade,
                  and dreams of opening their own studio, there is a harsh reality: without business
                  skills, without access to finance, without a KRA pin or a bank account, most will
                  not make it to their 10th year.
                </p>
                <h1 className='font-semibold text-xl m-1.5'>A New Generation, A New Language</h1>
                <p>
                  And yet. Despite the crisis—or perhaps because of it—a new generation is emerging.
                  Artists like Ryan 'Duk', Ngugi Waweru, and Boniface Maina (whose Social Zombification
                  critiques social media addiction) are no longer asking for permission to be Kenyan and
                  modern at the same time. They are simply doing it.
                </p>
                <p>
                  They paint in acrylics because acrylics are available. They speak Kikuyu through their
                  symbols because Kikuyu is their mother tongue. But they also speak English in interviews,
                  exhibit in Venice, and sell to collectors in New York and London.
                </p>
                <p>
                  The identity crisis is not going away. But it is no longer a crisis of legitimacy.
                  It is a crisis of infrastructure: how to get training, how to access capital, how
                  to get a KRA pin, how to survive the first five years, how to build a business
                  that lasts.
                </p>
                <p>
                  The art itself is already there. Confident. Fractured. Beautiful. Angry.
                  And unmistakably Kenyan.
                </p>
                <h1 className='font-semibold text-xl m-1.5'>References</h1>
                <p>
                  AKKA Project. (2023, June 20). Metal artist reveals what 
                  makes people less human. AKKA Project. 
                </p>
                <p>
                  de Lame, D. (2021). Stage dynamics: Presentation and representation in the
                  Nairobi art market. In M.-A. Fouéré (Ed.), Kenya in motion 2000-2020. Africae.
                  <a href="https://doi.org/10.4000/books.africa.2640">https://doi.org/10.4000/books.africa.2640</a> 
                </p>
                <p>
                  Momanyi, C. (2026). Decent work and the Jua Kali artisanal
                  business sustainability challenges in the Eastlands of Nairobi
                  in Kenya. SN Social Sciences, 6, 72.
                  <a href="https://doi.org/10.1007/s43545-026-01331-w">https://doi.org/10.1007/s43545-026-01331-w</a> 
                </p>
                <p>Ryan 'Duk'. (2025). Instruments of becoming. Ardih Gallery at Art Haus Studios.</p>
                <p>
                  The Standard Entertainment. (2018, August). Perfect storm sinking Kenya's visual
                  arts. The Standard. 
                </p>
                <p>
                  <a href="blog3">Next</a>
                </p>
              </div>
            </div>
            <div className='hidden md:block md:w-[350px] lg:w-[400px]'>
              <div className='bg-[#6b6b6b] h-40 sm:h-48 md:h-[250px] m-2 w-full'>

              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog2

/////////////////////////////////////////////////////////////////////

