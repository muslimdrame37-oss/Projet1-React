interface Props {
  image: string;
}
export default function PaymentCardLogo({ image }: Props) {
  return (
    <div className="flex gap-2">{image}</div>
  )
}

