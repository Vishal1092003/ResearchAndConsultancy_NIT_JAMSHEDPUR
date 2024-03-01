import React from "react";
import { DirectorSir } from "@/assets";
import { motion } from "framer-motion";
const DirectorMessage = () => {
  return (
    <div className="w-full h-[]">
      <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-full flex p-4 min-h-[70vh] justify-center  ">
        <div className=" h-full flex items-center justify-center flex-col md:flex-row shadow-lg bg-sky-100 rounded-md  lg:w-[95%] w-[92vw]">
          <div className="h-full flex justify-center items-center flex-col min-w-[22rem] md:min-w-[25rem] min-h-[5rem]  py-4 rounded-md">
            <img
              className=" rounded-xl max-w-[15rem] md:max-w-[20rem]"
              src={DirectorSir}
              width={1000}
              height={1000}
              alt=""
            />
            <div className="w-full flex-col text-center flex py-2 justify-center font-semibold text-lg">
              <div>{"Prof. (Dr.) Goutam Sutradhar"}</div>
            </div>
            <p className="font-md"> Professor
            Dept. of Mechanical Engineering
             </p>
          

             Email: director@nitjsr.ac.in
            
          </div>
          <div className="mx-5 ">
            <div className="py-5 text-md font-serif md:font-normal lg:font-medium px-1 md:h-[470px] flex md:items-center md:justify-center md:mt-10 mb-10 md:text-left  items-center ">
              <div className=" md:leading-[16px] lg:leading-5 leading-5 font-Poppins">
                As I reflect upon my tenure as the Director of NIT Jamshedpur,
                it brings me immense joy to witness and contribute to the
                remarkable achievements and accolades earned by the dedicated
                students, faculty members and staffs of NIT Jamshedpur, a
                testament to their unwavering hard work and commitment.<br /><br /> The
                excellence of NIT Jamshedpur is vividly demonstrated through its
                steadfast dedication to cutting-edge research across a diverse
                spectrum. Our commitment to fostering an environment of academic
                excellence and innovation has been a guiding principle
                throughout the institution's history. In recent years, NIT
                Jamshedpur has taken significant strides towards integrating
                contemporary methods that infuse new technologies and skills
                into the curriculum. <br /><br /> Moreover, NIT Jamshedpur has
                actively pursued collaborations with other esteemed institutes,
                exemplified by the signing of Memoranda of Understanding (MoUs).<br />
                <br />
                These agreements expand our knowledge base, resources, and
                access to experts, enriching the educational experience for our
                bright minds. The collaborations not only enhance research
                projects but also provide students and faculty members with the
                opportunities to engage in workshops, fostering a dynamic and
                collaborative learning environment. 
                <br /><br />In addition, NIT Jamshedpur
                has a dedicated Intellectual Property Rights (IPR) Cell,
                reinforcing our commitment to the authorization and protection
                of research work. This initiative ensures that the innovative
                ideas generated within our institution are duly recognized and
                protected.<br /><br /> As we continue to chart new territories in academia
                and research, I am optimistic about the future of NIT
                Jamshedpur. The journey ahead holds endless possibilities, and I
                am confident that our collective efforts will propel this
                institution to even greater heights of success and recognition.{" "}
                <br /><br />
                Best Wishes
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
   
  );
};

export default DirectorMessage;
