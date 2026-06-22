import React from 'react'
import { items } from '../Pages/itemdata'

const Card = () => { //hidden sm:block w-[400px] lg:w-[450px] 
  return (
    <div className=' bg-[#ebebeb] w-full mt-24 sm:w-auto'>
        <div className='lg:flex justify-center gap-3 '>
            <div className='hidden sm:block w-[400px]'>  
                <h1>More Art</h1>
            </div>
            <div className='bg-[#fdfdfd] w-full sm:w-full'>
                <div className='flex flex-col md:flex-row text-xl p-1'>
                    <div>
                    <h1 className='sm:text-xl md:text-3xl lg:text-4xl font-serif'>
                        The Curse of the "Airport Painting": Why Mass-Produced Souvenirs Hurt Kenyan Artists
                    </h1>
                    <h2 className='sm:text-xl md:text-3xl'>By: Alvin Omondi</h2>
                    </div>
                    <div className='h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full'>
                        <img src={items[0].image2} alt="" className='object-cover w-full h-full' />
                    </div>
                </div>
                <div className='flex flex-col text-start p-2 text-sm sm:text-base md:text-lg lg:text-xl font-serif gap-2'>
                    <p>
                        You’ve seen them. Maybe in a duty-free shop after a layover in Nairobi.
                        Maybe on a beachside stall in Mombasa. Or maybe on a mass-market home décor
                        website that promises an “African safari vibe.”
                    </p>
                    <p>
                        Identical wooden giraffes. Batch-painted sunsets over the Big Five.
                        Soapstone bowls that all look like they came from the same mold.
                        They’re cheap, they’re everywhere, and they’re marketed as “Kenyan art.”
                    </p>
                    <p>
                        But here’s the uncomfortable truth:
                        <span className='font-bold'> that $15 souvenir is a curse, not a blessing.</span>
                    </p>
                    <p>
                        Behind the bright colors and tourist-friendly price tags lies a quiet crisis.
                        Real Kenyan artists—carvers who inherited skills from their grandparents,
                        painters telling stories of modern Nairobi, sculptors recycling scrap metal
                        into social commentary—are being driven out of their own industry. And the
                        culprit isn't just cheap labor. It's the global appetite for what art historians
                        and economists call <span className='font-bold'>“airport art.”</span> 
                    </p>
                    <p>
                        Let’s break down why that bargain hurts more than it helps—and why buying authentic
                        Kenyan art isn’t charity, but survival.
                    </p>
                    <h1 className='text-center font-bold text-[17px] m-1'>What Exactly Is “Airport Art”?</h1>
                    <p>
                        The term “airport art” has been used since at least the 1970s to describe mass-produced
                        souvenirs made specifically for tourists, often sold in airport gift shops, hotel lobbies,
                        and roadside curio stalls. These pieces are not created by individual artists expressing
                        a personal vision. They are manufactured on assembly lines—often by underpaid workers
                        copying the same design hundreds of times.
                    </p>
                    <p>
                        In Kenya, this system exploded in the post-independence tourism boom. The Kamba woodcarving
                        industry, which once produced unique pieces for local ceremonies, was rapidly commercialized.
                        By the 1990s, an estimated 60,000 to 80,000 active carvers were supporting over 400,000
                        dependents. But here’s the catch: most of those carvers weren’t earning a living wage.
                    </p>
                    <p>
                        Instead, they were producing what Walter Elkan described back in 1958 as carvings with
                        an “exotic but suspiciously uniform look about them”. The suspicion? That they were all
                        mass-produced by machines—or by desperate hands paid pennies per piece.
                    </p>
                    <h1 className='font-bold text-center text-[17px] m-1'>The Economics of Exploitation: A Table of Two Markets</h1>
                    <p>
                        To understand the damage, look at the numbers.
                        Below is a comparison between the airport art
                        economy and the authentic art economy in Kenya.
                    </p>
                    <th className='w-full border '>
                        <tr className="flex justify-between border-b">
                            <td className=" border- w-full">Feature</td>
                            <td className=" border-l  w-full">Airport Art (Mass-Produced Souvenirs)</td>
                            <td className=" border-l w-full ">Authentic Kenyan Art (Original Works)</td>
                        </tr>
                        <tr className="flex justify-between border-b font-[400] ">
                             <td className=" border- w-full">Production</td>
                            <td className=" border-l  w-full">Assembly line, batch production</td>
                            <td className=" border-l w-full ">Individual, studio-based</td>
                        </tr>
                        <tr className="flex justify-between border-b font-[400]">
                            <td className=" border- w-full">Artist Income</td>
                            <td className=" border-l  w-full">Artist Income	{'<5%'} of retail price (often $0.50–$2 per piece)</td>
                            <td className=" border-l w-full ">40–60% of retail price</td>
                        </tr>
                        <tr className="flex justify-between border-b font-[400]">
                            <td className=" border- w-full">Price to Tourist</td>
                            <td className=" border-l  w-full">$15–$50</td>
                            <td className=" border-l w-full ">$150–$5,000+</td>
                        </tr>
                        <tr className="flex justify-between border-b font-[400]">
                            <td className=" border- w-full">Cultural Value</td>
                            <td className=" border-l  w-full">Generic, often inaccurate stereotypes</td>
                            <td className=" border-l w-full ">Specific to artist’s community & contemporary life</td>
                        </tr>
                        <tr className="flex justify-between border-b font-[400]">
                            <td className=" border- w-full">Longevity</td>
                            <td className=" border-l  w-full">Disposable (breaks, fades)</td>
                            <td className=" border-l w-full ">Heirloom (crafted to last generations)</td>
                        </tr>
                        <tr className="flex justify-between font-[400]">
                            <td className=" border- w-full">Impact on Artist</td>
                            <td className=" border-l  w-full">Survival poverty, no career growth</td>
                            <td className=" border-l w-full ">Sustainable livelihood, career development</td>
                        </tr>
                    </th>
                    <p className="c">
                        In 2018, the Kenya National Visual Artists Association posted a
                        devastating public warning. They listed what they called
                        “legalized malpractices” that have killed the visual arts
                        sector—comparing it to the collapse of Kenya’s sugar, coffee,
                        and cotton industries. Their statement read, in part:
                    </p>
                    <p className="c">
                        “In the Kisii soapstone industry alone, many artists left the industry
                        for minor jobs in tea picking in Kericho, others went for security companies,
                        others turned to criminal lifestyles to eke out a living and quite a number
                        committed suicide after failing to sustain themselves.” 
                        This is not hyperbole. This is the human cost of airport art.
                    </p>
                    <h1 className='font-bold text-center m-1'>The Health Risks Aren't Just Economic</h1>
                    <p className="c">
                    Counterfeit and mass-produced art doesn’t just steal money—it can steal
                    lives. A 2024 consumer survey by the Anti-Counterfeit Authority (ACA)
                    found that 60.48% of Kenyan respondents had personally experienced adverse
                    effects from counterfeit goods, including health complications from fake
                    pharmaceuticals, but also physical harm from poorly made products.
                    While that report focuses on counterfeit medicines and electronics,
                    the same unregulated supply chains bring mass-produced “art” that contains
                    toxic paints, unstable wiring for lamps, and child labor.
                    But the deepest wound is cultural.
                    </p>
                    <h1 className='font-bold text-center m-1'>When “African Art” Becomes a Stereotype</h1>
                    <p className="c">
                        The global demand for airport art has another, more insidious effect:
                        it teaches the world to expect African art to be primitive, unchanging,
                        and generic.
                    </p>
                    <p className="c">
                        German-American art dealer Ruth Schaffner, who ran Nairobi’s
                        famous Gallery Watatu in the 1980s and 1990s, was criticized
                        for actively promoting only “unschooled” artists whose work
                        fit Western stereotypes of naive, tribal Africa. She rejected
                        formally trained Kenyan artists as “too Westernized”.
                        The result? For decades, the only Kenyan art that reached
                        global audiences was the very work that reinforced colonial-era myths.
                    </p>
                    <p>
                        Meanwhile, real contemporary Kenyan artists—like Peterson Kamwathi,
                        Michael Soi, or Magdalene Odundo—were creating cutting-edge political
                        commentary, abstract sculpture, and conceptual art. But the market for
                        “real” African art was crowded out by cheaper, flatter imitations.
                    </p>
                    <h1 className='font-bold text-center m-1'>The Counterfeit Spillover</h1>
                    <p>Here’s where the problem gets even more tangled. The same factories
                    that churn out fake Nike shoes and counterfeit pharmaceuticals in China
                    and Southeast Asia also produce “African-style” carvings. In fact, the
                    2024 ACA survey found that China was the most frequently cited country of
                    origin for counterfeit goods bought both online and offline in Kenya
                    (ACA, 2024, p. 52–54).</p>
                    <p>
                        One Kisii soapstone carver, quoted in Mahoney’s research, explained
                        that his cooperative used to sell unique pieces directly to tourists.
                        Now, he competes with identical resin sculptures imported from Asia—and
                        he loses every time on price.
                    </p>
                    <p>
                        “We were losing our raw materials to illegal logging, and then losing
                        our market to fakes. How do you feed your children when a machine can
                        do in a day what takes you a week?”
                    </p>
                    <h1 className='font-bold text-center m-1'>Why Fair Trade Labels Aren’t Enough</h1>
                    <p>
                        In the 1990s and 2000s, well-meaning NGOs and Western buyers introduced
                        fair trade certification to Kenyan crafts. The idea: a sticker would tell
                        consumers that the product was ethically made.
                    </p>
                    <p>
                        But Mahoney (2012) discovered a troubling reality. In Mombasa, exporters
                        would receive boxes of fair trade stickers from their U.S. buyers—and simply
                        relabel any product, regardless of its actual origin or production ethics.
                        One exporter admitted that he knew some items were made by chokoras
                        (street children) in exploitative conditions, but he slapped
                        the fair trade sticker on anyway.
                    </p>
                    <p>The sticker had become a marketing gimmick, not a guarantee.</p>
                    <h1 className='font-bold text-center m-1'>What You Can Do: A Practical Guide</h1>
                    <p>
                        So if you can’t trust the airport shop, and you can’t always trust
                         a fair trade sticker, how do you buy Kenyan art ethically?
                    </p>
                    <p>
                        Here’s a quick checklist before you buy:
                    </p>
                        <th className='w-full border '>
                        <tr className="flex justify-between border-b">
                            <td className=" border- w-full">If You See…</td>
                            <td className=" border-l  w-full">That’s a Red Flag</td>
                            <td className=" border-l w-full ">What to Look For Instead</td>
                        </tr>
                        <tr className="flex justify-between border-b font-[400] ">
                             <td className=" border- w-full">10 identical carvings side by side</td>
                            <td className=" border-l  w-full">Mass production</td>
                            <td className=" border-l w-full ">One-of-a-kind pieces with slight variations</td>
                        </tr>
                        <tr className="flex justify-between border-b font-[400]">
                            <td className=" border- w-full">“Made in Kenya” sticker only (no artist name)</td>
                            <td className=" border-l  w-full">Unaccountable supply chain</td>
                            <td className=" border-l w-full ">Artist’s name, signature, or cooperative stamp</td>
                        </tr>
                        <tr className="flex justify-between border-b font-[400]">
                            <td className=" border- w-full">Extremely low price ($10–$20 for large piece)</td>
                            <td className=" border-l  w-full">Underpaid labor</td>
                            <td className=" border-l w-full ">Fair price: $50–$200 for small originals</td>
                        </tr>
                        <tr className="flex justify-between border-b font-[400]">
                            <td className=" border- w-full">No story attached</td>
                            <td className=" border-l  w-full">Treated as decor, not art</td>
                            <td className=" border-l w-full ">A card or tag explaining the artist’s village and meaning</td>
                        </tr>
                        <tr className="flex justify-between font-[400]">
                            <td className=" border- w-full">Polished, perfect, plastic-feeling finish</td>
                            <td className=" border-l  w-full">Resin imitation or factory sanding</td>
                            <td className=" border-l w-full ">Natural imperfections, visible tool marks</td>
                        </tr>
                    </th>
                    <h1 className='font-bold text-center m-1'>The Renaissance Is Happening—Don’t Miss It</h1>
                    <p className="d">
                        Despite the airport art curse, a genuine cultural renaissance is underway in Kenya.
                        Artists like Shine Tani of Banana Hill Art Studio have built cooperative galleries
                        that sell directly to collectors worldwide, bypassing exploitative middlemen.
                        Women’s groups like Hawa and Chemi Chemi are reclaiming indigenous techniques
                        and selling on their own terms.
                    </p>
                    <p className="d">
                        The global market for African contemporary art is growing. In 2025, WIPO Director
                        General Daren Tang noted that counterfeiting globally is now valued at over
                        $500 billion annually, but he also pledged stronger protections for African
                        innovators. Change is slow, but it is coming.
                    </p>
                    <h1 className='font-bold text-center m-1'>
                        Final Thought: You Vote With Your Wallet
                    </h1>
                    <p className="d">
                        Every time you buy a mass-produced “airport painting,” you cast a vote for
                        exploitation, cultural erasure, and environmental waste.
                    </p>
                    <p className="d">
                        Every time you buy directly from a Kenyan artist or a verified cooperative,
                        you cast a vote for dignity, sustainability, and a future where a grandmother
                        in Kisii doesn’t have to abandon her carving tools to pick tea for a dollar a day.
                    </p>
                    <p>
                        The curse of the airport painting isn’t just about bad art.
                         It’s about the systematic devaluation of human creativity.
                    </p>
                    <p>
                        Don’t be a tourist. Be a patron.
                    </p>
                    <h1 className='font-bold text-start m-1'>References</h1>
                    <p className="">
                        Anti-Counterfeit Authority. (2024). Research on levels of awareness
                        and extent of counterfeiting in Kenya: Consumer-level survey report.
                        <a href=" https://www.aca.go.ke/images/downloads/publications/consumer-level-survey-report-2025-2.pdf" className='text-blue-600 underline'> https://www.aca.go.ke/images/downloads/publications/consumer-level-survey-report-2025-2.pdf</a>
                    </p>
                    <p className="p-2">
                        Hinda, E. (2025, June 7). Kenyans warned as global piracy and counterfeit
                        trade hits Ksh64.77 trillion. The Kenya Times. <a href="https://thekenyatimes.com/latest-kenya-times-news/kenyans-warned-as-global-piracy-and-counterfeit-trade-hits-ksh64-77-trillion/#jeg_forgotform" className='text-blue-600 underline'>https://thekenyatimes.com/latest-kenya-times-news/kenyans-warned-as-global-piracy-and-counterfeit-trade-hits-ksh64-77-trillion/#jeg_forgotform</a> 
                    </p>
                    <p className="">
                        Mahoney, D. (2012). Changing strategies in marketing Kenya’s tourist
                        art: From ethnic brands to fair trade labels. African Studies Review,
                         55(1), 161–190. <a href="http://journals.cambridge.org/abstract_S0002020600006776" className='text-blue-600 underline'>http://journals.cambridge.org/abstract_S0002020600006776</a> 
                    </p>
                    <p className="">
                        Swigert, M. H. (2011). Globalizing Kenyan culture: Jua Kali and the
                        transformation of contemporary Kenyan art: 1960–2010.
                        <a href="https://ecommons.luc.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1264&context=luc_diss" className='text-blue-600 underline'>https://ecommons.luc.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1264&context=luc_diss</a>
                    </p>
                    <p className="pb-64">
                        The Standard Entertainment. (2018, August). Perfect storm sinking
                         Kenya’s visual arts. The Standard.
                         <a href="https://standardmedia.co.ke/entertainment/news/article/2001422079/perfect-storm-sinking-kenyas-visual-arts" className='text-blue-600 underline'>https://standardmedia.co.ke/entertainment/news/article/2001422079/perfect-storm-sinking-kenyas-visual-arts</a> 
                    </p>
                    <div>
                        <a href="/blog1" className='text-gray-500-600 underline'>Next</a>
                    </div>
                </div>
            </div>
            <div className='hidden sm:block w-[450px]'>
                <div className='w-full h-40 bg-[#3f3f3f55]'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Card

