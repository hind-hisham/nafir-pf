"use client";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileProgress from "./_components/ProfileProgress";
import ProfileNavigation from "./_components/ProfileNavigation";
import { trpc } from "@/client/trpc";
import ErrorView from "@/components/global/Error";
import LoadingView from "@/components/global/Loading";
import ProfessionalSummarySection from "./_components/ProfessionalSummarySection";
import SkillsSection from "./_components/SkillsSection";
import ExperienceSection from "./_components/ExperienceSection";
import DesiredJobsSection from "./_components/DesiredJobsSection";
import ProfessionalTitleSection from "./_components/ProfessionalTitle";
import ContactInfoSection from "./_components/ContactInfoSection";
import CertificationSection from "./_components/CertificationSection";
import CVSection from "./_components/CVSection";
export default function ProfilePage() {
  const { data: profileData, isLoading, error } = trpc.profile.get.useQuery();

  if (isLoading) {
    return <LoadingView />;
  }

  if (error || !profileData) {
    return <ErrorView />;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Personal Profile</h1>
      </div>

      {/* Profile Header with Image and Basic Info */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <ProfileHeader />
      </div>

      {/* Navigation Links */}
      <ProfileNavigation />

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left column - Profile progress */}
        <div className="md:col-span-1">
          <ProfileProgress />
        </div>

        {/* Right column - Main content */}
        <div className="md:col-span-3 space-y-6">
          <ProfessionalTitleSection data={profileData} />
          <ContactInfoSection data={profileData} />
          <ProfessionalSummarySection data={profileData} />
          <SkillsSection data={profileData} />
          <ExperienceSection data={profileData} />
          <CertificationSection data={profileData} />
          <DesiredJobsSection data={profileData} />
          <CVSection data={profileData} />
        </div>
      </div>
    </div>
  );
}
