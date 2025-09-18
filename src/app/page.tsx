import HeroSection from '@/components/HeroSection';
import TargetSection from '@/components/TargetSection';
import BenefitsSection from '@/components/BenefitsSection';
import GallerySection from '@/components/GallerySection';
import ProgramsSection from '@/components/ProgramsSection';
import InstructorSection from '@/components/InstructorSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CommunitySection from '@/components/CommunitySection';
import FinalCTASection from '@/components/FinalCTASection';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Banner de fecha del evento */}
      <div 
        style={{ 
          backgroundColor: '#22c55e', 
          color: 'white', 
          padding: '8px', 
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        📅 PRONTO FECHA DEL EVENTO - Trail Camp Iniciación
      </div>
      
      <HeroSection />
      <TargetSection />
      <BenefitsSection />
      <GallerySection />
      <ProgramsSection />
      <InstructorSection />
      <PricingSection />
      <FAQSection />
      <CommunitySection />
      <FinalCTASection />
    </main>
  );
}
