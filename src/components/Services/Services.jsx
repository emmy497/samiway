import Card from "../Cards/Card";

function Services() {
  return (
    <section className="">
 <div id="services" className="items-center h-[100vh] top-[20px] relative md:top-[120px] md:pt-10 px-[5%] md:px0-0">
      <div className="text-center text-3xl mb-8 font-semibold relative top-[20px] md:static ">Our Services</div>
      <div className="grid md:grid-cols-2 gap-y-[30px] md:px-[40px] md:gap-x-8">
        <Card />
      </div>
    </div>
    </section>
   
  );
}

export default Services;
