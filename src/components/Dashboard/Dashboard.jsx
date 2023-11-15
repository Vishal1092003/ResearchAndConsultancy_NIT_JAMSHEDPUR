import { Link } from 'react-router-dom'
import logo from '../../assets/logoRC.png'
import './style.css'
import ReactCurvedText from 'react-curved-text'
import { useEffect, useState } from 'react'
const Dashboard = () => {
    const [deviceType, setDeviceType] = useState("desktop");
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setDeviceType("mobile");
            } else if (width > 768 && width <= 1024) {
                setDeviceType("tablet");
            } else {
                setDeviceType("desktop");
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (<>
        <div className='  w-full h-full flex justify-center items-center '>
            <div className="wrap">
                <Link className=' logoTab flex justify-center group items-center ' to={'/home'}>
                    <ReactCurvedText
                        width={300}
                        height={300}
                        text='Office Dean'
                        cx={ deviceType == "mobile"? 220 :  250}
                        cy={ deviceType == "mobile"? 225 : 250}
                        rx={ deviceType == "mobile" ? 190 : 180}
                        ry={ deviceType == "mobile"? 155 : 170}
                        reversed={true}
                        startOffset={35}
                        textProps={{ "style": { "fontSize": deviceType == "desktop"? "2rem": deviceType == "tablet"?"1.8rem":"1rem" } }}
                    />
                </Link>
                <Link className='  logoTab bg-blue-300 group  flex justify-center items-center' to='/home'>
                    <ReactCurvedText
                        width={300}
                        height={300}
                        cx={ deviceType == "mobile"? 240 :  280}
                        cy={ deviceType == "mobile"? 250 : 300}
                        rx={ deviceType == "mobile" ? 195 : 198}
                        ry={ deviceType == "mobile"? 140 : 205}
                        startOffset='32'
                        reversed={true}
                        text='Research Expertise'
                        tspanProps={{ "dy": "-32" }}
                        textProps={{ "style": { "fontSize": deviceType == "mobile" ? "0.88rem": "2rem" } }}
                    />
                </Link>
                <Link className=' logoTab flex group justify-center items-center' to='/home'>
                    <ReactCurvedText width={300}
                        height={300}
                        cx={ deviceType == "mobile"? -75 :  40}
                        cy={ deviceType == "mobile"? 228 : 260}
                        rx={ deviceType == "mobile" ? 188 : 195}
                        ry={ deviceType == "mobile"? 135 : 195}
                        startOffset='350'
                        reversed={true}
                        text='Area of Research'
                        textProps={{ "style": { "fontSize": deviceType == "mobile"?"1rem" : "2rem" } }}
                        textPathProps={null}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null} />
                </Link>
                <Link className=' logoTab flex group justify-center items-center' to='/home'>
                    <ReactCurvedText width={300}
                        height={300}
                        cx={ deviceType == "mobile"? 265 :  280}
                        cy={ deviceType == "mobile"? 65 : 20}
                        rx={ deviceType == "mobile" ? 225 : 205}
                        ry={ deviceType == "mobile"? 138 : 215}
                        startOffset='20'
                        reversed={false}
                        text='Sponsored Research'
                        textProps={{ "style": { "fontSize": deviceType == "mobile"?"0.88rem":"2rem" } }}
                        tspanProps={{ "dy": "30" }}
                        textPathProps={null}
                        ellipseProps={null}
                        svgProps={null} />
                </Link>
                <Link className=' logoTab group flex justify-center items-center' to='/home'>
                    <ReactCurvedText width={300}
                        height={300}
                        cx={ deviceType == "mobile"? -58 :  15}
                        cy={ deviceType == "mobile"? 10 : 30}
                        rx={ deviceType == "mobile" ? 188: 225}
                        ry={ deviceType == "mobile"? 200: 230}
                        startOffset='378'
                        reversed={false}
                        text='Research Consultancy'
                        textProps={{ "style": { "fontSize": deviceType == "mobile"?"0.88rem": "2rem"} }}
                        textPathProps={null}
                        tspanProps={{ "dy": "10" }}
                        ellipseProps={null}
                        svgProps={null} />
                </Link>
                <Link className=' logoTab group bg-blue-300' to='/home'>
                    <ReactCurvedText width={300}
                        height={300}
                        cx={ deviceType == "mobile"? 170 :  290}
                        cy={ deviceType == "mobile"? -100 : -10}
                        rx={ deviceType == "mobile" ? 135 : 180}
                        ry={ deviceType == "mobile"? 180 : 255}
                        startOffset='110'
                        reversed={false}
                        text='Collaboration'
                        textProps={{ "style": { "fontSize": deviceType == "mobile"?"0.88rem": "2rem" } }}
                        tspanProps={{ "dy": "50" }}
                        textPathProps={null}
                        ellipseProps={null}
                        svgProps={null} />
                </Link>
                <Link to='/home' className=' logoTab group bg-blue-300' >
                    <ReactCurvedText width={300}
                        height={300}
                        cx={ deviceType == "mobile"? -82 :  35}
                        cy={ deviceType == "mobile"? -88 : 60}
                        rx={ deviceType == "mobile" ? 210 : 230}
                        ry={ deviceType == "mobile"? 205: 220}
                        startOffset='430'
                        reversed={false}
                        text='Patent(IPRCELL)'
                        textProps={{ "style": { "fontSize": deviceType == "mobile"?"0.88rem":"2rem" } }}
                        textPathProps={null}
                        tspanProps={{ "dy": "30" }}
                        ellipseProps={null}
                        svgProps={null} />
                </Link>
                <Link to='/home' className=' logoTab group bg-blue-300'>
                    <ReactCurvedText width={300}
                        height={300}
                        cx={ deviceType == "mobile"? -88 :  10}
                        cy={ deviceType == "mobile"? 215 : 310}
                        rx={ deviceType == "mobile" ? 195 : 220}
                        ry={ deviceType == "mobile"? 179 : 190}
                        startOffset='355'
                        reversed={true}
                        text='Research Facilities'
                        textProps={{ "style": { "fontSize":deviceType == "mobile"?"0.88rem":"2rem"} }}
                        tspanProps={{ "dy": "-30", "dx": "30" }}
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