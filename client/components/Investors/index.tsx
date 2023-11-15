import React, { useMemo, useState } from "react";
import Image from 'next/image';
import { Heading, SubHeading } from '../../styles/Globalstyles';
import { InvestorCard, InvestorCards, Investors } from '../../styles/views/DashBoardstyles'
import { Select } from 'antd';
import { CommonButton } from '../../components/Common/Button'
import { Investor } from "@/types/Investors";

interface InvestorComponentProps {
    investorData: Investor[];
    domainOptions: DomainOption[];
}
type DomainOption = {
    label: string;
    value: string;
};


const InvestorsComponent: React.FC<InvestorComponentProps> = ({ investorData, domainOptions }) => {
    const [selectedDomain, setSelectedDomain] = useState("");

    const handleSelectChange = (e: any) => {
        setSelectedDomain(e);
    };

    const filteredInvestors = useMemo(() => {
        if (selectedDomain === "") {
            return investorData;
        } else {
            return investorData.filter((investor) => {
                return investor.InvestorInfo.some((info) => {
                    return info.DomainsOfInterest.includes(selectedDomain);
                });
            });
        }
    }, [investorData, selectedDomain]);

    return (
        <Investors>

            <Select
                options={domainOptions}
                style={{ width: "200px" }}
                placeholder="Filter"
                onChange={handleSelectChange}
            />
            <InvestorCards>
                {filteredInvestors.length > 0 ? (
                    filteredInvestors.map((investor) => (
                        <InvestorCard key={investor.id}>

                            {investor.InvestorInfo.map((info) => (
                                <>
                                    {
                                        info.Image ? (
                                            <Image
                                                src={info.Image.toString()}
                                                alt="Profile Image"
                                                width={80}
                                                height={80}
                                            />
                                        ) :
                                            (
                                                <Image
                                                    src={
                                                        investor.gender === "Male"
                                                            ? "/images/Male.jpg"
                                                            : "/images/Female.webp"
                                                    }
                                                    width={80}
                                                    height={80}
                                                    alt="Investor"
                                                />
                                            )
                                    }
                                    <div key={info.id}>
                                        <h3>{investor.name}</h3>
                                        <h4 style={{ color: "blue" }}>
                                            {info.InvestorType == "Angel"
                                                ? "Angel Investor"
                                                : info.InvestorType}
                                        </h4>
                                        <br />
                                        <p>
                                            <span style={{ fontWeight: "bold" }}>Range: </span>
                                            {info.InvestmentRange}
                                        </p>
                                        <br />
                                        <p style={{ fontWeight: "bold" }}>Interested Fields: </p>
                                        <p>{info.DomainsOfInterest.join(", ")}</p>
                                        <br />
                                        <br />
                                        <CommonButton name="connect" width="100px" height="40px" />
                                    </div>
                                </>

                            ))}
                        </InvestorCard>
                    ))
                ) : (
                    <h3>There are No Investors for this Domain as of now, Please wait for some time</h3>
                )}
            </InvestorCards>
        </Investors>
    );
};

export default InvestorsComponent;

