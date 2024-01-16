import { Link } from 'react-router-dom'

const Sidebar = ({ ResarchArea, Icon }) => {
    return (
        <div className='p-2 font-medium text-lg hover:scale-105 transition duration-200 text-zinc-700'>
            <Link className='text-zinc-500 flex  items-center gap-3 hover:text-black text-lg '><Icon />{ResarchArea}</Link>
        </div>
    )
}

export default Sidebar