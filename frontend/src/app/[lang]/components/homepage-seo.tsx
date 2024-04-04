interface HomepageSeoData {
  props: {
    metaTitle: string;
    metaDescription: string;
    shareImageAlt: string;
    shareImageMedia: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    keywords: string;
    preventingIndex: boolean;
  };
}

function HomepageSeo({ props }: HomepageSeoData) {
  return (
    <div className="m-4">
      <h1>Metadata</h1>
      <p>{`metaTitle: ${props.metaTitle}`}</p>
      <p>{`metaDescription: ${props.metaDescription}`}</p>
      <p>
        {`shareImage`}
        <img
          src={`http://localhost:1337${props.shareImageMedia.data.attributes.url}`}
        />
      </p>
      <p>{`shareImageAlt: ${props.shareImageAlt}`}</p>
      <p>{`keywords: ${props.keywords}`}</p>
      <p>{`preventingIndex: ${props.preventingIndex}`}</p>
    </div>
  );
}

export default HomepageSeo;
