const BackgroundVideo = () => {
  return (
    <div className="w-full h-full">
      <video autoPlay loop muted>
        <source src="src/assets/video.mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
