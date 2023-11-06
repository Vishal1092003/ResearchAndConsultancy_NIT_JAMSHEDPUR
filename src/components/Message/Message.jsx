import { motion } from 'framer-motion'
import img from '../../assets/img.jpeg'
const Message = () => {
    return (
        <motion.div
            initial={{ x: 500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
        <div className='w-full flex p-4 justify-center '>
                <div className='flex flex-col md:flex-row shadow-lg bg-sky-100 rounded-md w-[90%]'>
                <div className='h-full flex justify-center items-center flex-col min-w-[13rem] py-5 px-4 rounded-md'>
                    <img className=' rounded-lg' src={img} width={150} height={400} alt="" />
                    <div className='w-full flex p-2 justify-center font-semibold text-lg'>
                        Prof.MK Sinha
                    </div>
                </div>
                <div className=''>
                    <div className='py-5 px-4 h-[500px] flex justify-center items-center overflow-scroll'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde totam non in magnam est tenetur rem sunt et quaerat! Vitae, ullam. Enim magni officia asperiores doloremque impedit, non dolor corporis.
                        Necessitatibus nam mollitia, rerum vero blanditiis iure quibusdam corrupti enim fuga nisi ullam expedita nihil, recusandae dolores placeat sit, illum iusto. Maxime, quisquam. Iusto corrupti, impedit dolorum quam dicta distinctio.
                        Aperiam, necessitatibus voluptatum nihil perspiciatis sit, officiis ratione ut incidunt, esse quos corporis ipsa expedita nemo nobis maxime libero itaque accusamus! Maiores doloremque assumenda incidunt totam at aut tempore blanditiis.
                        Perspiciatis dolor quae provident repellat atque quisquam, possimus officiis nisi reiciendis aliquam, temporibus quia consequuntur vero optio beatae dolores inventore voluptatum consectetur sapiente cupiditate. Sit quos nobis iste asperiores beatae?
                        Fugit omnis necessitatibus eius unde cum? Laudantium numquam rem fuga ipsam accusantium omnis repudiandae, iusto vel aspernatur molestias earum est illum nulla maiores, necessitatibus sunt laborum at labore cumque odit
                    </div>
                </div>
            </div>
            </div>
        </motion.div>
    )
}

export default Message