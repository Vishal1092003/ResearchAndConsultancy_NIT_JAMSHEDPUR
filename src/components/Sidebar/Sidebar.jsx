import { Link } from 'react-router-dom';

const Sidebar = ({ ResarchArea, Icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='p-2 font-medium text-lg hover:scale-105 transition duration-200 text-zinc-700 cursor-pointer'
    >
      <Link
        to="#"
        className='md:text-zinc-500 flex items-center text-black gap-3 md:hover:text-black text-lg'
      >
        <Icon />
        {ResarchArea}
      </Link>
    </div>
  );
};

export default Sidebar;
