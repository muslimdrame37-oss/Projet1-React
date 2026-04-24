import React from 'react'

interface PaymentCardProps {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}
export default function PaymentCard() {
  return (
    <div>PaymentCard</div>
  )
}
