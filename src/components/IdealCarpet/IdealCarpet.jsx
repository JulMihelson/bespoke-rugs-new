import css from "./IdealCarpet.module.css";
import { Carousel } from "react-carousel-minimal";

export const IdealCarpet = () => {
  const data = [
    {
      caption: 2341784,
      image: "https://bespoke-rug.com/assets/images/content/ideal_big_img6.jpg",
    },

    {
      caption: 3470783,
      image:
        "https://bespoke-rug.com/assets/images/content/ideal_big_img11.jpg",
    },

    {
      caption: 3470780,
      image:
        "https://bespoke-rug.com/assets/images/content/ideal_big_img12.jpg",
    },
    {
      caption: 2341784,
      image:
        "https://bespoke-rug.com/assets/images/content/ideal_big_img10.jpg",
    },

    {
      caption: 3470780,
      image: "https://bespoke-rug.com/assets/images/content/ideal_big_img8.jpg",
    },
  ];
  const captionStyle = {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    fontFamily: "Helvetica",
    fontSize: "40px",
    backgroundColor: "#FFFFFF",
    color: "green",
    margin: "0 auto",
  };
  return (
    <>
      <h2>Яким може бути Ваш ідеальний килим ручної роботи?</h2>
      <div className="App">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "0 20px",
            }}
          >
            <Carousel
              data={data}
              time={2000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="0px"
              slideNumber={false}
              //   slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={false}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
