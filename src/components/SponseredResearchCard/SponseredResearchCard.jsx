
const SponseredResearchCard = ({ title, principalInvestigator, fundingAgency, amount }) => {
    return (

<table className="w-[100%] text-start">
    <tr>
        <td className="border p-2 pr-8">Title: </td>
        <td className="border p-2">{title}</td>
    </tr>
    <tr>
        <td className="border p-2 pr-8">Principal Investigator: </td>
        <td className="border p-2">{principalInvestigator}</td>
    </tr>
    <tr>
        <td className="border p-2 pr-8">Funding Agency: </td>
        <td className="border p-2">{fundingAgency}</td>
    </tr>
    <tr>
        <td className="border p-2 pr-8">Amount: </td>
        <td className="border p-2">₹{amount}</td>
    </tr>
</table>

        // <div>
        //     <div className="pb-8 flex">
        //         Title:<div className="">{title}</div>
        //     </div>
        //     <div className="pb-8 flex" >
        //         Principal Investigator:<div className=" font-serif font-semibold">{principalInvestigator}</div>
        //     </div >
        //     <div className="pb-8 flex" >
        //         FundingAgency:<div className="">{fundingAgency}</div>
        //     </div >
        //     <div className="pb-8 flex" >
        //         Amount:<div className="">{amount}</div>
        //     </div >
        // </div >
    )
}

export default SponseredResearchCard