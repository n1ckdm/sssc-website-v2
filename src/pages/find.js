/* eslint-disable react/prop-types */
import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Layout from "../components/layout"
import SEO from "../components/seo"

const FindUs = () => {
  const position = [55.00629, -1.42795]

  const icoStyle = "w-8"
  const contactStyle = "my-2 flex flex-row"
  const contactTextStyle = "text-xl my-auto pl-1"

  const email = (
    <svg className={icoStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
    </svg>
  )

  const address = (
    <svg className={icoStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )

  const phone = (
    <svg className={icoStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )

  return (
    <Layout>
      <SEO title="Finding Us" description="How to get to us or get in contact with us"/>
      <div className="container mx-auto">
        <h1 className="pageTitle mb-10">Finding Us</h1>
        {
          (typeof window !== 'undefined') && (
            <MapContainer className="h-mapSm md:h-mapMd" center={position} zoom={17} scrollWheelZoom={false} dragging={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                We live here!
              </Popup>
            </Marker>
          </MapContainer>
          )
        }
        <div className="shadow-lg my-6">
          <div className="flex flex-col m-4 p-4">
            <div className={contactStyle}>
              <div className="">{ email }</div><span className={contactTextStyle}>sssccommittee@gmail.com</span>
            </div>
            <div className={contactStyle}>
              { address }<span className={contactTextStyle}>River Dr, South Shields NE33 1LH</span>
            </div>
            <div className={contactStyle}>
              { phone }<span className={contactTextStyle}>0191 456 5821</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FindUs

