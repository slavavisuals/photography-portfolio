import React from "react"
import {FaUserAlt, FaWineGlassAlt, FaShoppingBag} from "react-icons/fa";
import { GiLargeDress } from "react-icons/gi"
export default [
  {
    id: 1,
    icon: <FaUserAlt className="icon" />,
    label: "headshots",
    text:
      "In studio session with different looks. No limit on the number of photos",
  },
  {
    id: 2,
    icon: <FaWineGlassAlt className="icon" />,
    label: "Event Photography",
    text:
      "All kinds of events from weddings to engagement parties, corporate events, proposals, birthday parties"
      ,
  },
  {
    id: 3,
    icon: <FaShoppingBag className="icon" />,
    label: "Product Photography",
    text:
      "Providing expert photos at affordable rates for industry best quality",
  },
  {
    id: 4,
    icon: <GiLargeDress className="icon" />,
    label: "Fashion Photography ",
    text:
      "2 hour photography session in a location of your choice.",
  },
]
