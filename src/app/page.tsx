// src/app/page.tsx
import Hero from '@/components/hero';

export default function Home() {
  return (
    <>
      <Hero 
        title="Robert Manansala"
        subtitle="Full-Stack Software Engineer specializing in Python, JavaScript, and React"
        videoSrc="/videos/hero-background.mp4"
        fallbackImageSrc="/images/hero-fallback.jpg"
      />
      {/* Other sections will be added here */}
      <div id="about" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl font-light">About Section (Coming Soon)</h2>
      </div>
      <div id="projects" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl font-light">Projects Section (Coming Soon)</h2>
      </div>
      <div id="skills" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl font-light">Skills Section (Coming Soon)</h2>
      </div>
      <div id="contact" className="h-screen flex items-center justify-center">
        <h2 className="text-3xl font-light">Contact Section (Coming Soon)</h2>
      </div>
    </>
  );
}