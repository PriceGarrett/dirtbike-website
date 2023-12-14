import ImageCard from "../components/ImageCard";
import InformationCard from "../components/InformationCard";
import PageContent from "../components/PageContent";
import home1 from "../assets/img/Homepage1.jpg";
import home2 from "../assets/img/homepage2.jpg"
import SubCard from "../components/SubCard";
import MotorcycleCard from "../components/MotorcycleCard";

export default function Home() {
  return (
    <div className="content-body">
      <h1 className="home-title">Welcome to RevUp!</h1>
      <InformationCard
        sectionName="Your Ultimate Introduction to Motorcycling!"
      >


        <p>
          Whether you're a curious enthusiast or someone eager to embrace the freedom of the open road, RevUp is here to fuel your passion for motorcycles. We're dedicated to being your go-to resource for everything related to the thrilling world of two wheels.
        </p>

        <MotorcycleCard
          image={home1}
          imgOnLeft={true}
          category="Getting Started"
          exampleBike={""}
          desc="At RevUp, we understand that diving into the world of motorcycling can be exhilarating yet overwhelming. That's why we've crafted a platform tailored to beginners. From choosing your first bike to mastering advanced riding techniques, we've got you covered every step of the way."
        >
        </MotorcycleCard>

        <MotorcycleCard
          image={home2}
          imgOnLeft={false}
          category="Getting Started"
          exampleBike={""}
          desc="Our mission is to empower you with knowledge, safety tips, gear recommendations, and insights from experienced riders. Discover comprehensive guides on motorcycle types, maintenance essentials, safety protocols, and the latest trends in the biking community. Whether you're into cruisers, sportbikes, adventure touring, or café racers, find your perfect ride and make the most out of your motorcycling journey with RevUp."
        >
        </MotorcycleCard>


        <p>

        </p>

      </InformationCard>
    </div>
  );
}
