import classicRoll from '../assets/classic-roll.png'
import Philadelphia from '../assets/philadelphia.png'
import California from '../assets/california.png'
import Tuna from '../assets/tuna.png'
import SetOfTheDay from '../assets/SetOfTheDay.png'
import SetForTwo from '../assets/SetForTwo.png'
import SushiGyoza from '../assets/sushiGyoza.png'
import Special from '../assets/Special.png'
import Tea from '../assets/tea.png'
import Lemonade from '../assets/lemonade.png'
import Mochi from '../assets/mochi.png'
import Tropic from '../assets/tropic.png'

const menuItems = [
  // Rolls
  { title: "Classic Roll", description: "Salmon, rice, nori, cucumber", price: "3.60 €", img: classicRoll},
  { title: "Philadelphia", description: "Salmon, cream cheese, cucumber", price: "4.00 €", img: Philadelphia },
  { title: "California", description: "Crab, avocado, cucumber, mayo", price: "4.40 €", img: California },
  { title: "Spicy Tuna", description: "Tuna, spicy sauce, cucumber", price: "4.20 €", img: Tuna },
  // Sets
  { title: "Set of the Day", description: "8 assorted rolls", price: "9.00 €", img: SetOfTheDay },
  { title: "Set for Two", description: "16 rolls + mini salad", price: "17.00 €", img: SetForTwo },
  { title: "Favorite Set", description: "7 rolls + 3 portions of gyoza", price: "14.00 €", img: SushiGyoza },
  { title: "Weekly Special", description: "8 exclusive rolls", price: "10.00 €", img: Special },
  // Drinks & Desserts
  { title: "Green Tea", description: "Traditional Japanese tea", price: "1.60 €", img: Tea },
  { title: "Homemade Lemonade", description: "Fresh lemon with mint", price: "2.40 €", img: Lemonade},
  { title: "Mochi (3 pcs)", description: "Japanese rice desserts", price: "3.00 €", img: Mochi},
  { title: "Tropic Lemonade", description: "Tropic fruits", price: "2.60 €", img: Tropic },
];

const Menu = () => {
  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div className="menu-card" key={index}>
            <img src={item.img} alt="" />
            <div className='card-content'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <a href="" className="buy-button">Add</a>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
