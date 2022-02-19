import React from "react";
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: product1,
      name: "Chicken Burger",
      price: "₹280/pcs",
      abt:"Topped with avocado, onion, alfafa sprouts, tomatoes and sun-dried tomato pesto.",
    },
    {
      image: product2,
      name: "Toasted Bread",
      price: "₹200/pcs",
      abt:"Topped with Mozzarella cheese, italian bread, butter, olive oil, garlic"
    },
    {
      image: product3,
      name: "Egg Sandwich",
      price: "₹220/pcs",
      abt:"Topped with extra American cheese, white bread, milk and egg"
    },

    {
      image: product4,
      name: "Raspberry Cake",
      price: "₹680/pcs",
      abt:"Topped with Cream cheese, raspberry filling, sour cream, cake flour, powdered"
    },
    {
      image: product5,
      name: "Pizza",
      price: "₹480/pcs",
      abt:"Topped with cream cheese, onion, alfafa sprouts, tomatoes and sun-dried tomato pesto.",
    },
    {
      image: product6,
      name: "Pasta",
      price: "₹440/pcs",
      abt:"Pasta, heavy cream, tomato paste, mozzarella cheese, red onion, alfafa sprouts.",
    },
    {
      image: product7,
      name: "Noodle",
      price: "₹520/pcs",
      abt:"Whole wheat, soy sauce, french beans, toasted sesame oil, green Cabbage, carrot, egg.",
    },
    {
      image: product8,
      name: "Sushi",
      price: "₹280/pcs",
      abt:"Avocado, cucumber, sesame seeds, romaine lettuce, grain white rice, rice vinegar, pickled.",
    },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>{product.abt}</p>
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #fc4958;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d04);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #e85d04, #fc4958);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
