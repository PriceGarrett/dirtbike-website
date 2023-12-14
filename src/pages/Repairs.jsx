import React from "react";
import InformationCard from "../components/InformationCard";
import Sources from "../components/Sources";

export default function Repairs() {
    return (
        <div className="content-body information-page">
            <h1 className="page-title">Common Repairs</h1>

            <p className="page-description">
                With a motorcycle come many repairs.  Motorcycles can be very tempramental, but this list has common issues that may be the culprit if your bike hasn't been working as well as it should.
            </p>

            <InformationCard
                sectionName="Fuel Tank Rust"
            >
                <p>
                    Rust as a general issue is common in older bikes and can occur practically anywhere. If you leave your bike for a long period with a half-full tank it can lead to problems over time. It’s more likely to happen if you are parked in an area where there is relatively high humidity.

                </p>

                <p>
                    It’s important to check your tank at regular intervals and, if there is a rust problem, get it sorted straight away. The best way to stop it from developing at all is to ensure that your tank is filled with gas most of the time, especially if you are leaving your bike parked up for a while.
                </p>
            </InformationCard>

            <InformationCard
                sectionName="Vacuum Leaks"
            >
                <p>
                    Your carburettors produce an air/fuel mix for optimum running. A vacuum leak happens when extra air gets in, most often around the carburettor holder.

                </p>

                <p>
                    This has a rubber seal that can dry out and degrade over time so it’s important to check every so often. Leaks can often be misdiagnosed but if you have a problem with erratic idling or loss of power it’s worth checking out if this is the problem. It’s a good idea to take your bike to your local friendly mechanic to get a proper diagnosis and repair if you are not sure.
                </p>
            </InformationCard>

            <InformationCard
                sectionName="The Carburettor"
            >
                <p>
                    These are complex bits of the engine and most older bikes suffer from problems at some point. The carburettor mixes the petrol and air to ensure the smooth running of the engine.
                </p>

                <p>
                    Like most mechanical parts they wear down over the years and that can lead to the carburettor having too much air to too much oil. If the parts are worn down or there’s something like a seal that needs replacing, it’s important to get this carried out by a garage that knows what it’s doing.
                </p>
            </InformationCard>


            <InformationCard
                sectionName="Fork Oil Leaks"
            >
                <p>
                    The forks on your older bike are also quite complicated parts. They are filled with a viscous oil that helps handle the weight of the front end. The wrong oil or a leak can cause friction and damage your bike. You’ll know there is something wrong if you start feeling every bump in the road.
                </p>

                <p>
                    The forks are probably the most ignored part of the bike when it comes to riders and problems can often develop because of it. It’s important to have these checked out whenever you have a service. If you do start to feel every contour on the road and your ride becomes uncomfortable, you should check the oil levels or whether there is a leak. On some bikes, the fork assembly can be complicated so if you are not mechanically minded it’s important to consult an expert mechanic.
                </p>
            </InformationCard>

            <InformationCard
                sectionName="Old Tires"
            >
                <p>
                    Perhaps more than with cars, worn tyres are a pretty big danger when it comes to two-wheeled motorbikes. New tyres are a lot tougher than they used to be but it’s still important to check the tread regularly and replace wheels that look worn or have some damage on them.
                </p>

            </InformationCard>

            <InformationCard
                sectionName="Engine Oil Leaks"
            >
                <p>
                    Another common problem you might encounter is an oil leak from the engine. This can be down to a faulty gasket on the crankcase, oil pan or cylinder head, for example. It’s critical to get this diagnosed properly, however, if you are unsure where the issue is located. An oil drain plug can be replaced in about 15 minutes but the cylinder head gasket can be more problematic because you have to take the engine apart.
                </p>

            </InformationCard>

            <Sources sources={[{ title: "White's Body Works", url: "https://www.whitesbodyworks.com/6-most-common-motorcycle-problems-and-what-to-do-about-them/" }]} />
        </div>
    )
}