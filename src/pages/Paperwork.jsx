import React from "react";
import InformationCard from "../components/InformationCard";
import SubCard from "../components/SubCard";
import Sources from "../components/Sources";

export default function Paperwork() {
    return (
        <div className="content-body">
            <h2 className="page-title">Registration</h2>

            <SubCard
                title="Title Requirements"
                content={[
                    "Title",
                    "Form TC-656, Utah Title Application",
                    "Vehicle Identification Number (VIN) inspections, if being titled in Utah for the first time. See Form TC-661, Certificate of Inspection. (New vehicles sold by a Utah dealer are exempt)",
                    "At least one person whose name will appear on new title"
                ]} />

            <SubCard
                title="Registration Requirements"
                content={[
                    "Utah safety inspection certificate, if required",
                    "Payment of age-based uniform fee",
                    "Payment of registration fees",
                ]} />

            <SubCard
                title="Exemptions to Registration"
                content={[
                    "Owned and operated by non-residents of Utah",
                    "Owned and operated by the United States government",
                ]} />

            <Sources sources={[{title:"DMV", url:"https://dmv.utah.gov/vehicles/motorcycles"}]}/>

        </div>
    );
}