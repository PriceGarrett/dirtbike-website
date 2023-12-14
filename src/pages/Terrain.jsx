import React from "react";
import InformationCard from "../components/InformationCard";
import SubCard from "../components/SubCard";
import { Link } from "react-router-dom";

const Terrain = () => {
  return (
    <div className="content-body information-page">
      <h1 className="page-title">Where do I want to ride?</h1>

      <p className="page-description">
        This page is supposed to help you pick out a bike that fits your desired
        riding style. It does not include every motorcycle or every riding style
        known to man, but it can help you get started.
      </p>

      <InformationCard sectionName="Short Distances" extras={<SubCard title="Related Links" content={[<Link to={"types"}>Types of Motorcycles</Link>, <Link to={"popular"}>Best Beginner Motorcycles</Link>]}/>}>
        <p>
          If you plan on only riding in your city limits and not every taking
          freeways, a <strong>Mini</strong> bike would be a great fit. Mini
          bikes have great gas mileage, are easy to learn, and don't have too
          much power so they will not overwhelm.
        </p>

        <p>
          If you plan on going a little further, maybe a short distance out of
          your city limits, or have to be on the bike for longer periods of
          time, a <strong>Standard</strong> bike may be a good starting point.
          These have bigger engines than minis, are more comfortable for longer
          periods of time, and are much more versatile. However, they don't have
          all the bells and whistles of some of the other street bikes.
        </p>

        <p>
          If a standard bike doesn't have enough power for you, you may want to
          look into a <strong>Sport</strong> bike. These will be faster and have
          some features like a windshield compared to a standard bike, but won't
          be quite as comfortable. Keep in mind that the power can be a bit too
          much for a beginner, so maybe one of the less powerful models would be
          a good place to start.
        </p>
      </InformationCard>

      <InformationCard sectionName="Longer Trips">
        <p>
        If you'd prefer more comfort over speed, than a <strong>Cruiser</strong> might be the bike for you.  These are some of the most popular motorcycles in the world due to their comfort, relative ease to ride, and also due to the large communities of riders.  These cruisers are very heavy and can be very expensive, so keep that in mind when selecting a bike.
        </p>

        <p>

        If you want to make extremely long road trips on your motorcycle, a <strong>Touring</strong> or <strong>Sport Touring</strong> bike will be the way to go. These bikes come with all sorts of comforts, from luggage compartments to heated seats and cup holders. They are even more expensive and heavier than a cruiser, but if extreme comfort for long distances is what you want, then find a touring bike for you.
        </p>

        <p>
        If you are someone who wants to explore, camp, and find new trails, then the <strong>Adventure</strong> bikes are what you're looking for.  These bikes are similar to the touring bikes with luggage racks, windshields, and comfortable suspension, but they also have some limited off-road capabilities.  If where you're going takes you on some mountain roads along with some dirt trails, adventure bikes will be the way to go.  
        </p>
      </InformationCard>

      <InformationCard sectionName="Rougher Terrain">
        <p>
          Sometimes the adventure bike isn't as adventurous as you need. If
          that's the case, <strong>Dual Sport</strong> or{" "}
          <strong>Enduro</strong> bikes will get you where you want to go. These
          bikes have minimal comforts, are lightweight, and are great at most
          off-road trails while still being a street-legal bike. However, these
          are stuck in between two worlds; it has stripped away too many
          comforts to be a fantastic road bike while also being a bit too heavy
          and big to handle the hardest off-road trails. If you don't plan on
          pushing your limits on trails and don't mind the slightly
          uncomfortable ride on the road, this is the bike for you.
        </p>

        <p>
          However, if you only plan on riding off-road, then{" "}
          <strong>Dirt bikes</strong> are the best choice hands down. These
          bikes are meant to be taken out to the mountains, desert, or motocross
          track for some off-road fun. They aren't street legal, so you will
          need a way to transport them to your destination. Once there, they'll
          be able to handle any terrain you might throw at them. Different dirt
          bikes have different strengths, so depending on where you'll be riding
          you'll want to find a bike that fits that style best.
        </p>
      </InformationCard>

      {/* ... (rest of the content) ... */}


    </div>
  );
};

export default Terrain;
