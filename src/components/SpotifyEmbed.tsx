
type SpotifyEmbedProps = {
    url: string;
  };

  const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({ url }) => {
    return (
      <iframe src={url} width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    );
  }

  export default SpotifyEmbed;
  