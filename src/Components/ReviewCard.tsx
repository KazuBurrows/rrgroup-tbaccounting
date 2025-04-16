
export interface ReviewProps {
  comment: string;
  name: string;
  business: string;
}

function ReviewCard({ comment, name, business }: ReviewProps) {
  return (
    <div className="p-8 text-center">
      <p className="leading-loose">
        "{comment}"
      </p>
      <h2 className="text-3xl font-semibold pt-10">{name}</h2>
      <h2 className="text-xl">{business}</h2>
    </div>
  );
}

export default ReviewCard;
