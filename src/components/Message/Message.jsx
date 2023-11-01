import React from 'react'
import img from '../../assets/img.jpeg'
const Message = () => {
    return (
        <div className='w-full flex p-4 justify-center'>
            <div className='flex flex-col md:flex-row w-[90%]'>
                <div className='h-full flex justify-center items-center flex-col min-w-[13rem] py-5 px-4 rounded-md'>
                    <img className=' rounded-lg' src={img} width={150} height={400} alt="" />
                    <div className='w-full flex p-2 justify-center font-semibold text-lg'>
                        Prof.MK Sinha
                    </div>
                </div>
                <div className=''>
                    <div className='py-5 px-4 h-[500px] flex justify-center items-center h-full overflow-scroll'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde totam non in magnam est tenetur rem sunt et quaerat! Vitae, ullam. Enim magni officia asperiores doloremque impedit, non dolor corporis.
                        Necessitatibus nam mollitia, rerum vero blanditiis iure quibusdam corrupti enim fuga nisi ullam expedita nihil, recusandae dolores placeat sit, illum iusto. Maxime, quisquam. Iusto corrupti, impedit dolorum quam dicta distinctio.
                        Aperiam, necessitatibus voluptatum nihil perspiciatis sit, officiis ratione ut incidunt, esse quos corporis ipsa expedita nemo nobis maxime libero itaque accusamus! Maiores doloremque assumenda incidunt totam at aut tempore blanditiis.
                        Perspiciatis dolor quae provident repellat atque quisquam, possimus officiis nisi reiciendis aliquam, temporibus quia consequuntur vero optio beatae dolores inventore voluptatum consectetur sapiente cupiditate. Sit quos nobis iste asperiores beatae?
                        Fugit omnis necessitatibus eius unde cum? Laudantium numquam rem fuga ipsam accusantium omnis repudiandae, iusto vel aspernatur molestias earum est illum nulla maiores, necessitatibus sunt laborum at labore cumque odit!
                        Quisquam iure eos maxime quidem quae magnam consectetur sed molestias saepe aspernatur praesentium assumenda mollitia fuga commodi deserunt explicabo dicta nemo obcaecati autem voluptatem sapiente quaerat, illum qui tempora. Obcaecati?
                        Sapiente est natus tempora explicabo perferendis ipsum laboriosam accusamus expedita fugit. Ullam doloribus neque ut, quae nihil, voluptatibus iste ducimus dolor inventore, aliquid quam quo labore eius eveniet magnam fugit!
                        Maiores, dolor facere! Minus nulla hic vitae dolores impedit alias eligendi deleniti aperiam laudantium, inventore accusantium, animi cum ipsa quidem? Neque obcaecati optio dicta reiciendis rerum quo nemo sint quaerat.
                        Corrupti accusantium enim nulla at inventore, hic non rem modi rerum delectus iure asperiores quaerat libero quisquam dicta aut, dolore totam itaque a excepturi, repudiandae obcaecati voluptas voluptates. Cumque, magni?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message