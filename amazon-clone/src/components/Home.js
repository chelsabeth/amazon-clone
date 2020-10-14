import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            {/* <h1>I am the home page</h1> */}
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MjA4OGQ5Mjkt/MjA4OGQ5Mjkt-NDM5NGI1MTEt-w3000._CB404065261_.jpg" alt="top amazon banner"/>

            {/* product id, title, price, rating, image */}
            <div className="home__row">
            <Product
                id="1"
                title="PlayStation 5 Console"
                price={499.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/619BkvKW35L._AC_UY436_FMwebp_QL65_.jpg"
            />
            <Product
                id="2"
                title="Echo Dot Kids Edition with Kids Edition Tablet"
                price={169.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/517gKDHHowL._AC_UY218_.jpg"
            />
            </div>

            <div className="home__row">
            <Product
                id="3"
                title="Apple Airpods with Charging Case (Wired)"
                price={114.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/31jBnwWr91L._AC_SY200_.jpg"
            />
            <Product
                id="4"
                title="Noise Cancelling Gaming Headset with Microphone"
                price={26.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/71ZrQy-n8wL._AC_UY218_.jpg"
            />
            <Product
                id="5"
                title="Echo Show 8"
                price={64.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/41r7jEN9SdL._AC_SY200_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
                id="6"
                title="Insignia 32-inch Smart HD TV - Fire Edition"
                price={109.99}
                rating={5}
                image="https://m.media-amazon.com/images/G/01/kindle/journeys/MmUwZWEyOWUt/MmUwZWEyOWUt-MGY0NGM1NWEt-w210._AC_SY200_.jpg"
            />
            </div>
            {/* product */}
        </div>
    )
}

export default Home
