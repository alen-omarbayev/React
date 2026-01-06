import classicRoll from '../assets/classic-roll.png'
import Philadelphia from '../assets/philadelphia.png'
import California from '../assets/california.png'

const menuItems = [
  // Rolls
  { title: "Classic Roll", description: "Salmon, rice, nori, cucumber", price: "3.60 €", img: classicRoll},
  { title: "Philadelphia", description: "Salmon, cream cheese, cucumber", price: "4.00 €", img: Philadelphia },
  { title: "California", description: "Crab, avocado, cucumber, mayo", price: "4.40 €", img: California },
  { title: "Spicy Tuna", description: "Tuna, spicy sauce, cucumber", price: "4.20 €" },
  // Sets
  { title: "Set of the Day", description: "8 assorted rolls", price: "9.00 €" },
  { title: "Set for Two", description: "16 rolls + mini salad", price: "17.00 €" },
  { title: "Favorite Set", description: "12 rolls + 2 portions of gyoza", price: "14.00 €" },
  { title: "Weekly Special", description: "8 exclusive rolls", price: "10.00 €" },
  // Drinks & Desserts
  { title: "Green Tea", description: "Traditional Japanese tea", price: "1.60 €" },
  { title: "Homemade Lemonade", description: "Fresh lemon with mint", price: "2.40 €" },
  { title: "Mochi (3 pcs)", description: "Japanese rice desserts", price: "3.00 €" },
  { title: "Carrot-Ginger Juice", description: "Refreshing natural juice", price: "2.60 €" },
];

const Menu = () => {
  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div className="menu-card" key={index}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
            <a href="" className="buy-button">Add</a>
        </div>
      ))}
    </div>
  );
};

export default Menu;
