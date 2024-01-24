import { star } from "../assets/icons"


const ReviewCard = ({imgURL, customerName,rating,feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer review img" className="object-contain rounded-full w-[120px] h-[120px]"/>
        
        
        <p className="mt-4 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex flex-col justify-center items-center gap-2.5">
            <img src={star} alt="star rating" 
            width={24}
            height={24}
            className="m-0 object-contain"/>
            <p className="text-xl font-monserrat text-slate-gray">({rating})</p>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
        </div>
    </div>
  )
}

export default ReviewCard