import ContractorContent from "../components/ContractorContent";
import Logout from "../components/Logout";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContractorPage = () => {
  return (
    <div>
      <Header/>
        <div className="contractor-page">
          <div className="header">
            {/* <button onClick={() => window.location.href = '/'}>Strona główna</button> */}
            {/* <Logout /> */}
          </div>
          <div>
            <ContractorContent />
          </div>
        </div>
      <Footer/>
    </div>
   );
}
 
export default ContractorPage;