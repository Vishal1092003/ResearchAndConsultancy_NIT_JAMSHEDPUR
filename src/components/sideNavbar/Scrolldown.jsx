import React from 'react'
import { Link } from 'react-router-dom'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {FaIndustry,FaUniversity,FaHandshake} from 'react-icons/fa'
import {BiSolidInstitution} from 'react-icons/bi'
const Scrolldown = () => {
    return (
        <div><Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl flex gap-1 justify-center items-center"><FaHandshake />Collaboration</AccordionTrigger>
                <Link  to="/academia">
                    <AccordionContent className='text-xl flex gap-1 justify-center items-center font-bold'>
                       <FaUniversity /> Academia
                    </AccordionContent>
                </Link>
                <Link to="/industry">
                    <AccordionContent className='text-xl flex gap-1 justify-center items-center font-bold'>
                      <FaIndustry />  Industry
                    </AccordionContent>
                </Link>
                <Link to="/researchinstitute">
                    <AccordionContent className='text-xl flex gap-1 justify-center items-center font-bold'>
                      <BiSolidInstitution />  Research Institute
                    </AccordionContent>
                </Link>
            </AccordionItem>
        </Accordion>
        </div>
    )
}

export default Scrolldown