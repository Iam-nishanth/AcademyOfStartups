import React from 'react';
import Layout from '@/components/Layout/Full';
import Breadcumb from '@/components/Breadcumb';
import TeamSection from '@/views/TeamSection';
import ProgressSection from '@/views/ProgressSection';
import ManagementSection from '@/views/ManagementSection';


const TeamPage = (): JSX.Element => {

  return (
    <Layout>
      <Breadcumb name="Team" link="team" />
      <TeamSection />
      <ProgressSection />
      <ManagementSection />
    </Layout>
  );
}

export default TeamPage
