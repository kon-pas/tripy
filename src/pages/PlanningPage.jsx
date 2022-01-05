import { Component } from "react/cjs/react.production.min";
import Navbar from "../components/Navbar";

class PlanningPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="planning-page">
        <Navbar />
        Planujemy
      </div>
     );
  }
}
 
export default PlanningPage;