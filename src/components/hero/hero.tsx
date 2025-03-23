// src/app/page.tsx
import Hero from '@/components/hero';

export default function Home() {
  return (
    <>
      <Hero 
        title="Robert Manansala"
        subtitle="Full-Stack Software Engineer specializing in Python, JavaScript, and React"
      />
      {/* Placeholder sections for later development */}
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