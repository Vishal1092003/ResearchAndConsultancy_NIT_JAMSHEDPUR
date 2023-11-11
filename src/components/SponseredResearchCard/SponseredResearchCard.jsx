
const SponseredResearchCard = ({ title, principalInvestigator, fundingAgency, amount }) => {
    return (

        <table className="w-[100%] min-h-[53vh] text-start">
    <tr>
                <td className="border pl-5 pr-8 font-medium  text-xl">Title: </td>
                <td className="border p-2 font-medium text-md">{title}</td>
    </tr>
    <tr>
                <td className="border pl-5 pr-8 font-medium  text-xl">Principal Investigator: </td>
                <td className="border p-2 font-medium text-md">{principalInvestigator}</td>
    </tr>
    <tr>
                <td className="border pl-5 pr-8 font-medium  text-xl">Funding Agency: </td>
                <td className="border p-2 font-medium text-md">{fundingAgency}</td>
    </tr>
    <tr>
                <td className="border pl-5 pr-8 font-medium  text-xl">Amount: </td>
                <td className="border p-2 font-medium text-lg">₹{amount}</td>
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