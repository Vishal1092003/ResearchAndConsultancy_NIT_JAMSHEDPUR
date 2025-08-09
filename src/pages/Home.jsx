import CarouselComponents from "../components/Carousel/CarouselComponents";
import Footer from "../components/Footer/Footer";
import Message from "../components/Message/Message";
import Navbar from "../components/Navbar/Navbar";
import Tab from "../components/Tab/Tab";

import {
  AbhishekSir,
  AakashSir,
  AkanshaMam,
  DrKanika,
  SwagatadebSir,
  AshokSir,
  DirectorSir,
  DeanSir,
} from "../assets/index";

// JSON data
import messages from "../pages/dean&directorMsg.json";
import { useState } from "react";

// Map image keys from JSON to actual imports
const imageMap = {
  DirectorSir,
  DeanSir,
};
const MessageTile = ({ data, reverse }) => {
  const [expanded, setExpanded] = useState(false);
  const imgSrc = imageMap[data.image];

  const shortText =
    data.message.length > 350
      ? data.message.substring(0, 350) + "..."
      : data.message;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } shadow-lg rounded-lg bg-white overflow-hidden w-full border border-gray-200`}
    >
      {/* Image & Details */}
      <div className="flex flex-col items-center justify-center min-w-[20rem] p-6 border-b md:border-b-0 md:border-r border-gray-200">
        <img
          src={imgSrc}
          alt={data.name}
          className="rounded-xl w-full max-w-[15rem] md:max-w-[18rem] object-cover aspect-square"
        />
        <div className="text-center mt-4 space-y-1">
          <h3 className="font-semibold text-lg text-gray-800">{data.name}</h3>
          <p className="text-gray-600 text-sm">{data.designation}</p>
          <p className="text-gray-600 text-sm">{data.department}</p>
          {data.phone_office && (
            <p className="text-gray-600 text-sm">
              Ph. (O): {data.phone_office}
            </p>
          )}
          {data.mobile && (
            <p className="text-gray-600 text-sm">Mob: {data.mobile}</p>
          )}
          <p className="text-blue-600 text-sm hover:underline">
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </p>
        </div>
      </div>

      {/* Message */}
      <div className="flex-1 p-6 flex flex-col justify-center bg-gray-50">
        <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-4 text-center">
          {reverse ? "Director's Message" : "Dean's Message"}
        </h2>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-gray-700 text-justify leading-relaxed">
            {expanded ? data.message : shortText}
          </p>
          {data.message.length > 350 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="overflow-x-hidden">
          <Navbar />
        </div>

        <div className="sticky top-0 z-10 bg-white shadow-md">
          <Tab />
        </div>

        <div className="overflow-x-hidden">
          {/* carouselSection */}
          <CarouselComponents />

          {/* messageSection */}
          <div className="pt-5 px-4 w-full bg-yellow-50/50">
            <div className="min-h-[50vh] flex flex-col justify-start items-center py-8 max-w-7xl mx-auto space-y-12">
              {Object.entries(messages).map(([key, data], index) => (
                <MessageTile key={key} data={data} reverse={index % 2 === 0} />
              ))}
            </div>
          </div>



          {/* profileCardsSection */}
          <div>
            {/* associateDeans */}
            <div className="pt-8 pb-12 bg-yellow-50/50">
              <div className="container mx-auto px-4 max-w-7xl">
                <div
                  id="Associatedeans"
                  className="bg-sky-200 shadow-lg text-center p-6 mb-12 rounded-xl font-medium text-3xl font-serif"
                >
                  Associate Deans
                </div>

                {/* CSS Grid with enforced uniform sizing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                  {/* Uniform Card 1 */}
                  <div className="w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="h-full w-full flex flex-col items-center justify-center p-4">
                      <div className="flex-shrink-0 transform scale-90 flex justify-center items-center">
                        <Message
                          img={DrKanika}
                          designation1={"Associate Dean"}
                          designation2={"IPR Cell"}
                          message1={null}
                          message2=""
                          name={"Dr. Kanika Prashad"}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Uniform Card 2 */}
                  <div className="w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="h-full w-full flex flex-col items-center justify-center p-4">
                      <div className="flex-shrink-0 transform scale-90 flex justify-center items-center">
                        <Message
                          img={SwagatadebSir}
                          designation1={"Associate Dean"}
                          designation2={""}
                          message1={null}
                          message2=""
                          name={"Dr. Swagatadeb Sahoo"}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Uniform Card 3 */}
                  <div className="w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:col-span-2 lg:col-span-1 md:justify-self-center">
                    <div className="h-full w-full flex flex-col items-center justify-center p-4">
                      <div className="flex-shrink-0 transform scale-90 flex justify-center items-center">
                        <Message
                          img={AshokSir}
                          designation1={"Associate Dean"}
                          designation2={
                            "Collaboration and Entrepreneurship Development"
                          }
                          message1={null}
                          message2=""
                          name={"Dr. Ashok Mandal"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* administrativeStaff */}
            <div className="pt-8 pb-12 bg-yellow-50/50">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="bg-sky-200 shadow-lg text-center p-6 mb-12 rounded-xl font-medium text-3xl font-serif">
                  Administrative Staff
                </div>

                {/* CSS Grid with enforced uniform sizing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                  {/* Uniform Card 1 */}
                  <div className="w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="h-full w-full flex flex-col items-center justify-center p-4">
                      <div className="flex-shrink-0 transform scale-90 flex justify-center items-center">
                        <Message
                          img={AbhishekSir}
                          designation1={"Accountant"}
                          designation2={""}
                          message1={null}
                          message2=""
                          name={"Abhishek Verma"}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Uniform Card 2 */}
                  <div className="w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="h-full w-full flex flex-col items-center justify-center p-4">
                      <div className="flex-shrink-0 transform scale-90 flex justify-center items-center">
                        <Message
                          img={AakashSir}
                          designation1={"Senior Assistant"}
                          message1={null}
                          message2=""
                          name={"Aakash"}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Uniform Card 3 */}
                  <div className="w-80 h-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:col-span-2 lg:col-span-1 md:justify-self-center">
                    <div className="h-full w-full flex flex-col items-center justify-center p-4">
                      <div className="flex-shrink-0 transform scale-90 flex justify-center items-center">
                        <Message
                          img={AkanshaMam}
                          designation1={"DEO"}
                          message1={null}
                          message2=""
                          name={"Akansha Kumari"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
