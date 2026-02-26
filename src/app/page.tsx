import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import ProblemSolution from "@/components/home/ProblemSolution";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import ProductGrid from "@/components/home/ProductGrid";
import HowItWorks from "@/components/home/HowItWorks";
import ReviewsSection from "@/components/home/ReviewsSection";
import AccessoriesSection from "@/components/home/AccessoriesSection";
import GuaranteeSection from "@/components/home/GuaranteeSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTABanner from "@/components/home/FinalCTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ProblemSolution />
      <FeatureHighlights />
      <ProductGrid />
      <HowItWorks />
      <ReviewsSection />
      <AccessoriesSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTABanner />
    </>
  );
}
