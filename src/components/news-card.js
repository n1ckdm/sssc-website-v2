/* eslint-disable react/prop-types */
import Image from "gatsby-image"
import React from "react"
import { Link } from "gatsby"
import { useImages } from "../hooks/use-images"
import * as utils from "../utils"

const NewsCard = ( { news } ) => {
  const imgFluid = useImages().find((f => f.originalName === utils.parseImageName(news.image)))
  return (
    <div className="md:w-4/12 m-4 shadow-lg">
      <Link to={ news.fields.slug } >
        <Image
          className="h-60"
          fluid={ imgFluid }
          alt={ news.title }
        />
        <p className="font-semibold">{news.title}</p>
        <p className="text-gray-700 font-light">{news.description}</p>
      </Link>
    </div>
  )
}

export default NewsCard