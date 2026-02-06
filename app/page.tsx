import GlobeDemo from "@/components/globe-demo";
import { FeaturesSection } from "@/components/features-section";

export default function Home() {
  return (
    <div suppressHydrationWarning className="min-h-screen bg-white dark:bg-black font-[family-name:var(--font-geist-sans)] transition-colors duration-500">
      <main className="flex flex-col items-center justify-center min-h-screen">
        <GlobeDemo />
        <FeaturesSection />
      </main>
    </div>
  );
}
