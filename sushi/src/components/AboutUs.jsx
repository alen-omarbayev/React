import Restaurant from "../assets/restaurant.png"
import Chef from "../assets/chef.png"
import Dining from "../assets/dining.png"

const AboutUs = () => {
    return(
        <div className="abt-us">
            <div className="abt-us-container">
            <h1>About Us</h1>
            <div class="abt-row">
                <div class="abt-img">
                    <img src={Restaurant} alt="img" />
                 </div>
                <div class="abt-content">
                    <h3>Our Philosophy</h3>
                    <p>
                        At Sushi House, sushi is more than just food – it’s an experience. Each roll is carefully prepared to combine tradition, creativity, and authentic Japanese flavors. <br />
                        
                    </p>
                    <p>
                        <b>Key Highlights: </b><br />
                            <li>Fresh, high-quality ingredients in every roll</li>
                            <li>Traditional recipes combined with modern touches</li>
                            <li>Attention to detail in presentation and taste</li>
                    </p>
                </div>
            </div>
            <div class="abt-row">
                <div class="abt-content">
                    <h3>Our Chefs & Fresh Ingredients</h3>
                    <p>
                        Our skilled chefs bring years of experience and passion to every dish. We ensure that each bite is perfectly balanced and delicious.
                    </p>
                    <p>
                    <b>What Makes Us Special:</b>
                    <li>Expert chefs with years of experience</li>
                    <li>Only the freshest seafood, vegetables, and rice</li>
                    <li>Creative rolls and seasonal specials</li>
                    </p>
                </div>
                <div class="abt-img">
                    <img src={Chef} alt="img" />
                 </div>
            </div>
            <div class="abt-row last">
                <div class="abt-img">
                    <img src={Dining} alt="img" />
                 </div>
                <div class="abt-content">
                    <h3>Dining & Delivery Experience</h3>
                    <p>
                        Whether you dine in or order online, we provide a pleasant and seamless experience.
                    </p>
                    <p>
                    <b>Customer Favorites:</b>
                    <li>Fast, safe, and reliable delivery</li>
                    <li>Cozy atmosphere and friendly service for dine-in</li>
                    <li>Consistent quality in every order</li>
                    </p>
                </div>
            </div>
            </div>
        </div>
        
    );
}

export default AboutUs;