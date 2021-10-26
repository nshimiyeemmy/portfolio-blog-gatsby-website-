import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/Testimonials.css";
import Title from "./Title";

export default function Testimonials() {
  let data = [
    {
      id: 1,
      names: "Julio R.",
      title: "Web Developer",
      country: "Chile",
      description:
        "I started at stage zero. With this platform I was able to start learning online and eventually build up enough knowledge and skills to transition into a well-paying career",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4Tixoe62Y1u5VXqpM2mGPY/f4c89352619639057ca8648e64456aab/coursera-learner-a.png?auto=format%2Ccompress&dpr=2&w=202&h=202&q=40"
    },
    {
      id: 2,
      names: "Kara A.",
      title: "MBA Graduate, University of Illinois",
      country: "United States",
      description:
        "I started at stage zero. With this platform I was able to start learning online and eventually build up enough knowledge and skills to transition into a well-paying career",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/yi0wou0N5EsZGDfVejLKR/efce71fb9c36c759a5c96d37a8cdc5e0/coursera-learner-b.png?auto=format%2Ccompress&dpr=2&w=202&h=202&q=40"
    },
    {
      id: 3,
      names: "Milera I.",
      title: "Data Science professional",
      country: "Romania",
      description:
        "I started at stage zero. With this platform I was able to start learning online and eventually build up enough knowledge and skills to transition into a well-paying career",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7caQWjB2R0E1urlsdNUpdW/3de2d5d9afcd53e8447cd566e632be07/coursera-learner-c.png?auto=format%2Ccompress&dpr=2&w=202&h=202&q=40"
    },
    {
      id: 4,
      names: "Sabrina M.",
      title: "HR Manager, ZS Associates",
      country: "United States",
      description:
        "I started at stage zero. With this platform I was able to start learning online and eventually build up enough knowledge and skills to transition into a well-paying career",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5LDGatPtRSYDXjfMkQF0Id/238e7338df5a05e837e1fef84cceb7fc/coursera-learner-d.png?auto=format%2Ccompress&dpr=2&w=202&h=202&q=40"
    },
    {
      id: 5,
      names: "Dave Halewood",
      title: "Web Developer",
      country: "Canada",
      description:
        "I started at stage zero. With this platform I was able to start learning online and eventually build up enough knowledge and skills to transition into a well-paying career",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1057964722585305088/jZJUDPhj_400x400.jpg"
    },
    {
      id: 6,
      names: "Sarah Dasner",
      title: "Web Developer",
      country: "Sweden",
      description:
        "I started at stage zero. With this platform I was able to start learning online and eventually build up enough knowledge and skills to transition into a well-paying career",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1281071936605323266/wc1KRZLK_400x400.jpg"
    },
    {
      id: 7,
      names: "Andrew Poe",
      title: "Web Developer",
      country: "Egypt",
      description:
        "I started at stage zero. With this platform I was able to start learning online and eventually build up enough knowledge and skills to transition into a well-paying career",
      imageUrl:
        "https://pbs.twimg.com/profile_images/599651293423128578/-7h5hALt_400x400.png"
    }
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };

  return (
    <>
    <div className="testimonials">
    <div style={{height: "2rem"}}></div>
    <Title title="Testimonials" />
    <div style={{height: "2rem"}}></div>
      {/* <h1>Testimonials</h1> */}
      <Carousel responsive={responsive} autoPlay={true}>
        {data.map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <img src={testimonial.imageUrl} alt={testimonial.names}></img>
            <div className="personal-info">
              <h1 className="names">{testimonial.names}</h1>
              <h5 className="title">{testimonial.title}</h5>
              <p className="country">{testimonial.country}</p>
            </div>
            <p className="description">{testimonial.description}</p>
          </div>
        ))}
      </Carousel>
      ;
    </div>
    </>
  );
}
