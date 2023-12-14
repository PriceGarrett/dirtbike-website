import React from "react";
import Sources from "../components/Sources";
import MotorcycleCard from "../components/MotorcycleCard";
import ProConList from "../components/ProConList";

import mini from "../assets/img/mini.jpg"
import harley from "../assets/img/bolt.jpg";
import honda from "../assets/img/sport.jpg";
import standard from "../assets/img/standard.jpg";
import adventure from "../assets/img/dventure.jpg";
import dualsport from "../assets/img/dualsport.jpg";
import dirtbike from "../assets/img/dirtbike.webp"

const MotorcycleTypes = () => {
  return (
    <div className="content-body">
      <h1 className="page-title">Different Types of Motorcycles</h1>

      <p className="page-description">
        While all motorcycles share some key similarities, each type has
        strengths, weaknesses, and unique features to fit just about every kind
        of rider out there (and for the rest, there are customs!). Check out the
        complete list of motorcycle types below:
      </p>


      <MotorcycleCard
        image={mini}
        imgOnLeft={true}
        category={"Mini"}
        exampleBike={""}
        desc="Covering a broad category, commuters and/or “mini” bikes are usually low-cc smaller motorcycles capable of nimbly navigating traffic and saving on both costs and fuel consumption. Many of these bikes have 125-250cc’s, making them perfect for new and city riders. "
      >
        <ProConList
          pros={[
            "Small",
            "Nimble",
            "Lightweight",
            "Cost effective",
          ]}
          cons={["Limited power", "Possible low visibility"]}
        />
      </MotorcycleCard>

      <MotorcycleCard
        image={harley}
        imgOnLeft={false}
        category={"Cruisers"}
        exampleBike={""}
        desc="One of the most popular motorcycle types in the world, and for good reason. Cruisers are known for being
        comfortable, varietal, and popular. Top cruiser brands include Harley-Davidson, Indian, and most metric
        manufacturers (like Honda, Suzuki, Yamaha, and Kawasaki). Typically cruisers are heavier bikes, with resulting
        lower power to weight ratios, and a focus on comfort and low-end torque."
      >
        <ProConList
          pros={[
            "Comfort",
            "Ease",
            "Wide variety of models",
            "Community Gatherings",
          ]}
          cons={["Weight", "Power-to-Weight ratio", "Costs"]}
        />
      </MotorcycleCard>

      <MotorcycleCard
        image={honda}
        imgOnLeft={true}
        category={"Sport"}
        exampleBike={""}
        desc="One of the most well-known and varietal categories of motorcycles, sportbikes can be cost-effective, reliable, powerful, and fast. These easily customizable bikes come in a variety of sizes, making them popular with riders of all types. Metric manufacturers dominate the market for sportbike production, while premium brands include BMW, Aprilia, and Ducati. Popular models worldwide include the Honda CBR, Kawasaki Ninja, and Yamaha YZF."
      >
        <ProConList
          pros={["Varying sizes", "Nimble", "Lightweight"]}
          cons={["Comfort"]}
        />
      </MotorcycleCard>

      <MotorcycleCard
        image={standard}
        imgOnLeft={false}
        category={"Standard"}
        exampleBike={""}
        desc="The standard bike is arguably one of the most versatile and simple types of motorcycles that a rider can buy. Also termed “standard” bikes or “streetfighters,” these motorcycles typically have no fairings, minimal to no windshields, and a more upright body positioning. Naked bikes tend to cross over into the “sportbike” column, with most bikes functioning on the track just as well as the street."
      >
        <ProConList
          pros={["Comfortable", "Nimble", "Lightweight", "Low seat height"]}
          cons={[
            "Lack of fairings",
            "Little to no windshield",
            "Minimal luggage options",
          ]}
        />
      </MotorcycleCard>

      <MotorcycleCard
        image={adventure}
        imgOnLeft={true}
        category={"Adventure"}
        exampleBike={""}
        desc="Adventure bikes were designed for exactly what their name suggests— adventures! These sturdy bikes are typically outfitted with a tall seat height, tall windshield, ample suspension travel, upright seating positioning, and plenty of luggage options. Most ADV bikes will also come equipped with on-road/off-road tires"
      >
        <ProConList
          pros={["Versatile", "Luggage capacity", "comfort"]}
          cons={["Heavy", "Limited off-road capabilities"]}
        />
      </MotorcycleCard>

      <MotorcycleCard
        image={dualsport}
        imgOnLeft={false}
        category={"Dual Sport"}
        exampleBike={""}
        desc="Dual sports and enduros are about as close as you can get to a true dirtbike while still being street legal. These motorcycles are usually tall, narrow, lightweight, and feature upright seating and low to no windshields. Models can be ridden with street tires, dirt tires, or a mix of both depending on rider preference."
      >
        <ProConList
          pros={[
            "Upright seating",
            "Off-road capabilities",
            "Lightweight",
            "Nimble",
          ]}
          cons={["Tall", "No windshield", "Small gas tank"]}
        />
      </MotorcycleCard>

      <MotorcycleCard
        image={dirtbike}
        imgOnLeft={true}
        category={"Dirtbike"}
        exampleBike={""}
        desc="True dirtbikes typically come in either 4-stroke, 2-stroke, or electric models. These motorcycles are designed solely for off-road riding, and lack the headlights, taillights, mirrors, and turn signals to make them street-legal."
      >
        <ProConList
          pros={[
            "Lightweight",
            "Nimble",
            "Large Variety",
          ]}
          cons={["Limited to offroad riding", "Tall", "Kickstarts", "Small gas tanks"]}
        />
      </MotorcycleCard>


      <Sources
        sources={[
          {
            title: "RideVision",
            url: "https://ride.vision/blog/13-motorcycle-types-and-how-to-choose-one/",
          },
        ]}
      />
    </div>
  );
};

export default MotorcycleTypes;
