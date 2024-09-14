import React, { useContext, useEffect, useState } from 'react'
import { Box, styled } from "@mui/material";
import { DataContext } from './Context/DataProvider'


const Container = styled(Box)`
  height: 41vh;
`

function Result() {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);

  // yaha useEffect ka use hum iss liye kar rahe ha kyuki yaha hume chahate ha ki code ko likhne ke kuch der bad 
  // output liye toh tum hum iska use kar raha ha 

  
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrc(srcCode);
    }, 2000)

    return () => clearTimeout(timeOut);

  }, [html, css, js]);

  const srcCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>

  `

  return (
    <>
      <Container>
        <iframe

          srcDoc={src}
          title='Output'
          sandbox='allow-scripts'
          frameBorder={0}
          width="100%"
          height="100%"
        />
      </Container>
    </>
  )
}

export default Result
