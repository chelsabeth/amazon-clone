import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            {/* <h1>I am the home page</h1> */}
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MjA4OGQ5Mjkt/MjA4OGQ5Mjkt-NDM5NGI1MTEt-w3000._CB404065261_.jpg" alt="top amazon banner"/>

            {/* product id, title, price, rating, image */}
            <Product
                id="12345"
                title="PlayStation 5 Console"
                price={499.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/619BkvKW35L._AC_UY436_FMwebp_QL65_.jpg"
            />
            {/* product */}
        </div>
    )
}

export default Home
