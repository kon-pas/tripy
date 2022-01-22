import ContractorContent from "../components/ContractorContent";
import Logout from "../components/Logout";

const ContractorPage = () => {
  return ( 
    <div className="contractor-page">
      <div className="header">
        <button onClick={() => window.location.href = '/'}>Strona główna</button>
        <Logout />
      </div>
      <div>
        <ContractorContent />
      </div>
    </div>
   );
}
 
export default ContractorPage;