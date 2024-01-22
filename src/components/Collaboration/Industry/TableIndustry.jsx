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
import IndustryMOUList from '@/Data/IndustryMOUList.json'
const TableIndustry = () => {
  return (
    <>
     <Table>
  
  <TableHeader className='text-2xl bg-green-200'>
    <TableRow>
      <TableHead >S.NO.</TableHead>
      <TableHead>Organisation</TableHead>
      <TableHead>Place</TableHead>
      <TableHead>Execution Date</TableHead>
      <TableHead className="text-right">Logo</TableHead>
      <TableHead></TableHead>
    </TableRow>
  </TableHeader>

{IndustryMOUList.industryMOU.map((item,index) => (<CollaborationTable  index={index} key={index} Organisation={item.organisation} Place={item.place} ExecutionTime={item.executionTime} Logo={item.logo} Regarding={item.regarding} />))}

</Table> 




    </>
  )
}

export default TableIndustry