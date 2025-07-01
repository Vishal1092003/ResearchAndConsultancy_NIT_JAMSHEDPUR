import {
  Table,
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

        {IndustryMOUList.industryMOU.map((item, index) => (<CollaborationTable index={index} key={index} Organisation={item.organisation} Place={item.place} ExecutionTime={item.executionTime} Logo={item.logo} Regarding={item.regarding} Pdfurl={item.pdfurl} />))}

      </Table>




    </>
  )
}

export default TableIndustry