import React from "react";
import styled from "styled-components";
import cust1 from "../assets/cust1.jpg"
import cust2 from "../assets/cust2.webp"
import cust3 from "../assets/cust3.jpg"
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Customers Says
          </h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image">
              <img src={cust1} alt="" />
            </div>
            <p>
            “The food was excellent and so was the service. I had a burger over greens and my brother had the mushroom risotto which was also very good.”        – Selena Gomez
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={cust2} alt="" />
            </div>
            <p>
            “The food was excellent and so was the service. My friend had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.” – Taylor Swift
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={cust3} alt="" />
            </div>
            <p>
            “The food was excellent and so was the service.  I had the mushroom risotto with scallops which was awesome.They were very conscientious about gluten allergies.” -Aish
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: white;
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #fc4958;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;
