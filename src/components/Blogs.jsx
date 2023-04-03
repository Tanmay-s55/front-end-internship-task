import Card from "./Card";

const Blogs = () => {
    const descp = "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...";
  return (
    <div className="o-container blog">
        <div className="blogs">
            <div className="head-div">
                <h3>Blogs</h3>
            </div>
            <div className="members">
                    <Card img="./blog 1.png" heading="Brajesh Pathak" desc={descp} hasBtn={true} btn="View More" hasDate={true}/>
                    <Card img="./blog 2.png" heading="Brajesh Pathak" desc={descp} hasBtn={true} btn="View More" hasDate={true}/>
                    <Card img="./blog 3.png" heading="Brajesh Pathak" desc={descp} hasBtn={true} btn="View More" hasDate={true}/>
            </div>
        </div>
    </div>
  )
}

export default Blogs;

