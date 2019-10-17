import React from "react";
import ReactDOM from "react-dom";
import { Grid, GridItem } from "../src/index";

const images = [
  "https://media0.giphy.com/media/i67uIY4a61ejm/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media1.giphy.com/media/Z5W9H5DtCWN4k/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media3.giphy.com/media/443jTSLWYgLJQysB1z/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media3.giphy.com/media/SVqgwI1EIrjLfZyyfD/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media0.giphy.com/media/iCiyEytDbvR62GFfbb/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media3.giphy.com/media/LpctNbdeSaRvPP7jxM/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media0.giphy.com/media/55SfA4BxofRBe/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media0.giphy.com/media/lMlEL5wIlmim6l6XMZ/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media0.giphy.com/media/RC6j3F8npiOre/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media0.giphy.com/media/h8rHnVyV4f02vp7lJ2/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media2.giphy.com/media/iIMwMis2QFzBZUcKhf/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media0.giphy.com/media/NylYRvfyaIwtW/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media3.giphy.com/media/3o7TKVfu4rwyscasla/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media1.giphy.com/media/NTDh6ioJhvKlL2qBGW/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media1.giphy.com/media/3oFzlZsxZFP9PiNovC/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media2.giphy.com/media/9PnKmLSWBYYohFdlo4/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media3.giphy.com/media/AmDzMmCJZABsk/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media3.giphy.com/media/pOTBwNm44eJQrQpZVO/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media1.giphy.com/media/XB3MPWh1ymwiOiLLJd/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media2.giphy.com/media/NFgfxZFfMSylO/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media3.giphy.com/media/7zSzFBQwwGMC54c19q/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media0.giphy.com/media/fedqFIk53mDHytl8Ml/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media3.giphy.com/media/ggSbBqjDFGYow/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media0.giphy.com/media/kaq6GnxDlJaBq/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif",
  "https://media3.giphy.com/media/UWyaQUFFPf1MXYqsgf/giphy_s.gif?cid=5426f43fd0ed6f56dd3a69975ff92370ee725f8e98ab9028&rid=giphy_s.gif"
];

const App = () => {
  return (
    <Grid rowGutter={28} columnGutter={100} columnWidth={300} rowHeight={10}>
      {images.map(image => (
        <GridItem>
          <img src={image} alt="" style={{ width: "100%" }} />
        </GridItem>
      ))}
    </Grid>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
