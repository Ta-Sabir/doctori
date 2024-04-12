import {
  Hero,
  AboutUs,
  Doctors,
  Services,
  Blog,
  Contact,
  Question,
  Testimonials,
} from "../../components/index";

const Home = () => {
  return (
    // START HOME PAGE
    <section id="home">
      <Hero />
      <div>
        <AboutUs />
        <Services />
        <Doctors />
        <Blog />
        <Testimonials />
        <Contact />
        <Question />
      </div>
    </section>
    // END HOME PAGE
  );
};

export default Home;
