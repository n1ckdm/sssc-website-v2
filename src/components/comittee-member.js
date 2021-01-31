/* eslint-disable react/prop-types */
import Image from "gatsby-image";
// import { PropTypes } from 'prop-types';
import React from "react";
import { useImages } from "../hooks/use-images";

const ComitteeMember = (props) => {
  const imgFluid = useImages().find((f => f.originalName === props.photo))
  return (
    <div className="md:mx-auto max-w-sm md:w-60 m-2 md:m-4 shadow-lg">
      <Image
        className="h-60"
        fluid={imgFluid}
        alt={props.name}
      />
      <p className="font-semibold">{props.name}</p>
      <p className="text-gray-700 font-light">{props.position}</p>
    </div>
  )
}

// ComitteeMember.propTypes = {
//   name: PropTypes.string,
//   photo: PropTypes.string,
//   position: PropTypes.string
// }

export default ComitteeMember