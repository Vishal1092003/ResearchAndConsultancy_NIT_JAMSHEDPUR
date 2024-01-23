import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import CollaborationTable from '../CollaborationTable'
import ReserchInstituteMOUList from '@/Data/ReserchInstituteMOUList.json'
const TableReserchInstitute = () => {
  return (
    <>
     <Table>
  
  <TableHeader className='text-2xl bg-green-200'>
    <TableRow>
      <TableHead >S.NO.</TableHead>
      <TableHead>Organisation</TableHead>
      <TableHead>Place</TableHead>
      <TableHead>Execution Date</TableHead>
      <TableHead className="text-right"></TableHead>
      <TableHead></TableHead>
    </TableRow>
  </TableHeader>

{ReserchInstituteMOUList.reserchInstituteMOU.map((item,index) => (<CollaborationTable  index={index} key={index} Organisation={item.organisation} Place={item.place} ExecutionTime={item.executionTime} Logo={item.logo} Regarding={item.regarding} />))}
</Table> 




    </>
  )
}

export default TableReserchInstitute