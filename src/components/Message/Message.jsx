import { motion } from 'framer-motion'
// import img from '../../assets/img.jpeg'
const Message = ({ name, message1, message2 = '', img, designation1, designation2 }) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .7 }}>
            <div className='w-full flex p-4 min-h-[70vh] justify-center '>
                <div className='flex items-center justify-center flex-col md:flex-row shadow-lg bg-sky-100 rounded-md w-[90%]'>
                    <div className='h-full flex justify-center items-center flex-col min-w-[22rem] md:min-w-[25rem] min-h-[20rem] py-5 px-4 rounded-md'>
                        <img className=' rounded-full max-w-[15rem] md:max-w-[20rem]' src={img} width={1000} height={1000} alt="" />
                        <div className='w-full flex-col text-center flex p-2 justify-center font-semibold text-lg'>
                            <div>
                                {name}
                            </div>
                            {
                                message1 !== null ? (<></>) : <>
                                    <div className=' font-normal'>
                                        {designation1}
                                    </div>
                                    <div className=' font-normal'>
                                        {designation2}
                                    </div></>
                            }
                        </div>
                    </div>
                    {
                        message1 === null ? (<>
                        </>) : <div className='m-5'>
                                <div className='py-5 text-lg font-serif font-medium px-4 h-[300px] md:h-[500px] flex justify-center  items-center overflow-scroll'>
                                    <div className=' tracking-wide'>
                                        {message1}
                                        <br />
                                        <br />
                                        {message2}
                                    </div>
                                </div>
                            </div>
                    }
            </div>
            </div>
        </motion.div>
    )
}

export default Message