/* src/App.js */
import Hero        from './components/hero.jsx';
import Projects    from './components/projects.jsx';
import ResumeCerts from './components/resumecerts.jsx';
import Contact     from './components/contact.jsx';

function App() {
  return (
    <div className="relative text-white overflow-x-hidden">
      {/* ONE background for every section */}
      <img
        src="/assets/laptop.avif"
        alt="bg"
        className="fixed inset-0 w-full h-full object-cover blur-sm brightness-75 -z-10"
      />

      <Hero />
      <Projects    />
      <ResumeCerts />
      <Contact     />
    </div>
  );
}
export default App;
