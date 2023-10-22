import React from 'react'
import logo from '../../assets/logoRC.png'
const Dashboard = () => {
    return (<>
        <div className='w-full flex justify-center items-center  h-[90vh] md:h-[83vh] bg-slate-200'>
            <div style={{ "animationDuration": "15s" }} className='w-[70vh] rounded-full  md:w-[45vh] h-[10vh] md:h-[45vh] flex justify-center items-center animate-spin '>
                <img src={logo} alt="Logo" className={` w-[70vw]  py-3 md:w-[25vw]`} />
            </div>
        </div>
    </>
    )
}

export default Dashboard