import CarouselComponents from '../components/Carousel/CarouselComponents'
import { HashLink } from 'react-router-hash-link'
import Footer from '../components/Footer/Footer'
import Message from '../components/Message/Message'
import Navbar from '../components/Navbar/Navbar'
import Notice from '../components/Notice/Notice'
import { DirectorSir, DeanSir, DrKanika, OmSir, AshokSir, Subhash, RahulMahato, ArunPandit, } from '../assets/index'
const Home = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw]  ">
        <Navbar />
        <div className=" z-10 flex bg-yellow-50/50  justify-center items-center flex-col ">
          <div className="pt-10 flex gap-5 flex-wrap justify-center ">
            <HashLink to={"./#directormessage"}>
              <div className="w-96 h-14  flex justify-center items-center  rounded-lg  align-centre gap-5 bg-slate-200 text-2xl border-y-2 hover:shadow-lg transition  duration-200 py-1 px-1   hover: bg-blue-50/50 cursor-pointer">
                <img
                  className="w-50 h-12 rounded-md  "
                  src={DirectorSir}
                  alt="Direc photo"
                />
                <div> Director's Message</div>
              </div>
            </HashLink>
            <div className=" flex justify-center items-center">
              <HashLink to={"./#Deanmessage"}>
                <div className="w-96 h-14   rounded-lg flex items-center justify-center align-centre bg-slate-200 gap-5  text-2xl border-y-2 hover:shadow-lg transition  duration-200 py-1 px-1   hover: bg-blue-50/50  cursor-pointer">
                  <div> Dean Message </div>
                </div>
              </HashLink>
            </div>
            <HashLink to={"./#Associatedeans"}>
              <div className="w-96 h-14  flex justify-center items-center  rounded-lg  align-centre gap-5 bg-slate-200 text-2xl border-y-2 hover:shadow-lg transition  duration-200 py-1 px-1   hover: bg-blue-50/50 cursor-pointer">
                <div> Associate Deans</div>
              </div>
            </HashLink>
          </div>
          <div className="md:p-x-12 md:pb-12 p-0 md:flex-row flex-col gap-x-2 shadow-md flex rounded-lg">
            <div className="w-96 md:w-full flex justify-center items-center flex-col">
              <CarouselComponents />
            </div>
            <div className="w-96 md:w-full ">
              <Notice />
            </div>
          </div>
        </div>

        <div id="directormessage" className="pt-5 px-4 w-full bg-yellow-50/50 ">
          <div className="min-h-[70vh] flex flex-col justify-center items-center">
            <div className="flex bg-sky-200 w-full shadow-md p-2 mx-4 rounded-lg  font-medium text-3xl font-serif justify-center items-center">
              Director's Message
            </div>
            <Message
              img={DirectorSir}
              name={"Prof. (Dr.) Goutam Sutradhar"}
              message1={`As I reflect upon my tenure as the Director of NIT Jamshedpur, it brings me immense joy to witness and contribute to the remarkable achievements and accolades earned by the dedicated students, faculty members and staffs of NIT Jamshedpur, a testament to their unwavering hard work and commitment.

The excellence of NIT Jamshedpur is vividly demonstrated through its steadfast dedication to cutting-edge research across a diverse spectrum. Our commitment to fostering an environment of academic excellence and innovation has been a guiding principle throughout the institution's history. In recent years, NIT Jamshedpur has taken significant strides towards integrating contemporary methods that infuse new technologies and skills into the curriculum. 

Moreover, NIT Jamshedpur has actively pursued collaborations with other esteemed
institutes, exemplified by the signing of Memoranda of Understanding (MoUs). These
agreements expand our knowledge base, resources, and access to experts, enriching
`}
              message2={`the educational experience for our bright minds. The collaborations not only enhance
research projects but also provide students and faculty members with the opportunities to engage in workshops, fostering a dynamic and collaborative learning environment.

In addition, NIT Jamshedpur has a dedicated Intellectual Property Rights (IPR) Cell, reinforcing our commitment to the authorization and protection of research work. This initiative ensures that the innovative ideas generated within our institution are duly recognized and protected.

As we continue to chart new territories in academia and research, I am optimistic about the future of NIT Jamshedpur. The journey ahead holds endless possibilities, and I am confident that our collective efforts will propel this institution to even greater heights of success and recognition.

Best Wishes
`}
            />
          </div>
        </div>
        <div className="pt-5 px-4 bg-yellow-50/50">
          <div className="min-h-[70vh]  flex md:flex-row flex-col p-3">
            <div
              id="Deanmessage"
              className="flex bg-sky-200 shadow-md text-center p-2 mx-4 rounded-lg  font-medium text-3xl font-serif justify-center items-center"
            >
              Dean Message
            </div>
            <div>
              <div>
                <Message
                  img={DeanSir}
                  message1={`
                    I am delighted to emphasize our institute's strong dedication to fostering a culture of research and innovation. With an unwavering commitment deeply rooted in expanding the boundaries of knowledge, we actively encourage and support research-driven initiatives across various departments. Our specialized departments are centres where advanced research takes place, covering a wide range of subjects. 
In addition, our dedication to innovation goes beyond theory. We take pride in turning research outcomes into real-world solutions and actively seek patents for unique ideas. This not only adds value to our researchers' work but also emphasizes our commitment to advancing society. Our institute is fundamentally a place of great importance in terms of research and innovation. 
Moreover, we have Memoranda of Understanding (MoUs) signed with different academic institutions and industries to jointly work on different projects. The learned faculty members and promising students of our institute along with persons with good industrial experience exchange their expertise for mutual benefit and growth.These initiatives not only address current challenges but also drive our mutual journey for knowledge.
At the core of our beliefs lies a deep commitment to protecting intellectual property rights (IPR). We fully understand the importance of safeguarding the creative and ground-breaking ideas that emerge from within our academic community.Our institute is dedicated to assisting researchers in navigating the complex realm of IPR, ensuring that their valuable work remains shielded and available for the greater good. 
We are determined to create an environment that fosters ground-breaking ideas, safeguards intellectual property, and transforms research into practical applications. Working together, we embark on an ongoing journey of exploration and advancement.
Best regards
`}
                  message2=""
                  name={"Prof.MK Sinha"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 bg-yellow-50/50">
          <div className="min-h-[20vh] flex-col flex justify-center items-center  ">
            <div
              id="Associatedeans"
              className="flex w-[97vw] bg-sky-200 shadow-md text-center p-2 mx-4 rounded-lg  font-medium text-3xl font-serif justify-center items-center"
            >
              Associated Deans
            </div>
            <div className="flex md:flex-row flex-col">
              <Message
                img={DrKanika}
                designation1={"Associate Dean"}
                designation2={"IPR Cell"}
                message1={null}
                message2=""
                name={"Dr. Kanika Prashad"}
              />
              <Message
                img={OmSir}
                designation1={"Associate Dean"}
                designation2={""}
                message1={null}
                message2=""
                name={"Dr. Omhari Gupta"}
              />
              <Message
                img={AshokSir}
                designation1={"Associate Dean"}
                designation2={"Collaboration and Entrepreneurship Development"}
                message1={null}
                message2=""
                name={"Dr. Ashok Mandal"}
              />
            </div>
          </div>
        </div>
        <div className="pt-5 bg-yellow-50/50">
          <div className="min-h-[20vh] flex justify-center items-center  ">
            <div className="flex md:flex-row flex-col">
              <Message
                img={ArunPandit}
                designation1={"Accountant"}
                designation2={""}
                message1={null}
                message2=""
                name={"Arun Pandit"}
              />
              <Message
                img={Subhash}
                designation1={"Juniour Assistant"}
                message1={null}
                message2=""
                name={"Subhash Kumar"}
              />
              <Message
                img={RahulMahato}
                designation1={"Juniour Assistant"}
                message1={null}
                message2=""
                name={"Vikas Meena"}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home