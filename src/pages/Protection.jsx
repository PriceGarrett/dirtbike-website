import React from "react";
import InformationCard from "../components/InformationCard";
import SubCard from "../components/SubCard";

import jacket from "../assets/img/jacket.jpg";
import ImageCard from "../components/ImageCard";
import Sources from "../components/Sources";

export default function Protection() {
    return (
        <div className="content-body information-page">
            <h1 className="page-title">Protective Gear</h1>

            <p className="page-description">
                If you or someone you know is just getting into motorcycling, there’s so much to learn. Maybe you’re not a new rider, but you have had a recent, let’s say, “unplanned offroading experience” and are thinking some (or some better) gear may have improved that outcome. Choosing good riding gear can seem like an enormous obstacle, but we’re here to break it down for you, and give you some general information so that you can make informed choices.
            </p>

            <p className="page-description">
                Good gear will keep you comfortable in a wide range of situations, and when you’re comfortable you’re a better rider. Gear that is uncomfortable, ill-fitting, or otherwise fails at its intended purpose is at best a distraction, and the last thing a motorcyclist needs is a distraction.
            </p>

            <InformationCard
                sectionName="Why Bother?"
                right={
                    <SubCard
                        title="Where to shop?"
                        content={[
                            <a href="https://www.rockymountainatvmc.com/">Rocky Mountain ATV and MC</a>,
                            <a href="https://www.cyclegear.com/">CycleGear</a>,
                            <a href="https://www.revzilla.com/">RevZilla</a>,
                            <a href="https://www.motosport.com/">Motosport</a>,
                            "Your local dealer"
                        ]}
                    />
                }
            >
                <p>
                    Good motorcycle gear helps protect you from sun, rain, wind, noise, and debris, as well as pavement. It’s designed for more than just crash protection: it’s your second skin and protects you from sunburn, deafness from the wind, and anything that is flying through the air.
                </p>
                <p>
                    Crash protection is the biggest benefit, however, and those of us who have come into contact with the pavement and have been saved by our gear will tell you: it is better to have it and not need it. The human body does not do well when it encounters a sudden stop from speed. Remember falling down from a running speed as a kid? Remember the bloody knees and palms, and the torn jeans? Think about how fast you were going at the time, and remember that even short trips on a motorcycle will exceed that by several orders of magnitude.
                </p>
                <p>
                    At speed, the road surface is a really big belt sander. Good gear is designed for abrasion resistance and is armored against impacts at your joints. Staying off that belt sander isn’t always an option, so good protection is the right way to go.
                </p>
            </InformationCard>

            <InformationCard
                sectionName="Helmets"
                left={
                    <SubCard
                        title="Sizing"
                        content={["The shape and size of every person’s head is unique. Spend the time to find a helmet that fits you perfectly; sizes and shapes vary heavily between manufacturers and models. Other considerations to bear in mind are weight, noise, and aerodynamics. You’ll find those addressed in motorcycle helmet reviews.", "Choose the right helmet for the kind of riding you plan to do. Street helmets and dirt helmets are purpose made, and will protect you better, and keep you comfortable, in their own environment."]}
                    />

                }
            >
                <p>
                    According to a study published by Dietmar Otte, 45 percent of all impacts to motorcycle helmets occur around the face and chin, which are not protected by open-face or three-quarter type helmets. If your face hits the pavement at speed, you want to be wearing a full-face helmet. They’ll also keep the wind and bugs out of your eyes, and sunburn off your face. Modular helmets are becoming more popular, since they offer the convenience of a three-quarter helmet but the protection of a full-face.
                </p>
                <p>
                    According to the manufacturers, helmets have a five-year life. After that, the adhesives and materials that provide impact absorption can begin to degrade, impacting the performance of the helmet when it counts.
                </p>
                <p>
                    Helmets are designed to destroy themselves in a crash, dissipating energy that would otherwise be transferred to your head. Sometimes a helmet can experience a crash without external signs of damage but still sustain unseen effects. Never buy a used helmet. Note that it is the act of impacting a helmet with a head inside that crushes that foam, and it does not recover. Don’t let your kids bash into the walls while wearing your new helmet, but don’t worry too much if your helmet falls a short distance onto the floor, while empty.
                </p>

                <p>
                    The minimum legal standard for a street helmet in the US is a DOT rating. You’ll see the sticker affixed prominently on the back. That’s just a minimum legal standard, though. Two other voluntary standards exist in the United States: “ECE 22.05” is the European Union’s legal standard, and the Snell Foundation also tests helmets in the US.
                </p>
            </InformationCard>

            <InformationCard
                sectionName="Jackets"
                right={
                    <ImageCard image={jacket} />
                }
            >
                <p>
                    Motorcycle jackets are made of leather and/or textile. High-quality textile materials are able to resist abrasion as strongly as leather, and often include water-resistant membranes capable of keeping you dry in bad weather. Textile jackets are often more affordable. Leather is more durable, but not as adjustable for comfort in all kinds of weather.
                </p>

                <p>
                    Motorcycle-specific jackets come with features you won’t find elsewhere: seams are doubled up to protect the stitching from abrasion and increase strength; they’re designed to fit snugly in high-speed wind blast so they don’t flap around; they have adjustable air vents. They should also have body armor with a CE safety rating—impact absorbing material that cushions your most vulnerable parts in a crash.
                </p>

                <p>
                    The jacket should fit snugly but leave your arms free to articulate fully. Consider the style of bike you ride and choose a jacket cut to work in its riding position. Think about what kind of weather you’ll most frequently be riding in. Jackets made from mesh, perforated leather, or with lots of vents are good for warm weather but not the cold or wet, and vice versa.
                </p>

                <p>
                    Some jackets feature zippers around the bottom, or at the back, enabling them to connect to a pair of riding pants. This keeps the jacket from riding up in a crash. If your jacket zipper doesn’t match your pants, your local tailor can take care of that for you.
                </p>
            </InformationCard>

            <InformationCard
                sectionName="Pants"
            >
                <p>
                    Regular denim jeans will not protect you in a motorcycle accident. Cotton has less than a quarter of the abrasion resistance of leather or good textile riding pants.
                </p>

                <p>
                    Generally, textile riding pants are made from Cordura, which is the name brand for a highly abrasion resistant type of nylon fabric. Jeans that include Kevlar panels offer more abrasion resistance, but are still a compromise, offering nothing like the protection of a true pair of riding pants.
                </p>

                <p>
                    Like jackets, pants are available in leather or textile materials and should be equipped with CE-rated armor in the hips and knees. They should fit snugly, but be comfortable. Try them on a bike, or stand in a riding position close to that of your own to determine if they’ll work, and make sure the armor stays in the right place and does not dig in.
                </p>
            </InformationCard>

            <InformationCard
                sectionName="Gloves"
            >
                <p>
                    Your hands extremely fragile. Unfortunately, evolution dictates that they’re the first thing to touch down in any crash: your hind-brain has programmed you to protect your head at the expense of your hands. Good gloves should cover your hands completely. They should be made of strong, abrasion-resistant materials and strong, protected stitching. Shoddy, uneven stitching and thin leather is a sign of a glove that will give up on impact. Armor at the base of the palm is a great feature; this is where your hands will land in a crash. Make sure any glove you choose allows you to operate the controls on your bike unimpeded.
                </p>
            </InformationCard>

            <InformationCard
                sectionName="Suits and Armor"
            >
                <p>
                    A one-piece leather motorcycle suit is great for the track, but tends to lack comfort and protection from the elements. For all other riding, one-piece textile suits can’t be beat for ease of use, comfort, and convenience.
                </p>

                <p>
                    Motorcycle body armor protects you from impacts by absorbing energy that would otherwise be transferred to you. Whether purchased separately or included in an item of riding gear, you want it to fit so that it won’t move around in a crash. It should be comfortable and not restrict movement.
                </p>

                <p>
                    If your gear has pockets to accommodate armor, you can upgrade it. The best upgrade you can make is to the back protector. If the one in your jacket is floppy foam, you can fit a better one in the pocket or opt for one that fits you independently of the jacket.
                </p>
            </InformationCard>

            <Sources sources={[{ title: "Rideapart", url: "https://www.rideapart.com/reviews/255121/a-beginners-guide-to-motorcycle-gear/" }]} />
        </div>
    )
}