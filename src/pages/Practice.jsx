import React from "react";
import InformationCard from "../components/InformationCard";
import trainingcourse from "../assets/img/training-course.webp";
import controls from "../assets/img/controls.jpg";
import ImageCard from "../components/ImageCard";
import Sources from "../components/Sources";

export default function Practice() {
    return (
        <div className="content-body information-page">
            <h1 className="page-title">Protective Gear</h1>

            <p className="page-description">
                Below are some steps you'll need to get started riding.  <strong>We highly recommend taking a training course before trying to ride on your own.</strong>
            </p>

            <InformationCard
                sectionName="Step 1: Gear Up"
            >
                <p>
                    First things first: motorcycling comes with a certain amount of risk. It’s up to you to minimize that risk as much as possible. To do that, you’ll need proper motorcycle gear to stay protected in case of a crash.
                </p>
                <p>
                    Even if it’s your very first lesson, gear up. Wear a helmet, gloves, sturdy boots that cover your ankles, and motorcycle pants and jacket. If you’re not sure what type of riding you’ll be doing the most once you get your license – on road, off-road, adventure, street, enduro – stick with some basics. Kevlar or Dyneema – reinforced motorcycle jeans and jackets, abrasion-resistant textiles, or armored motorcycle gear will work for starters.
                </p>
            </InformationCard>

            <InformationCard
                sectionName="Step 2: Learn to Brake"
                right={<ImageCard image={controls}/>}
            >
                <p>
                    Now that you’re sitting aboard your motorcycle, it’s time to get it moving. But before you can move, you need to know how to brake. The pedal on your right side is the rear brake, and the lever on your right handlebar is your front brake. To slow down or stop altogether, use both brakes evenly and always make sure you’re stepping on the rear brake and pulling in the front brake lever gently and gradually: never grab or stomp on your brakes, because the wheels may lock up sending you off balance.
                </p>
                <p>
                    Gently tap the rear brake pedal and pull in the front brake lever slowly to master braking in a controlled, smooth movement rather than jerking the bike to a halt. Practise your braking while the bike is standing still: roll forward a little, then tap the rear brake to get a feel for it. Repeat this with your front brake and try to find that sweet spot where the brakes engage but to not grab the wheel discs too suddenly.
                </p>
            </InformationCard>

            <InformationCard
                sectionName="Step 3: Clutch and Throttle"
            >
                <p>
                    Now that you feel confident about braking, it’s time to start your bike and learn the controls. Shifting gears is what terrifies most new riders the most, but the reality is, learning how to shift is much easier than you think. Motorcycles usually have five gears; the first gear is down, then you shift up for neutral, second, third, fourth, and fifth.
                </p>

                <p>
                    To engage the gears, you’ll need to pull the clutch lever in. To start moving, pull the clutch lever in, engage the first gear, then gently roll the throttle releasing the clutch at the same time (just like with a car!). Once the bike starts moving, gently let the clutch out while adding a little bit of throttle. Once you reach higher RPM’s, pull the clutch lever in fully, lay off the throttle, and engage second gear. To slow down, shift down until you’re in first gear, then pull in neutral once you’re stopped. Rinse and repeat until it becomes second nature!
                </p>
            </InformationCard>

            <InformationCard
                sectionName="Step 4: Turning"
                left={
                    <ImageCard image={trainingcourse}/>
                }            
            >
                <p>
                    When you’re learning how to ride a motorcycle, mastering the controls is the biggest lesson. Once you get a feel for it, however, you can start learning the rest of the basics, and one of the most important things to figure out is turning. Riding a bike in a straight line is one thing, but what about corners, U-turns, and pirouettes in a parking lot?
                </p>
                <p>
                    To keep the bike steady and stable in corners, do not rely on turning your handlebars only. As you round a corner, the bike will lean into it a little, and you need to lean with it. Don’t fight your bike, but rather go with the movement. Remember to keep your throttle steady and always look through to where you’re going: if you keep staring at your front tire, chances are, you’ll stall or crash. Looking through the corner helps you stay balanced and steer the bike in the direction you want to go.
                </p>
            </InformationCard>

            <InformationCard
                sectionName="Step 5: Practice, Practice, Practice"
            >
                <p>
                    Now that you’ve completed an MSF course and gotten your license, it’s time to hit the road. As a new rider, you need to get as much practice as you can, but take it slowly: first, ride quiet, two-lane roads and practice navigating traffic safely before you hit highways and interstates. The more you ride, the more you will get to know your bike, controls will become muscle memory, and you will feel more and more confident on all kinds of roads and traffic conditions. Remember to build slowly, however: getting yourself into stressful situations in busy traffic or high-speed freeways can scare you off motorcycling, so take it slow, hone your skills, and enjoy the ride as much as you can.
                </p>
            </InformationCard>

            <Sources sources={[{title:"Monimoto", url:"https://monimoto.com/blog/motorcycle-advice/how-to-ride-a-motorcycle/"}]}/>

        </div>
    )
}