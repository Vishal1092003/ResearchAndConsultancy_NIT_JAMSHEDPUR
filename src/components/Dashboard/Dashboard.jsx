import { Link } from 'react-router-dom'
import logo from '../../assets/logoRC.png'
import './style.css'
import ReactCurvedText from 'react-curved-text'
const Dashboard = () => {
    return (<>
        <div className='  w-full h-full flex justify-center items-center '>
            <div className="wrap">
                <Link className=' logoTab flex justify-center group items-center ' to={'/home'}>
                    <ReactCurvedText width={300}
                        height={300}
                        cx='255'
                        cy='255'
                        rx='145'
                        ry='150'
                        startOffset='37'
                        reversed={true}
                        tspanProps={{ "dy": "-30" }}
                        text='Office Dean'
                        textProps={{ "style": { "fontSize": "30" } }} />
                </Link>
                <Link className='  logoTab bg-blue-300 group  flex justify-center items-center' to='/home'>
                    <ReactCurvedText width={300}
                        height={300}
                        cx='300'
                        cy='300'
                        rx='210'
                        ry='210'
                        startOffset='35'
                        reversed={true}
                        text='Research Expertise'
                        tspanProps={{ "dy": "-30" }}
                        textProps={{ "style": { "fontSize": "30" } }}
                    />
                </Link>
                <Link className=' logoTab flex group justify-center items-center' to='/home'>
                    <ReactCurvedText width={300}
                        height={300}
                        cx={40}
                        cy={260}
                        rx={180}
                        ry={185}
                        startOffset='310'
                        reversed={true}
                        text='Area of Research'
                        textProps={{ "style": { "fontSize": 30 } }}
                        textPathProps={null}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null} />
                </Link>
                <Link className=' logoTab flex group justify-center items-center' to='/home'>
                    <ReactCurvedText width={300}
                        height={300}
                        cx={280}
                        cy={20}
                        rx={200}
                        ry={200}
                        startOffset='20'
                        reversed={false}
                        text='Sponsored Research'
                        textProps={{ "style": { "fontSize": 30 } }}
                        tspanProps={{ "dy": "30" }}
                        textPathProps={null}
                        ellipseProps={null}
                        svgProps={null} />
                </Link>
                <Link className=' logoTab group flex justify-center items-center' to='/home'>
                    <ReactCurvedText width={300}
                        height={300}
                        cx='20'
                        cy='30'
                        rx='220'
                        ry='220'
                        startOffset='380'
                        reversed={false}
                        text='Research Consultancy'
                        textProps={{ "style": { "fontSize": 30 } }}
                        textPathProps={null}
                        tspanProps={{ "dy": "10" }}
                        ellipseProps={null}
                        svgProps={null} />
                </Link>
                <Link className=' logoTab group bg-blue-300' to='/home'>
                    <ReactCurvedText width={300}
                        height={300}
                        cx={290}
                        cy={10}
                        rx={200}
                        ry={200}
                        startOffset='70'
                        reversed={false}
                        text='Collaboration'
                        textProps={{ "style": { "fontSize": 30 } }}
                        tspanProps={{ "dy": "50" }}
                        textPathProps={null}
                        ellipseProps={null}
                        svgProps={null} />
                </Link>
                <Link to='/home' className=' logoTab group bg-blue-300' >
                    <ReactCurvedText width={300}
                        height={300}
                        cx='10'
                        cy='10'
                        rx='220'
                        ry='220'
                        startOffset='410'
                        reversed={false}
                        text='Patent(IPRCELL)'
                        textProps={{ "style": { "fontSize": 30 } }}
                        textPathProps={null}
                        tspanProps={{ "dy": "30" }}
                        ellipseProps={null}
                        svgProps={null} />
                </Link>
                <Link to='/home' className=' logoTab group bg-blue-300'>
                    <ReactCurvedText width={300}
                        height={300}
                        cx={10}
                        cy={300}
                        rx={200}
                        ry={210}
                        startOffset='360'
                        reversed={true}
                        text='Research Facilities'
                        textProps={{ "style": { "fontSize": 30 } }}
                        tspanProps={{ "dy": "-30" }}
                        textPathProps={null} />
                </Link>
                <Link to='/home' className='logoTab'>
                    <img src={logo} alt="" />
                </Link>
            </div>
        </div>
    </>
    )
}

export default Dashboard