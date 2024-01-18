import React from 'react'
import {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent} from '../ui/card.jsx'
const Cardpatent = () => {
  return (<>
   <Card className='w-60 h-72'>
            <CardHeader>
                <div>
                    <CardTitle>Title</CardTitle>
                    <CardDescription>description</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
            <h2>title</h2>
      <p><strong>Inventors:</strong> inventors</p>
      <p><strong>Filing Date:</strong> filingDate</p>
      <p><strong>Abstract:</strong> abstract</p>
            </CardContent>
            <CardFooter>
            @patent
            </CardFooter>
        </Card></>
    
  )
}

export default Cardpatent