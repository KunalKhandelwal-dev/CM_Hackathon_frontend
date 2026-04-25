import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Briefing from './components/Briefing';
import Blueprint from './components/Blueprint';
import OperationRoute from './components/OperationRoute';
import TheScore from './components/TheScore';
import Judges from './components/Judges';
import Mentors from './components/Mentors';
import TheCrew from './components/TheCrew';
import SealedQuestions from './components/SealedQuestions';
import SecureTransmission from './components/SecureTransmission';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-heist-black min-h-screen">
      <Navbar />
      <Hero />
      <Briefing />
      <Blueprint />
      <OperationRoute />
      <TheScore />
      <Judges />
      <Mentors />
      <TheCrew />
      <SealedQuestions />
      <SecureTransmission />
      <Footer />
    </div>
  );
}

export default App;
