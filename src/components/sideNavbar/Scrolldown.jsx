import React from 'react'
import { Link } from 'react-router-dom'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Scrolldown = () => {
    return (
        <div><Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">Collaboration</AccordionTrigger>
                <Link  to="/academia">
                    <AccordionContent className='text-xl font-bold'>
                        Academia
                    </AccordionContent>
                </Link>
                <Link to="/industry">
                    <AccordionContent className='text-xl font-bold'>
                        Industry
                    </AccordionContent>
                </Link>
                <Link to="/researchinstitute">
                    <AccordionContent className='text-xl font-bold'>
                        Research Institute
                    </AccordionContent>
                </Link>
            </AccordionItem>
        </Accordion>
        </div>
    )
}

export default Scrolldown