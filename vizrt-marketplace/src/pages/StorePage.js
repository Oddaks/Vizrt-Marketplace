import React, { useState } from "react";
import Logo from "../components/MarketplaceLogo";

// Variables
const productsArray = [
    {
      id: 1,
      title: "Stream Pack",
      creator: "mrSticky",
      price: 2999,
      description: "A great news channel overlay that includes three different overlayd for news, sports and weather. Also includes alert notification.",
      category: "Overlays",
      image: "productImages/StreamPack.png",
      verifiedUser: true,
      color: "Red",
      rating: {
        rate: 5,
        count: 120
      }
    },
    {
      id: 2,
      title: "Banner sport boundle",
      creator: "blowfish999",
      price: 1499,
      description: "A pack that includes 5 banners with a sports theme. All with several colours to pick from!",
      category: "Banners",
      image: "productImages/BannerPack.png",
      verifiedUser: true,
      color: "Blue",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 3,
      title: "Black and white stream boundle",
      creator: "mrSticky",
      price: 999,
      description: "Everything you need for a stream in a black and white color theme!",
      category: "Overlay",
      verifiedUser: true,
      color: ["Black","White"],
      image: "productImages/BlackAndWhiteBoundle.png",
      rating: {
        rate: 4.7,
        count: 500
      }
    },
    {
      id: 4,
      title: "10 alerts!",
      creator: "harry76",
      price: 4999,
      description: "A great alert pack with ten different alerts fitting for your choice of entertainment.",
      category: "Alets",
      verifiedUser: false,
      color: "Multicolor",
      image: "productImages/BlackAndWhiteBoundle.png",
      rating: {
        rate: 2.1,
        count: 430
      }
    },
    {
      id: 5,
      title: "Stream background boundle",
      creator: "harry76",
      price: 1699,
      description: "Different backgrounds for your stream",
      category: "Backgrounds",
      verifiedUser: false,
      color: "Multicolor",
      image: "productImages/StreamPack.png",
      rating: {
        rate: 4.6,
        count: 400
      }
    },
    {
      id: 6,
      title: "Newsroom Pastel",
      creator: "blowfish999",
      price: 2499,
      description: "A great news channel overlay that includes three different overlayd for news, sports and weather in pastel colours. Also includes alert notification.",
      category: "Overlays",
      verifiedUser: true,
      color: "Pastel",
      image: "productImages/FutureNewroom.png",
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {
      id: 7,
      title: "Newsroom Future",
      creator: "harry76",
      price: 1499,
      description: "A great news channel overlay that includes three different overlayd for news, sports and weather in pastel colours. Also includes alert notification.",
      category: "Overlays",
      verifiedUser: false,
      color: "Red",
      image: "productImages/FutureNewroom.png",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 8,
      title: "Transitions Pack",
      creator: "blowfish999",
      price: 999,
      description: "20 different transitions for different events",
      category: "Transitions",
      verifiedUser: true,
      color: "Black",
      image: "productImages/TransitionPack.png",
      rating: {
        rate: 4.7,
        count: 500
      }
    },
    {
      id: 9,
      title: "Elements Pack",
      creator: "harry76",
      price: 399,
      description: "100 elements",
      category: "Elements",
      verifiedUser: false,
      color: "Multicolor",
      image: "productImages/ElementsPack.png",
      rating: {
        rate: 2.1,
        count: 430
      }
    },
    {
      id: 10,
      title: "Stream background boundle",
      creator: "mrSticky",
      price: 1699,
      description: "Different backgrounds for your stream",
      category: "Backgrounds",
      verifiedUser: true,
      color: "Blue",
      image: "productImages/StreamPack.png",
      rating: {
        rate: 4.6,
        count: 400
      }
    },
    {
      id: 11,
      title: "Podcast Pack",
      creator: "blowfish999",
      price: 2999,
      description: "Everything you need for you podcast!",
      category: "Boundle",
      verifiedUser: true,
      color: "Pink",
      image: "productImages/StreamPack.png",
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {
      id: 12,
      title: "Sport boundle",
      creator: "animatorSteve",
      price: 1499,
      description: "A pack that includes everything you need, with a sports theme. All with several colours to pick from!",
      category: "Boundle",
      verifiedUser: true,
      color: "Pastel",
      image: "productImages/SportsBanner.png",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 13,
      title: "Black and white stream boundle",
      creator: "harry76",
      price: 999,
      description: "Everything you need for a stream in a black and white color theme!",
      category: "Overlay",
      verifiedUser: false,
      color: ["Black","White"],
      image: "productImages/BlackAndWhiteBoundle.png",
      rating: {
        rate: 4.7,
        count: 500
      }
    },
    {
      id: 14,
      title: "Unique banner bundle pack",
      creator: "blowfish999",
      price: 4999,
      description: "A great boundle with fun and unique banners",
      category: "Banners",
      verifiedUser: true,
      color: "Multicolor",
      image: "productImages/BannerPack.png",
      rating: {
        rate: 2.1,
        count: 430
      }
    },
    {
      id: 15,
      title: "Electric Transitions",
      creator: "harry76",
      price: 1699,
      description: "10 cool electric transitions",
      category: "Transitions",
      verifiedUser: false,
      color: "Blue",
      image: "productImages/ElectrickTransitionPack.png",
      rating: {
        rate: 4.6,
        count: 400
      }
    },
  ];

  /*
    We first made a standared HTML and JavaScript project to test and make filters for the products.
    This we did so that some could work on that while others set up both the GitHub and React.
    So in this code we have moved those over here, and then changed them a bit to impliment useState. 
  */
  
  // Used state variables for managing filter options and products
  const StorePage = () => {
    const [category, setCategory] = useState("");
    const [verifiedUser, setVerifiedUser] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    // Stores the filtered products within a state
    const [filteredProducts, setFilteredProducts] = useState(productsArray);
  
    // Filtere product function
    const filterProducts = () => {
        // The variables to store the filtered options from original pre React code
      const categoryChoice = category;
      const verifiedUserChoice = verifiedUser === 'true';
      const ratingChoice = parseInt(rating, 10);
      const priceChoice = parseInt(price, 10);
      const colorChoice = color;

        // Where the products gets filtered depending on the criteria set by the filtering
      const chosenProducts = productsArray.filter(product => {
        return (
          (categoryChoice === "" || product.category === categoryChoice) &&
          (verifiedUser === "" || product.verifiedUser === verifiedUserChoice) &&
          (isNaN(ratingChoice) || Math.floor(product.rating.rate) === ratingChoice) &&
          (isNaN(priceChoice) || (product.price >= priceChoice && product.price < (priceChoice + 1000))) &&
          (colorChoice === "" || product.color.includes(colorChoice))
        );
      });
      
      // Is used to update the state with the filtered products
      setFilteredProducts(chosenProducts);
    }

    return (
        // HTML from the original code pre React
        <div className="bg-viz-blue">
          <header>
            <h1>Products</h1>
          </header>
          <main>
            <section>
              <h3>Search for products</h3>
              {/* Category search filter */}
              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">All</option>
                <option value="Overlays">Overlays</option>
                <option value="Banners">Banners</option>
                <option value="Alets">Alets</option>
                <option value="Backgrounds">Backgrounds</option>
                <option value="Transitions">Transitions</option>
                <option value="Boundle">Boundle</option>
              </select>
              <button onClick={filterProducts}>Search</button>
            </section>

            <section>
                {/* Verified search filter */}
              <label>Verified User</label>
              <select value={verifiedUser} onChange={(e) => setVerifiedUser(e.target.value)}>
                <option value="">All</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <button onClick={filterProducts}>Search</button>
            </section>

            <section>
                {/* Rating search filter */}
              <label>Rating</label>
              <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="">All</option>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
              <button onClick={filterProducts}>Search</button>
            </section>

            <section>
                {/* Price search filter */}
              <label>Price</label>
              <select value={price} onChange={(e) => setPrice(e.target.value)}>
                <option value="">All</option>
                <option value="0">0-999</option>
                <option value="1000">1000-1999</option>
                <option value="2000">2000-2999</option>
                <option value="3000">3000-3999</option>
                <option value="4000">4000-4999</option>
              </select>
              <button onClick={filterProducts}>Search</button>
            </section>

            <section>
                {/* Color search filter */}
              <label>Color</label>
              <select value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="">All</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Multicolor">Multicolor</option>
                <option value="Pastel">Pastel</option>
                <option value="Pink">Pink</option>
              </select>
              <button onClick={filterProducts}>Search</button>
            </section>

            {/* Må inn og endre til product card */}
            <section id="products-section">
              {filteredProducts.map(product => (
                <article key={product.id}>
                  <p>Creator: {product.creator}</p>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>Rating: {product.rating.rate} ({product.rating.count}) Price: {product.price}Kr</p>
                  <p>................</p>
                </article>
              ))}
            </section>
          </main>
        </div>
      );
    };
    
    export default StorePage;
