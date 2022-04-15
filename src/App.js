import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Marquee from './components/marquee/Marquee';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';

import reactIcon from './assets/react.svg';
import nextjsIcon from './assets/nextjs.svg';
import javascriptIcon from './assets/javascript.svg';
import typescriptIcon from './assets/typescript.svg';
import reduxIcon from './assets/redux.svg';
import sassIcon from './assets/sass.svg';
import tailwindcssIcon from './assets/tailwind-css.svg';
import bootstrapIcon from './assets/bootstrap-5.svg';
import materialuiIcon from './assets/material-ui.svg';

const jsIcons = [
  { name: 'react', icon: reactIcon, id: 'i1' },
  { name: 'next js', icon: nextjsIcon, id: 'i2' },
  { name: 'redux', icon: reduxIcon, id: 'i3' },
  { name: 'javascript', icon: javascriptIcon, id: 'i4' },
  { name: 'typescript', icon: typescriptIcon, id: 'i5' },
];
const cssIcons = [
  { name: 'sass', icon: sassIcon, id: 'i6' },
  { name: 'tailwindcss', icon: tailwindcssIcon, id: 'i7' },
  { name: 'material ui', icon: materialuiIcon, id: 'i8' },
  { name: 'bootstrap 5', icon: bootstrapIcon, id: 'i9' },
];

function App() {
  console.log('app run');

  return (
    <>
      <div className="w-full overflow-x-hidden bg-skin-primary dark:bg-dark-primary">
        <Header />
        <Home />
        <About />
        <Services />
        <Marquee direction="left" items={jsIcons} />
        <Marquee direction="right" items={cssIcons} />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
