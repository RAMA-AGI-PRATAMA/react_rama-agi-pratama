export default function About() {
  return (
    <section id="contact" className="flex flex-col">
      <div className="px-10 pb-56 pt-10  text-center font-semibold">
        <h1 className="text-black font-bold text-[35px]">About us</h1>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center p-10 relative -top-48 bg-[#b93327] backdrop-blur-lg mx-10 rounded-lg ">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5feb6d2cab06677bba637eba/1678905323964-FSN7YA7WOQFDF57T7IQ2/LAM+images+%284%29.jpg"
          alt="foto"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="flex flex-col gap-6 text-white">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eum dolores minima ipsum hic adipisci explicabo, tenetur eveniet
            numquam, ad voluptate eaque aliquid odio ipsa!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            maxime eveniet iure quod, quibusdam illo voluptas eum. Numquam
            voluptatem, nobis dolores dolore nihil nam molestiae.
          </p>
        </div>
      </div>
    </section>
  );
}
