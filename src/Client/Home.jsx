import Header from "../Components/Header";
import Card from "../Components/Card";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />

      {/* Banner */}
      <div className="w-full">
        <img src="/IMG/IMG/banner-image.jpg" alt="Banner" className="w-full h-auto object-cover" />
      </div>

      {/* Bikes Section */}
      <section className="bikes bg-gray-200 py-16 px-5">
        <div className="container mx-auto w-11/12 md:w-4/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-5">
              Find the Best <span className="font-light">BikeForYou</span>
            </h2>
            <p className="text-md md:text-lg">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which don't
              look even slightly believable.
            </p>
          </div>

          <div className="text-center">
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-bold">
              New Bike
            </a>
          </div>

          {/* Bike Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <Card img="/IMG/IMG/glamour-programmed-fi-24.jpg"
              Name="Hero Glamour"
              Price="$350"
              Discription="A two-wheeler major's mid-sized commuter fighter, the Hero MotoCorp Gl"
              Model="2018" />

            <Card img="/IMG/IMG/honda-cb.png"
              Name="Honda CB Shine"
              Price="$320"
              Discription="Honda has launched the 2018 CB Shine in the Indian market with a price"
              Model="2019" />

            <Card img="/IMG/IMG/mahindra.jpg"
              Name=" Mahindra Centura "
              Price="$280"
              Discription="As per ARAI, the mileage of Q8 is 0 kmpl. Real mileage of the vehicle "
              Model="2017" />
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 bg-cover bg-center" style={{ backgroundImage: "url('/IMG/IMG/fun-facts-bg.jpg')" }}>
        <div className="container mx-auto w-11/12 md:w-4/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            {/* Fact 1 */}
            <div className="bg-blue-500 text-white rounded-full w-40 h-40 flex flex-col items-center justify-center mx-auto">
              <h2 className="text-3xl font-bold"><i className="fa fa-calendar"></i><br />40+</h2>
              <p>Years In Business</p>
            </div>

            {/* Fact 2 */}
            <div className="bg-blue-500 text-white rounded-full w-40 h-40 flex flex-col items-center justify-center mx-auto">
              <h2 className="text-3xl font-bold"><i className="fa fa-motorcycle"></i><br />1200+</h2>
              <p>New Bikes For Sale</p>
            </div>

            {/* Fact 3 */}
            <div className="bg-blue-500 text-white rounded-full w-40 h-40 flex flex-col items-center justify-center mx-auto">
              <h2 className="text-3xl font-bold"><i className="fa fa-motorcycle"></i><br />400+</h2>
              <p>Used Bikes For Sale</p>
            </div>

            {/* Fact 4 */}
            <div className="bg-blue-500 text-white rounded-full w-40 h-40 flex flex-col items-center justify-center mx-auto">
              <h2 className="text-3xl font-bold"><i className="fa fa-user"></i><br />6000+</h2>
              <p>Satisfied Customers</p>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Scroll Button */}
      <div className="fixed bottom-5 right-5">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-500 text-white rounded-full shadow-lg h-12 w-12 flex items-center justify-center hover:bg-blue-600 transition">
          <i className="fa fa-angle-up text-white"></i>
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Home;
