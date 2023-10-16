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
        console.log(e);
        if (e.target) {
            setSelectedDomain(e.target.value);
        }
    };

    const filteredInvestors = useMemo(() => {
        return investorData.filter((investor) => {
            return investor.InvestorInfo.some((info) => {
                return info.DomainsOfInterest.includes(selectedDomain);
            });
        });
    }, [investorData, selectedDomain]);


    return (
        <Investors>
            <Heading>Investor Opportunity Hub</Heading>
            <SubHeading>
                Discover Investors Aligned with Your Startup's Vision and Ambitions
            </SubHeading>
            <Select
                options={domainOptions}
                style={{ width: "150px", color: "black" }}
                placeholder="Filter"
                onChange={handleSelectChange}
            />
            <InvestorCards>
                {filteredInvestors.length > 0 ? (
                    filteredInvestors.map((investor) => (
                        <InvestorCard key={investor.id}>
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
                            {investor.InvestorInfo.map((info) => (
                                <div key={info.id}>
                                    <h3>{investor.name}</h3>
                                    <h4 style={{ color: "blue" }}>{info.InvestorType == 'Angel' ? 'Angel Investor' : info.InvestorType}</h4>
                                    <br />
                                    <p><span style={{ fontWeight: 'bold' }}>Range: </span>{info.InvestmentRange}</p>
                                    <br />
                                    <p style={{ fontWeight: 'bold' }}>Interested Fields: </p>
                                    <p>{info.DomainsOfInterest.join(", ")}</p>
                                    <br /><br />
                                    <CommonButton name="connect" width="100px" height="40px" />
                                </div>
                            ))}
                        </InvestorCard>
                    ))
                ) : (
                    <h3>None</h3>
                )}
            </InvestorCards>
        </Investors>
    );
};

export default InvestorsComponent