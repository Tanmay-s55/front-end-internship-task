import Card from "./Card";

const Team = () => {
    const desc1 = "A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...";
    const desc2 = "Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained MBA from the Indian Institute of Management (IIM) Ahmedabad, India...";
    const desc3 = "Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital.";
    return (
        <div className="o-container">
            <div className="team">
                <div className="head-div">
                    <h3>Our Team</h3>
                </div>
                <div className="members">
                    <Card img="./team1.png" heading="Brajesh Pathak" desc={desc1} hasBtn={false} viewMore={true}/>
                    <Card img="./team2.png" heading="Deepak Shukla" desc={desc2} hasBtn={false} viewMore={true}/>
                    <Card img="./team3.png" heading="Alok Kumar Singh" desc={desc3} hasBtn={false} viewMore={true}/>
                </div>
            </div>
        </div>
  );
}

export default Team;