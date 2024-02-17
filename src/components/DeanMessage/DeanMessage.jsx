import React from "react";
import { motion } from "framer-motion";
import { DeanSir } from "@/assets";
const DeanMessage = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-full flex p-4 min-h-[70vh] justify-center ">
        <div className="flex md:items-center md:justify-center flex-col-reverse md:flex-row shadow-lg bg-sky-100 rounded-md md:w-[90%] w-[92vw]">
          <div className="mx-5">
            <div className="py-5 text-md font-serif font-medium px-4  md:h-[650px] md:flex justify-start md:justify-center  md:mt-10 mb-10 md:text-left   ">
              <div className="leading-5 font-Poppins">
                I am delighted to emphasize our institute's strong dedication to
                fostering a culture of research and innovation. With an
                unwavering commitment deeply rooted in expanding the boundaries
                of knowledge, we actively encourage and support research-driven
                initiatives across various departments. Our specialized
                departments are centres where advanced research takes place,
                covering a wide range of subjects. <br /><br /> In addition, our
                dedication to innovation goes beyond theory. We take pride in
                turning research outcomes into real-world solutions and actively
                seek patents for unique ideas. This not only adds value to our
                researchers' work but also emphasizes our commitment to
                advancing society. Our institute is fundamentally a place of
                great importance in terms of research and innovation.
                <br /><br /> Moreover, we have Memoranda of Understanding (MoUs)
                signed with different academic institutions and industries to
                jointly work on different projects. The learned faculty members
                and promising students of our institute along with persons with
                good industrial experience exchange their expertise for mutual
                benefit and growth.These initiatives not only address current
                challenges but also drive our mutual journey for knowledge.{" "}
                <br /><br />
                At the core of our beliefs lies a deep commitment to protecting
                intellectual property rights (IPR). We fully understand the
                importance of safeguarding the creative and ground-breaking
                ideas that emerge from within our academic community.Our
                institute is dedicated to assisting researchers in navigating
                the complex realm of IPR, ensuring that their valuable work
                remains shielded and available for the greater good. <br /><br />
                We are determined to create an environment that fosters
                ground-breaking ideas, safeguards intellectual property, and
                transforms research into practical applications. Working
                together, we embark on an ongoing journey of exploration and
                advancement.
                <br /><br />
                Best regards
              </div>
            </div>
          </div>
          <div className="h-full flex justify-center items-center flex-col min-w-[22rem] md:min-w-[25rem] min-h-[5rem]  py-4 rounded-md">
            <img
              className=" rounded-xl max-w-[15rem] md:max-w-[20rem]"
              src={DeanSir}
              width={1000}
              height={1000}
              alt=""
            />
            <div className="w-full flex-col text-center flex py-2 justify-center font-semibold text-lg">
              <div>{"Prof.MK Sinha"}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DeanMessage;
