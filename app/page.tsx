import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AIExplanation } from "@/components/ai-explanation"
import { FeaturesPreview } from "@/components/features-preview"
import { Footer } from "@/components/footer"
import { MatrixRain } from "@/components/matrix-rain"
import { FloatingParticles } from "@/components/floating-particles"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* Background effects */}
      <MatrixRain />
      <FloatingParticles />
      <ScrollProgress />

      {/* Foreground */}
      <div className="relative z-10">
        <Navbar />

        {/* ================= HERO ================= */}
        <HeroSection />

        {/* ================= VIDEO DEMO ================= */}
        <section id="demo" className="relative py-24 px-6 flex justify-center">
          <div className="relative mx-auto max-w-6xl w-full rounded-xl overflow-hidden border border-emerald-500/20 bg-black/70 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,120,0.08)]">

            {/* Video */}
            <video
              src="/videos/demo.mp4"
              controls
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />

           

            {/* CRT scanlines */}
            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_3px)] mix-blend-overlay" />
          </div>
        </section>

        {/* ================= APK PREVIEW ================= */}
        <section className="relative py-28 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-300 mb-4">
                Elliot Mobile Interface
              </h2>
              <p className="text-emerald-100/70 leading-relaxed mb-6">
                Elliot is designed to scale beyond the browser.  
                This interface represents our planned Android APK —
                featuring secure command execution, voice control,
                and real-time AI responses in a hardened UI.
              </p>

              <ul className="space-y-3 text-sm text-emerald-200/70 terminal-text">
                <li>&gt; Secure command execution</li>
                <li>&gt; Voice-driven interaction</li>
                <li>&gt; Encrypted AI response channel</li>
                <li>&gt; Dark-mode hardened UI</li>
              </ul>
            </div>

            {/* APK mockup image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-emerald-500/25 bg-black/60 shadow-[0_0_60px_rgba(0,255,120,0.12)]">
                <img
                  src="/images/elliot-apk-preview.jpeg"
                  alt="Elliot AI Mobile App Preview"
                  className="w-full h-auto object-contain"
                />

                {/* subtle glow */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-emerald-500/20" />
              </div>
            </div>

          </div>
        </section>

        {/* ================= EXPLANATION ================= */}
        <AIExplanation />

        {/* ================= FEATURES ================= */}
        <FeaturesPreview />

        <Footer />
      </div>

      <BackToTop />

      {/* Global CRT scanlines */}
      <div className="scanline pointer-events-none fixed inset-0 z-50" />
    </main>
  )
}
