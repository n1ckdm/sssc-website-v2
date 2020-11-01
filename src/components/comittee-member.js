import Image from "gatsby-image";
import { PropTypes } from 'prop-types';
import React from "react";
import { useImages } from "../hooks/use-images";

const ComitteeMember = (props) => {
    const imgFluid = useImages().find((f => f.originalName === props.photo))
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.position}</p>
            <Image
                fluid={imgFluid}
                alt={props.name}
            />
        </div>
    )
}

ComitteeMember.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    position: PropTypes.string
}

export default ComitteeMember