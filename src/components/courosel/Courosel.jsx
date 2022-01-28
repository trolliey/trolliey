import { Carousel } from 'react-carousel-minimal';

function Courosel({data}) {

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    display: 'none'
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="Courosel z-10">
      <div style={{ textAlign: "center" }}>
          <Carousel
            data={data ? data : []}
            time={3000}
            width="100%"
            height="100%"
            captionStyle={captionStyle}
            radius="5px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="contain"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
      </div>
    </div>
  );
}

export default Courosel;