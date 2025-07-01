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
  
  <TableHeader className='text-2xl bg-sky-200'>
    <TableRow>
      <TableHead >S.NO.</TableHead>
      <TableHead>Organisation</TableHead>
      <TableHead>Place</TableHead>
      <TableHead>Execution Date</TableHead>
      <TableHead className="text-right"></TableHead>
      <TableHead></TableHead>
    </TableRow>
  </TableHeader>

{AcademiaMOUList.academiaMOU.map((item,index) => (<CollaborationTable  index={index} key={index} Organisation={item.organisation} Place={item.place} ExecutionTime={item.executionTime} Logo={item.logo} Regarding={item.regarding} Pdfurl={item.pdfurl} />))}

</Table> 




    </>
    )
}

export default TableAcademia



//https://drive.google.com/file/d/1GxbUB1RyJavRMi4xk3q0eoqR6RLvFqxs/view
