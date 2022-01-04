import { Carousel } from 'react-carousel-minimal';

function Courosel({data}) {
//  const data = [
//     {
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
//       caption: `<div>
//                   San Francisco
//                   <br/>
//                   Next line
//                 </div>`
//     },
//     {
//       image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
//       caption: "Scotland"
//     },
//     {
//       image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
//       caption: "Darjeeling"
//     },
//     {
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
//       caption: "San Francisco"
//     },
//     {
//       image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
//       caption: "Darjeeling"
//     },
//     {
//       image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
//       caption: "San Francisco"
//     },
//     {
//       image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61BQZKqdp2CV3QV5nUEsqSg1ygegLmqRygj/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
//       caption: "Scotland"
//     },
//     {
//       image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
//       caption: "Darjeeling"
//     }
//   ];

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
    <div className="Courosel">
      <div style={{ textAlign: "center" }}>
          <Carousel
            data={data}
            time={3000}
            width="100%"
            height="100%"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "40px auto",
            }}
          />
      </div>
    </div>
  );
}

export default Courosel;