import Header from "../Components/Header"
import Card from "../Components/Card"
import Footer from "../Components/Footer"
function Home() {
  return (
    <>
      <Header></Header>
      {/* <!-- banner start --> */}
      <div className="banner">
        <img src="./public/IMG/IMG/banner-image.jpg" alt="" />
      </div>
      {/* <!-- banner end --> */}
      {/* <!-- bikes section start --> */}
      <section className="bikes bg-[#eeeeee] py-24 ">
        <div className="container w-4/5 mx-auto px-3">
          <div className="heading-section mb-14 text-center">
            <h2 className="mb-7 text-[34px] text-black font-black">Find the Best <span className="font-light">BikeForYou</span></h2>
            <p className="text-[17px]">There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in
              some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
              to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
              text.</p>
          </div>
          <div className="recent-tab bg-blue ">
            <ul className="text-center">
              <li className=""><a href="" className="bg-[#228DCB] text-[15px] font-bold w-10 p-2 rounded-3xl text-white">New
                Bike</a></li>
            </ul>
          </div>

          {/* <!-- bikes start --> */}
          <div className="grid grid-cols-3 mt-10">
            <Card img="./public/IMG/IMG/glamour-programmed-fi-24.jpg"
              Name="Hero Glamour"
              Price="$350"
              Discription="A two-wheeler major's mid-sized commuter fighter, the Hero MotoCorp Gl"
              Model="2018" >
            </Card>
            <Card img="./public/IMG/IMG/honda-cb.png"
              Name="Honda CB Shine"
              Price="$320"
              Discription="Honda has launched the 2018 CB Shine in the Indian market with a price"
              Model="2019">
            </Card>
            <Card img="./public/IMG/IMG/mahindra.jpg"
              Name=" Mahindra Centura "
              Price="$280"
              Discription="As per ARAI, the mileage of Q8 is 0 kmpl. Real mileage of the vehicle "
              Model="2017">
            </Card>

          </div>
        </div>

      </section>
      {/* // <!-- bikes section end --> */}

      {/* <!-- fun-facts start --> */}
      <section className="fun-facts py-24 bg-[url('./public/IMG/IMG/fun-facts-bg.jpg')]">
        <div className="container w-4/5 mx-auto px-3  ">
          <div className="grid grid-cols-4 content-between text-center ">
            <div className="expi py-4 bg-[#228dcb] rounded-full size-48 text-center flex items-center justify-center">
              <div className="fun-facts-m ">
                <div className="cell">
                  <h2 className="text-4xl font-bold text-white"><i className="fa fa-calendar" aria-hidden="true"></i> <br />40+</h2>
                  <p className="text-white">Years In Business</p>
                </div>
              </div>
            </div>


            <div className="expi py-4 bg-[#228dcb] rounded-full size-48 text-center flex items-center justify-center">
              <div className="fun-facts-m ">
                <div className="cell">
                  <h2 className="text-4xl font-bold text-white"><i className="fa fa-car" aria-hidden="true"></i> <br />1200+</h2>
                  <p className="text-white">New Bikes For Sale</p>
                </div>
              </div>
            </div>
            <div className="expi py-4 bg-[#228dcb] rounded-full size-48 text-center flex items-center justify-center">
              <div className="fun-facts-m ">
                <div className="cell">
                  <h2 className="text-4xl font-bold text-white"><i className="fa fa-car" aria-hidden="true"></i> <br />400+</h2>
                  <p className="text-white">Used Bike For Sale</p>
                </div>
              </div>
            </div>
            <div className="expi py-4 bg-[#228dcb] rounded-full size-48 text-center flex items-center justify-center">
              <div className="fun-facts-m ">
                <div className="cell">
                  <h2 className="text-4xl font-bold text-white"><i className="fa fa-user" aria-hidden="true"></i> <br />6000+</h2>
                  <p className="text-white">Satisfied Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- fun-facts end --> */}
      {/* Floating Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col space-y-4">

        {/* Scroll to Top Button */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-500 rounded-full shadow-lg h-12 w-12">
          <span className="text-white text-xl"><i class="fa fa-angle-up text-white" aria-hidden="true"></i></span>
        </button>
      </div>
      <Footer></Footer>
    </>
  )
}
export default Home