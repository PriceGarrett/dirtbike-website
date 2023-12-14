import React from "react";
import InformationCard from "../components/InformationCard";
import Sources from "../components/Sources";
import SubCard from "../components/SubCard";

export default function BuyingNew() {
    return (
        <div className="content-body information-page">
            <h1 className="page-title">Buying a New Motorcycle</h1>

            <p className="page-description">
                So you’ve decided to buy a brand new bike from a dealership. Congratulations – there are some incredible machines and deals out there. Here’s how to make it a smooth and joyous process.
            </p>


            <InformationCard
                sectionName="1. Research the bike beforehand"
            >
                <p>
                    Many new bike buyers splash out on a gorgeous new machine only to realize it’s too heavy, too uncomfortable, too unwieldy in town, too difficult to get down the side of the house, too unpleasant for pillions, too complicated, too basic… the list is endless. Take as many road tests as you can. You need to be honest with yourself about what you’ll really use the bike for and how experienced and skilled you are. The natural tendency is to get the biggest, flashest widget-laden device you can afford, but you might be much happier on a smaller, simpler bike (and you can spend your savings on riding holidays, kit, insurance etc).
                </p>
            </InformationCard>

            <InformationCard
                sectionName="2. Find a dealer you like"
                right={
                    <SubCard
                        title="Don’t feel pressured to ride the bike home"
                        content={["If you’d rather get used to the bike on your local roads without being watched by a showroom full of people, ask for it to be delivered."]} />
                }
            >
                <p>
                    Ask biking mates, ask at a local bike meet, ask customers at the dealer itself. Trust your instincts – if previous customers are ambiguous, or the salesperson doesn’t seem genuine, or you suspect their advice isn’t sensible, or you feel rushed into buying, go elsewhere. There are plenty of excellent dealers around who want to turn you into a long-term customer – and that means treating you properly. In our experience it’s worth spending a few more quid at a good dealer than saving money and getting poor service. The same thinking applies to internet bargains – you’ll save money, but you’ll potentially miss out on good local support. We’d try asking the local dealer to match the internet price.
                </p>
            </InformationCard>

            <InformationCard
                sectionName="3. Consider how you'll pay for the bike"
                left={
                    <SubCard
                        title="Timing"
                        content={["If you can be flexible when you buy, you could save money. Dealers are usually quieter mid-winter, so they’re keener to do deals, and they all have targets to meet which are usually based on quarterly sales.", "This makes the end of March, June, September and December a good time to negotiate."]}
                    />
                }
            >
                <h3>Buy the bike outright</h3>
                <p>This could be with a loan you take out yourself, or with the pile of cash under the mattress (incidentally, that’s not as attractive to dealers as it used to be because banks charge 1% to count it – a bank transfer is best). With money up front you are often in a strong position to haggle, but not always. Some bikes are in short supply, so dealers won’t negotiate, and these days dealers are usually keener to get you onto a PCP (see iii) to increase the chances of you coming back year after year. But haggling is worth trying.</p>

                <h3>Buy on HP (hire purchase)</h3>
                <p>
                    You pay a deposit, then monthly repayments for, say, three years. After that, the bike is yours. It’s simple and easy to understand. Don’t forget you can haggle on the ticket price and the interest rate.
                </p>

                <h3>Buy on PCP</h3>
                <p>
                    Personal Contract Purchase gets you a new bike for the lowest monthly outlay and is great if you want a new bike every three years. But it’s complicated. You pay a small deposit, then the monthly payments cover the interest and the bike’s depreciation for – usually – three years. The key is that you’re only paying for the amount the bike is predicted to drop in value, which is why it’s cheaper per month than HP. At the end of the term, you have three choices. You can pay off the rest of the amount and own the bike, you can give it back and walk away, or you can give it back and take out a new PCP on a new bike (for hopefully about the same monthly repayments). As with HP, you can negotiate on ticket price and interest rate.
                </p>

            </InformationCard>


            <Sources sources={[{ title: "BikeSocial", url: "https://www.bennetts.co.uk/bikesocial/news-and-views/advice/buying-and-selling-a-bike/new-motorcycle-from-dealership" }]} />

        </div>
    )

}