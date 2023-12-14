import React from "react";
import kawasaki125 from "../assets/img/2016-kawasaki-z125-pro-review-10-quick-facts-1.jpg";
import yamahavstar from "../assets/img/yamaha-v-star.jpg";
import suzukigsk from "../assets/img/suzuki-gsk.avif";
import kawasaki400 from "../assets/img/kawasaki-z400.jpg"
import honda500 from "../assets/img/CB500X-BR-5.jpg"
import drz400 from "../assets/img/DR-Z400S.png"
import hondacrf from "../assets/img/crf-250-x.webp"
import MotorcycleCard from "../components/MotorcycleCard";
import Sources from "../components/Sources";

export default function PopularModels() {
  return (
    <div className="content-body">
      <h1 className="page-title">Popular Starting Motorcycles</h1>

      <MotorcycleCard
        image={kawasaki125}
        imgOnLeft={true}
        category="Mini Bike"
        exampleBike="Kawasaki Z125 Pro"
        desc="Lightweight, nimble, this upright minibike is 125cc’s of pure fun.
              Featuring a 31.7 inch (80.5 cm) seat height, offset laydown single
              shock, digital LCD screen with analogue tachometer, and total
              weight of 224.8 lbs (102 kgs) — this bike is equally at home in
              the city or being hauled out to the country in the back of a
              truck!"
      />

      <MotorcycleCard
        image={yamahavstar}
        imgOnLeft={false}
        category="Cruiser"
        exampleBike="Yamaha V-Star 250"
        desc="Yamaha V-Star 250 cruiser motorcycle is a quarter-liter cruiser
              that has a V-Twin engine. This cruiser motorcycle has the
              traditional cruiser appearance and is one of the best cruising
              motorcycles available on the market for entry-level riders. It has
              a 27” seat height and sub-325lb curb weight. With an 85mph top
              speed and an economical 78mpg fuel consumption, you can go on a
              two-up riding tour with this bike. We’ve chosen Yamaha V-Star 250
              as one of our top picks of the best cruisers because of its
              sizable weight and suitability for new riders."
      />

      <MotorcycleCard
        image={suzukigsk}
        imgOnLeft={true}
        category="Sport"
        exampleBike="Suzuki GSX250R"
        desc="Another small displacement parallel twin, the GSX250R is a really
          lovely little sports bike crying out for a little more power: 24
          horsepower and 17 foot pounds isn’t going to set anyone’s world alight
          and the chassis could certainly handle more."
      />

      <MotorcycleCard
        image={kawasaki400}
        imgOnLeft={false}
        category="Standard"
        exampleBike="Kawasaki Z400 ABS"
        desc="The Kawasaki Z400 ABS encompasses all that is good about “naked”
          bikes. This affordable motorcycle delivers a smooth ride with
          aggressive styling, and the lightweight chassis and low seat height
          make for a comfortable ride for just about any beginner (or
          experienced!) motorcyclist."
      />

<MotorcycleCard
        image={honda500}
        imgOnLeft={true}
        category="Adventure"
        exampleBike="Honda CB500X ABS"
        desc="The 2021 Honda CB500X ABS has everything you need as a beginner
          adventure rider, and nothing you don’t! A high windshield, long-travel
          suspension, 32.8 in (83 cm) seat height, and 434 pound (197 kg) curb
          weight makes this bike a fan favorite that’s equally at home on the
          dirt or city streets."
      />


<MotorcycleCard
        image={drz400}
        imgOnLeft={false}
        category="Dual Sport"
        exampleBike="Suzuki DR-Z400S"
        desc="Although the 400s may not be categorized by many as a beginner dual
          sport due to its displacement numbers, the truth is that this
          motorcycle offers a forgiving power band, allowing beginners to ease
          into riding without feeling overwhelmed - and hence its inclusion
          (Also, we couldn't make up this list without the inclusion of Suzuki).
          At its heart is a 398cc four-stroke engine known for its reliability
          and versatility."
      />

<MotorcycleCard
        image={hondacrf}
        imgOnLeft={true}
        category="Dirt Bike"
        exampleBike="Honda CRF250X"
        desc="If you're looking for a dependable, lightweight, and comfortable bike
          to start your off-road journey with, the Honda CRF250X is a wise
          choice. For years, it has been considered one of the best beginner
          dirt bikes - offering smooth and reliable performance that will help
          any beginner become an experienced rider in no time! Honda has become
          a staple in the riding community, the CRF250X is especially perfect
          for those relatively new to off-roading, thanks to user-friendly
          features like its electric start. Experienced riders will also enjoy
          this bike, so it is truly something you could keep long-term."
      />

    <Sources sources={[{title: 'RideVision', url: 'https://ride.vision/blog/the-33-best-beginner-motorcycles-by-type/'}]}/>

    </div>
  );
}
