import Card from "./Card.jsx";

const Offerings = () => {
  const desc1 = "Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...";
  const desc2 = "It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist...";
  const desc3 = "Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India...";
  return (
    <div className="o-container">
    <div className="offerings">
      <div className="head-div">
        <h3>Our Offerings</h3>
        <p>This whole purchase journey can be divided into three stages. For more details, Click Here</p>
      </div>
      <div className="steps">
        <div className="small-container">
          <span class="material-symbols-outlined">
            counter_1
          </span>
          <h4>Pre-Booking</h4>
        </div>
        <div className="small-container sp">
          <span class="material-symbols-outlined">
            counter_2
          </span>
          <h4>Post-Booking & Pre-Registration</h4>
        </div>
        <div className="small-container">
          <span class="material-symbols-outlined">
            counter_3
          </span>
          <h4>Post-Registration</h4>
        </div>
      </div>
      <div className="card-container">
        <Card img="./c1.png" heading="Background verification" desc={desc1} hasBtn={true} btn="Contact Us" viewMore={false}/>
        <Card img="./c2.png" heading="Virtual site visit" desc={desc2} hasBtn={true} btn="Contact Us" viewMore={false}/>
        <Card img="./c3.png" heading="Title diligence" desc={desc3} hasBtn={true} btn="Contact Us" viewMore={false}/>
      </div>
    </div>
    </div>
  );
}

export default Offerings;