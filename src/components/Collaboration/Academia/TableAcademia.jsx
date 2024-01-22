import React from 'react'
import {
    Table,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import CollaborationTable from '../CollaborationTable'
import AcademiaMOUList from '@/Data/AcademiaMOUList.json'


const TableAcademia = () => {
    return (<>
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

{AcademiaMOUList.academiaMOU.map((item,index) => (<CollaborationTable  index={index} key={index} Organisation={item.organisation} Place={item.place} ExecutionTime={item.executionTime} Logo={item.logo} Regarding={item.regarding} />))}

</Table> 




    </>
    )
}

export default TableAcademia