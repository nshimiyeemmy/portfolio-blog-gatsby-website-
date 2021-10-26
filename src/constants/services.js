import React from "react"
import { FaCertificate, FaFacebookMessenger } from "react-icons/fa"
import { GrInternetExplorer, GrServices } from "react-icons/gr"
import { MdComputer } from "react-icons/md"
import { SiAdobeindesign } from "react-icons/si"

export default [
  {
    id: 1,
    icon: <SiAdobeindesign className="service-icon" />,
    title: "graphical design",
    text: `We provide graphical design lessons and services, provide you with neccessary skills in using tools like Adobe PhotoShop, Adobe Illustrator and many others in order for you to create an outstanding designs.`,
  },
  {
    id: 2,
    icon: <FaCertificate className="service-icon" />,
    title: "InternShips",
    text: `Our students and other people who have Information Technology skills and want to gain experience on using those skills to create productivity products that are sold on the market can come and join us .`,
  },
  {
    id: 3,
    icon: <GrServices className="service-icon" />,
    title: "Online government services",
    text: `we provide you with required skills in order to start interacting with goverment webistes online all by youself without seeking help from anyone else. Forexample requesting some documents via Irembo, RURA etc .`,
  },
  {
    id: 4,
    icon: <FaFacebookMessenger className="service-icon" />,
    title: "Social media productivity",
    text: `If you are a bussiness person and you want to make good use of the social  media forexampe advertising all your products and services on social medias like twitter & facebook in order to reach more customers. Come and join us we will help you reach your customers .`,
  },
  {
    id: 5,
    icon: <MdComputer className="service-icon" />,
    title: "Basic Computer skills",
    text: `We give trainings on how to use basic computer application programs like Microsoft Word,Microsoft Excel,Microsoft PowerPoint and many others, `,
  },
  {
    id: 6,
    icon: <GrInternetExplorer className="service-icon" />,
    title: "The rest of the internet",
    text: `Step in Technology helps you to acquire all skills required for you to be able to start working with the Internet world, such as  being  able to browse for a job online, be able to look for different opportunities that 
    are available all over the Internet Network`,
  },
]
