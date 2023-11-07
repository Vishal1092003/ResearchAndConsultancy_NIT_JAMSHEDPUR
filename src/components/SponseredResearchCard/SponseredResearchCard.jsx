
const SponseredResearchCard = ({ title, principalInvestigator, fundingAgency, amount }) => {
    return (
        <div className="w-[97%] min-h-[400px]">
            <div className="text-xl py-10 flex font-extrabold text-slate-600">
                Title:<div className=" font-serif font-semibold">{title}</div>
            </div>
            <div className="text-xl p-4 flex font-extrabold text-slate-600" >
                Principal Investigator:<div className=" font-serif font-semibold">{principalInvestigator}</div>
            </div >
            <div className="text-xl p-4 flex font-extrabold text-slate-600" >
                FundingAgency:<div className=" font-serif font-semibold">{fundingAgency}</div>
            </div >
            <div className="text-xl p-4 flex font-extrabold text-slate-600" >
                Amount:<div className=" font-serif font-semibold">{amount}</div>
            </div >
        </div >
    )
}

export default SponseredResearchCard