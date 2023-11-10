import HERO_IMG from "../assets/Background.png";

export default function Welcome() {
  return (
    <section id="hero" className="relative">
      <img
        src={HERO_IMG}
        alt="hero"
        className="absolute object-cover w-full h-[610px] z-0"
      />
      <div className="relative z-10 flex flex-col gap-[30px] text-center items-start ml-36 justify-center w-full h-[600px]">
        <div className="flex flex-col items-start justify-center text-center">
          <h1 className="text-white text-7xl font-bold mb-[10px]">
            Dakikeun Outdoor
          </h1>
          <p className="text-white text-[20px] text-left">
            Menyewakan Berbagai Macam Peralatan Camping, Haiking, Kegiatan
            Outdoor <br />
            Serta Jasa Open Trip.
          </p>
        </div>
        <button className="text-white bg-[#b93327] mt-6 px-[28px] py-[12px] rounded-md cursor-pointer">
          Enjoy The Nature
        </button>
      </div>
    </section>
  );
}
