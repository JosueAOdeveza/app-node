import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';


type Props = {
  children: React.ReactNode;
  showHero?: boolean;
}

const Layout = ({ children, showHero }: Props) => {
  return (
    <div>
      <Header />
      {showHero && <Hero />}
      <main>{children}</main>
      <Footer />
    </div>
  );
  
}

export default Layout;