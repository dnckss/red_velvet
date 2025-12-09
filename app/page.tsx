import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Article />
      <Footer />
    </div>
  );
}
