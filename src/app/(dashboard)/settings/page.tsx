import React, { FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";
import OverviewPage from "@/components/forms/OverviewForm";
import SocialMediaForm from "@/components/forms/SocialMediaForm";
import TeamForm from "@/components/forms/TeamForm";

interface SettingsPageProps {}

const SettingPage: FC<SettingsPageProps> = ({}) => {
    return (
        <div>
            <div className="font-semibold text-3xl mb-5">Settings</div>

            <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sociallinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
         <OverviewPage />
        </TabsContent>
        <TabsContent value="sociallinks">
            <SocialMediaForm />
        </TabsContent>
        <TabsContent value="teams">
            <TeamForm />
        </TabsContent>
      </Tabs>
        </div>
    )
};

export default SettingPage;