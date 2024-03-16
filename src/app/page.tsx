export default function Home() {
  return (
    <div className="flex">
      <div>
        <video src={require("../../public/video.mp4")} autoPlay muted loop className="absolute w-[100%] h-[100%] z-[-1] object-cover"/>
      </div>
    </div>
  );
}
