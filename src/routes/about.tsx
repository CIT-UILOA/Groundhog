export default function About() {
  return (
    <main class="grid lg:grid-cols-2 gap-9">
      <div>
        <h1 class="text-5xl font-bold mb-5">Who We Are</h1>
        <p class="text-xl lg:text-md text-justify px-5 lg:px-0">
          Ground Breaking Technologies, Inc. is a premier provider of high-end
          shovels designed for those who demand durability, efficiency, and
          precision in every dig. Catering to professionals in landscaping,
          construction, and outdoor industries, Ground Breaking Technologies
          combines cutting-edge materials with ergonomic designs to create tools
          that not only stand up to the toughest tasks but also enhance
          productivity and ease of use. From reinforced handles to
          precision-crafted blades, each shovel is engineered to offer
          exceptional performance, making it a trusted choice for those who rely
          on their tools to deliver uncompromising results. With a commitment to
          quality and innovation, Ground Breaking Technologies is redefining
          standards in digging tools, ensuring that every shovel supports
          excellence with every use.
        </p>
      </div>
      <div>
        <h1 class="text-5xl mb-5 font-bold">Meet the Founders</h1>
        <div class="grid grid-cols-2">
          <div>
            <h2 class="text-4xl font-semibold">Jon Ivan P Perez</h2>
            <h3 class="text-xl lg:text-md">Chief Shovel Designer</h3>
            <p class="text-xl lg:text-md">I am Ivan</p>
          </div>
          <img
            class="w-96 h-96 object-cover justify-self-end place-self-center mr-1"
            src="/png/jon ivan.png"
            alt="Portrait of Jon Ivan P Perez"
          />
          <div>
            <h2 class="text-4xl font-semibold">Ivan Leonard O Aparte</h2>
            <h3 class="text-xl lg:text-md">Chief Operations Officer</h3>
            <p class="text-xl lg:text-md">I am also Ivan</p>
          </div>
          <img
            class="w-96 h-96 object-cover justify-self-end place-self-center mr-1"
            src="/png/me.png"
            alt="Portrait of Ivan Leonard O Aparte"
          />
        </div>
      </div>
    </main>
  );
}
