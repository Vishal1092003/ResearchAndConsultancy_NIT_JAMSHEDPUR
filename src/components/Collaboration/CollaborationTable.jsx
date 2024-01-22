import React from 'react'
import {
    
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
const CollaborationTable = ({index,Organisation,Place,ExecutionTime,Logo,Regarding}) => {
  return (
     
 
  <TableBody className='text-lg font-medium hover:bg-green-100 hover:scale-y-125 shadow-md'>
  <TableRow>
    <TableCell className="text-left font-medium">{index+1}</TableCell>
    <TableCell className="text-left">{Organisation}</TableCell>
    <TableCell className="text-left">{Place}</TableCell>
    <TableCell className="text-left">{ExecutionTime}</TableCell>
    <TableCell className="text-right">{Logo}</TableCell>
    <TableCell >
    <Dialog >
<DialogTrigger className='w-20 h-10 rounded-md shadow-md hover:bg-green-200'>Open</DialogTrigger>
<DialogContent className='w-full h-[60%] hover:scale-125'>
  <DialogHeader>
    <DialogTitle className='text-3xl'>MOU with:{Organisation}</DialogTitle>
    <DialogDescription className=' text-2xl font-bold '>
     Regarding:<div className='text-xl font-bold'>{Regarding}</div>
     
    </DialogDescription>
  </DialogHeader>
</DialogContent>
</Dialog>

    </TableCell>
  </TableRow>
</TableBody>
  )
}

export default CollaborationTable