import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { Button } from "../components"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={775} height={690} alt="special offer" className="object-containe w-full"/>

      </div>
      <div className="flex flex-1 flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalized font-bold lg:max-w-lg'>
            <span className="text-coral-red "> Special </span>
            Offer
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            Ensuring premium confort and style, our meticulously crafted footwear is designed to elevate your experinece, providing you with unmatched quality, innovation, and a touch of elegance
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label='Shop Now' iconURL={arrowRight}/>
            <Button label='Learn More' backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
          </div>
        </div>
    </section>
  )
}

export default SpecialOffer