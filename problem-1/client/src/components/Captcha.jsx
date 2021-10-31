import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';

const Captcha = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const createCaptcha = async () => {
      await axios
        .post(
          "https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/get/captcha",
          {
            langCode: "en",
            captchaLength: "3",
            captchaType: "2",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          let str = response.data.captchaBase64String;
          let blob = atob(str);
          const byteNumbers = new Array(blob.length);
    
          for (let i = 0; i < blob.length; i++) {
            byteNumbers[i] = blob.charCodeAt(i);
          }

          const b64toBlob = (str, contentType = "image/png", sliceSize = 512) => {
            const byteCharacters = atob(str);
            const byteArrays = [];
    
            for (
              let offset = 0;
              offset < byteCharacters.length;
              offset += sliceSize
            ) {
              const slice = byteCharacters.slice(offset, offset + sliceSize);
              const byteNumbers = new Array(slice.length);
              for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }
              const byteArray = new Uint8Array(byteNumbers);
              byteArrays.push(byteArray);
            }
    
            const blob = new Blob(byteArrays, { type: contentType });
            return blob;
          };
    
          const blob1 = b64toBlob(str, "image/png");
          const blobUrl = URL.createObjectURL(blob1);
          setUrl(blobUrl);
        });
    };
    createCaptcha()
  }, [])

  return (
    <Box>
      <img src={url} />
    </Box>
  )
}

export default Captcha;
