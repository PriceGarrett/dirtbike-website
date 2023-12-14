import React from "react";
import InformationCard from "../components/InformationCard";
import Sources from "../components/Sources";
import MotorcycleCard from "../components/MotorcycleCard";
import engine from "../assets/img/engine-sizes.jpg"
import ImageCard from "../components/ImageCard";

export default function EngineSize() {
    return (
        <div className="content-body information-page">
            <h1 className="page-title">What size engine should I get?</h1>

            <p className="page-description">
                When choosing a bike, you'll see a wide range of engine sizes out there.  The bigger the engine, the more power the bike will generate.
            </p>

            <InformationCard sectionName={"Engine Sizes"}
                left={
                    <ImageCard image={engine}/>
                }>

                <p>
                    Due to the many different weights and sizes of motorcycles (and the riders themselves), there is no "beginner-sized" engine for everyone.  If this is your first street motorcycle, something between the 250-300 cc range would be good.  If you are selecting a heavier motorcycle like a cruiser or touring bike, you'll want a larger motor around 600cc to compensate for the extra weight.  For your first dirtbike, a 125-250cc four stroke would be a great starting size. Make sure to test ride the bike before purchasing to be sure you can handle the power.
                </p>

                <p>
                    Once you’ve determined the best engine and carrying capacity for your bike the next step is sizing things up. Motorcycling is all about balance and your feet (not just tip toes) should be able to touch the ground. Riding when you can’t easily access the controls is another crucial indicator that a bike is not ideal for you. Stretching too far to access the controls or feeling awkward while seated on a bike will make it hard for you to ride safely and comfortably.
                </p>
            </InformationCard>

            <Sources sources={[{ title: "EricoMotorsports", url: "https://www.ericomotorsports.com/blog/what-size-motorcycle-do-i-need--43527" }]} />
        </div>
    );
}