import {

  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const CollaborationTable = ({ index, Organisation, Place, ExecutionTime, Logo, Regarding, Pdfurl }) => {
  return (


    <TableBody className='text-lg font-medium hover:bg-green-100 shadow-md'>
      <TableRow>
        <TableCell className="text-left font-medium">{index + 1}</TableCell>
        <TableCell className="text-left">{Organisation}</TableCell>
        <TableCell className="text-left">{Place}</TableCell>
        <TableCell className="text-left">{ExecutionTime}</TableCell>
        <TableCell className="text-right">{Logo}</TableCell>
        <TableCell >
          <Dialog >
            <DialogTrigger className='w-20 h-10 rounded-md shadow-md hover:bg-green-200'>Details</DialogTrigger>
            <DialogContent className=' max-w-[80%] h-[60%] flex justify-center flex-col items-center'>
              <DialogHeader>
                <DialogTitle className='text-3xl'>MOU with:{Organisation}</DialogTitle>
                <DialogDescription className=' text-2xl font-bold flex'>
                  Regarding:<div className='text-xl font-bold'>{Regarding}</div>

                </DialogDescription>
              </DialogHeader>
              <Link className='w-36 h-10 border flex justify-center flex-col items-center bg-red-500 rounded-md text-md font-semibold' to={Pdfurl} target='_blank'>
                <button>View pdf</button>
              </Link>
            </DialogContent>
          </Dialog>

        </TableCell>
      </TableRow>
    </TableBody>
  )
}

export default CollaborationTable