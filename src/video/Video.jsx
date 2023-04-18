import ReactPlayer from 'react-player/lazy'
export const Video = () => {
  return (
      <ReactPlayer
        url={process.env.PUBLIC_URL + '/video/janus.mp4'}
        autoPlay
        playing= {true}
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
  );
};
