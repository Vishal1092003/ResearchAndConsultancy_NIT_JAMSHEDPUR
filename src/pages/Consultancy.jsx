import Navbar from '../components/Navbar/Navbar'
import SponseredResearchData from '../Data/SponseredResearchData.json'

const Consultancy = () => {
    return (
        <div className='w-[100vw] min-h-[100vh] bg-gray-50'>
            <Navbar />
            
            {/* Hero Section with Gradient Background */}
            <div className='w-full h-64 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 flex flex-col justify-center items-center relative'>
                {/* Background Icons */}
                <div className='absolute top-8 left-12 text-white opacity-20'>
                    <svg className='w-12 h-12' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/>
                    </svg>
                </div>
                <div className='absolute top-12 right-16 text-white opacity-20'>
                    <svg className='w-16 h-16' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z'/>
                    </svg>
                </div>
                
                {/* Main Icon */}
                <div className='mb-4'>
                    <svg className='w-20 h-20 text-white' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z'/>
                    </svg>
                </div>
                
                {/* Title */}
                <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>
                    Our Consultancy with Academia
                </h1>
            </div>

            {/* Stats Cards Section */}
            <div className='w-full py-12 bg-gray-50'>
                <div className='max-w-6xl mx-auto px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                        {/* Active Projects Card */}
                        <div className='bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300'>
                            <div className='mb-4'>
                                <svg className='w-16 h-16 text-blue-500 mx-auto' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z'/>
                                </svg>
                            </div>
                            <div className='text-4xl font-bold text-gray-800 mb-2'>
                                {SponseredResearchData.Sheet.length}
                            </div>
                            <div className='text-gray-600 font-medium'>
                                Active Projects
                            </div>
                        </div>

                        {/* Partner Institutions Card */}
                        <div className='bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300'>
                            <div className='mb-4'>
                                <svg className='w-16 h-16 text-orange-500 mx-auto' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z'/>
                                </svg>
                            </div>
                            <div className='text-4xl font-bold text-gray-800 mb-2'>
                                {new Set(SponseredResearchData.Sheet.map(item => item.Sponsoring_Agency)).size}
                            </div>
                            <div className='text-gray-600 font-medium'>
                                Partner Institutions
                            </div>
                        </div>
                    </div>

                    {/* Partnership Network Section */}
                    <div className='text-center mb-8'>
                        <h2 className='text-3xl font-bold mb-2'>
                            <span className='text-gray-800'>Our </span>
                            <span className='text-blue-600'>Consultancy </span>
                            <span className='text-orange-500'>Network</span>
                        </h2>
                        <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto'></div>
                    </div>
                </div>
            </div>

            {/* Projects List - Matching Partnership Theme */}
            <div className='pb-10 bg-gray-50'>
                <div className='max-w-6xl mx-auto px-4 space-y-6'>
                    {SponseredResearchData.Sheet.map((item, index) => (
                        <div key={index} className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6'>
                            <div className='flex items-start justify-between'>
                                {/* Left side with number circle and project info */}
                                <div className='flex items-start space-x-4'>
                                    {/* Numbered Circle */}
                                    <div className='flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center'>
                                        <span className='text-white font-bold text-lg'>{index + 1}</span>
                                    </div>
                                    
                                    {/* Project Details */}
                                    <div className='flex-1'>
                                        <h3 className='text-xl font-bold text-gray-800 mb-2'>
                                            {item.Name_of_Project}
                                        </h3>
                                        
                                        <div className='flex items-center space-x-2 mb-2'>
                                            <svg className='w-4 h-4 text-gray-500' fill='currentColor' viewBox='0 0 24 24'>
                                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/>
                                            </svg>
                                            <span className='text-gray-600 font-medium'>{item.Sponsoring_Agency}</span>
                                        </div>
                                        
                                        <div className='space-y-1 text-sm text-gray-600'>
                                            <p><span className='font-medium'>Department:</span> {item.Department}</p>
                                            <p><span className='font-medium'>Principal Investigator:</span> {item.Name_of_PI}</p>
                                            <p><span className='font-medium'>Sanctioned Amount:</span> ₹{item.Sanctioned_Amount}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Right side with date */}
                                <div className='flex flex-col items-center space-y-1'>
                                    {/* Date Label */}
                                    <div className='flex items-center space-x-2 text-gray-600'>
                                        <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                                            <path d='M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z'/>
                                        </svg>
                                        <span className='text-sm font-medium'>Sanctioned</span>
                                    </div>
                                    <div className='text-gray-600'>
                                        <span className='text-sm font-medium'>Date</span>
                                    </div>
                                    {/* Date Value */}
                                    <div className='text-2xl font-bold text-gray-800'>
                                        {item.Year_of_Sanction}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Consultancy