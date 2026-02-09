type TPropsBanner = {
  title: string;
  imageUrl: string;
}

function Banner({title, imageUrl}: TPropsBanner) {
  return (
    <div className="banner" style={{backgroundImage: `url(${imageUrl})`}}>
      <p className="banner__title">{title}</p>
    </div>
  );
}

export default Banner;
