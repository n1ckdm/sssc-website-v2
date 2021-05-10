/* eslint-disable react/prop-types */
import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const useScript = url => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

const urls = [
  "https://www.portoftyne.co.uk/weather-feeds/harbour-masters?",
  "https://www.portoftyne.co.uk/weather-feeds/tide",
]

const Weather = () => {
  useScript("https://windy.app/widget/windy_forecast_async.js")
  useScript("https://windy.app/widget3/windy_map_async.js")

  return (
    <Layout>
      <SEO title="Weather" description="Weather information around the club" />
      <h1 className="pageTitle pb-4">Weather</h1>
      <div className="container mx-auto px-2 md:px-0">
        <div className="md:flex">
          <img className="5/6 md:w-2/5 mx-auto my-4" src={urls[0]} />
          <img className="5/6 md:w-2/5 mx-auto my-4" src={urls[1]} />
        </div>

        <div
          className="m-4"
          data-windywidget="map"
          data-thememode="white"
          data-spotid="23206"
          data-appid="a0644d4214355769e7da9e42c27a7919"
          data-newwindbar="true"
          data-spots="true"
        ></div>

        <div
          className="m-4"
          data-windywidget="forecast"
          data-thememode="white"
          data-spotid="23206"
          data-appid="a0644d4214355769e7da9e42c27a7919"
        ></div>
      </div>
    </Layout>
  )
}

export default Weather
