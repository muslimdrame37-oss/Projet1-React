interface Props {
  image: string;
}
export default function PaymentCard({ image }: Props) {
  return (
    <div className="flex gap-2">{image}</div>
  )
}

