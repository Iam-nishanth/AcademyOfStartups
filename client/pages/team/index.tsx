import React from 'react';
import Layout from '@/components/Layout/Full';
import Breadcumb from '@/components/Breadcumb';
import TeamSection from '@/views/TeamSection';
import ProgressSection from '@/views/ProgressSection';
import ManagementSection from '@/views/ManagementSection';


const TeamPage = (): JSX.Element => {

  return (
    <Layout title="Team | Academy of Startups" description="Academy of Startups , where we empower businesses to achieve 10X growth through expert consulting. Ignite success and unlock exponential potential with us. ">
      <Breadcumb name="Team" link="team" />
      <TeamSection />
      <ProgressSection />
      <ManagementSection />
    </Layout>
  );
}

export default TeamPage
