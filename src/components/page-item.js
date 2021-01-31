/* eslint-disable react/prop-types */
import Image from "gatsby-image"
import React from "react"
import ReactMarkdown from 'react-markdown'
import { useImages } from "../hooks/use-images"
import * as utils from "../utils"

const PageItem = ({ item, justifyLeft }) => {
  const imgFluid = useImages().find((f => f.originalName === utils.parseImageName(item.image)))
  return (
    <div className="my-10 mb-20">
      <div className={`md:flex justify-between ${justifyLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className={`md:w-1/2 ${justifyLeft ? 'md:pr-4' : 'md:pl-4'}`}>
          <h3 className="subTitle mb-2">{item.sub_heading}</h3>
          <ReactMarkdown className="text-justify">
            {item.body}
          </ReactMarkdown>
        </div>
        <Image
          className="w-11/12 mx-auto md:w-1/2"
          fluid={imgFluid}
          alt={item.sub_heading}
        />
      </div>
    </div>
  )
}

export default PageItem
