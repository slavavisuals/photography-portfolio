import React from "react"
import { FaCcStripe, FaCreditCard, FaAlipay } from "react-icons/fa"
export default [
  {
    page: "home",
    label: "home",
    url: `/`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "projects",
    label: "projects",
    url: `/projects`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "about",
    label: "about",
    url: `/about`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "contact",
    label: "contact",
    url: `/contact`,
    icon: <FaCreditCard className="icon" />,
  }
]
