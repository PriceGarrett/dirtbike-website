import React from "react";
import InformationCard from "../components/InformationCard";
import MotorcycleCard from "../components/MotorcycleCard";

import filltank from "../assets/img/Fillling-gas-tank-motorcycle.jpg";
import oilchange from "../assets/img/Motorcycle-Oil-Change.jpg"
import battery from "../assets/img/motorcycle-battery-maintenance-tips-02-1654509842.jpg";
import tires from "../assets/img/tirepressure.jpg";
import chain from "../assets/img/chain.jpg";
import brakefluid from "../assets/img/brakefluid.jpg";
import cables from "../assets/img/cables.webp";
import polish from "../assets/img/polish.jpg";
import Sources from "../components/Sources";

export default function Maintanence() {
    return (
        <div className="content-body information-page">
            <h1 className="page-title">Routine Maintenance</h1>

            <p className="page-description">
                Before you take your motorcycle out for that first ride of the season, use this motorcycle maintenance checklist to help keep yourself (and those around you) safe on the road.
            </p>

            <MotorcycleCard
                image={filltank}
                imgOnLeft={true}
                category="1"
                exampleBike="Start with Fresh Fuel"
                desc="If you didn’t drive your motorcycle all winter, the first thing to do is change the fuel. Gasoline gets stale when it sits in the tank too long. Use a siphon pump to get rid of any old gas, and then fill the tank with fresh fuel."
            />

            <MotorcycleCard
                image={oilchange}
                imgOnLeft={false}
                category="2"
                exampleBike="Change the oil"
                desc={"Just as you need clean fuel, you also need to change the oil and replace the oil filter before you take your bike out for your first ride. Neglecting this step can affect the performance and longevity of your motorcycle."}
            />

            <MotorcycleCard
                image={battery}
                imgOnLeft={true}
                category="3"
                exampleBike="Check the battery life"
                desc="Some riders disconnect their motorcycle batteries for the winter and recharge them every month or two. Once you reconnect the battery, you’re probably ready to roll. However, if it’s been sitting all winter long, you might have a dead battery on your hands. If it’s a fairly new battery, charging it up is fine. If it’s three or four years old, you may find it doesn’t keep a charge, or you might have a hard time charging it. In that case, you’re probably better off purchasing a new battery and playing it safe."
            />

            <MotorcycleCard
                image={tires}
                imgOnLeft={false}
                category="4"
                exampleBike="Check your tires"
                desc="Tires are some of the most important parts of any vehicle, so they deserve your time and attention. Check their air pressure to make sure it’s at a safe level for riding. You’ll also want to check your tread to determine if it’s still got enough depth to offer you sufficient traction. If your air pressure and tread are all set, then just look for any cracks or rot in the sidewall of the tires before moving on."
            />

            <MotorcycleCard
                image={chain}
                imgOnLeft={true}
                category="5"
                exampleBike="Inspect your chain"
                desc="Your bike’s chain is one of its most critical components, but constant exposure to the elements can cause it to deteriorate or become loose. Check it to ensure it’s still tight and well-lubricated. You may need to clean the chain and reapply lubricant."
            />

            <MotorcycleCard
                image={brakefluid}
                imgOnLeft={false}
                category="6"
                exampleBike="Get plenty of fluids"
                desc="Oil and gas aren’t the only fluids your motorcycle depends on. Brake fluid and coolant are important for motorbike maintenance, but they can sometimes leak if your bike is left standing for a long period of time. Double-check your levels and refill or top them off. Or, flush out the old fluids and replace them with fresh fluids."
            />


            <MotorcycleCard
                image={cables}
                imgOnLeft={true}
                category="7"
                exampleBike="Don't forget your cables"
                desc="Oil and grease in your cable housing can dry up over time, and that can affect the performance of your clutch and throttle. Inspect your clutch, brakes, throttle, choke, and any other cables to ensure they’re still responsive and not frayed."
            />


            <MotorcycleCard
                image={polish}
                imgOnLeft={false}
                category="8"
                exampleBike="Make your bike shine"
                desc="As a final step, make sure you give your motorcycle a thorough cleaning. Not only does it protect your paint and make your bike look fantastic, but cleaning your bike frequently keeps it in better working conditions."
            />

            <Sources sources={[{ title: "Nationwide", url: "https://www.nationwide.com/lc/resources/powersports/articles/motorcycle-maintenance-checklist" }]}/>

        </div>
    );
}