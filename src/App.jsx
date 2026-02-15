import './App.css';
import Navbar from './View/Navbar/index.jsx';
import Footer from './View/footer/footer.jsx';
import HeaderBody from './View/headerbody/headerbody.jsx';
import BodyBody from './View/bodybody/bodybody.jsx';
import PesBody from './View/pesbody/pesbody.jsx';

function CorpoPadrao() {
  return (
    <>
      <Navbar />

      <HeaderBody />

      <BodyBody />

      <PesBody />

      <Footer />
    </>
  );
}

export default CorpoPadrao;
