import React from 'react'

function IconWrapper({ children }) {
  return (
    <div className="inline-flex items-center gap-3 flex-wrap">
      {children}
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="bg-white rounded-md shadow-sm px-3 py-2 inline-flex items-center text-xs mr-2 mb-2">
      {children}
    </div>
  );
}

const PaymentIcons = () => {
  return (
    <div>
      <IconWrapper>
        <Card>
          <svg width="36" height="20" viewBox="0 0 36 20" className="mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="36" height="20" rx="3" fill="#1E6FD8"/>
          </svg>
          <span className="font-semibold text-[12px]">VISA</span>
        </Card>

        <Card>
          <svg width="36" height="20" viewBox="0 0 36 20" className="mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="36" height="20" rx="3" fill="#FF5F1F"/>
          </svg>
          <span className="font-semibold text-[12px]">mastercard</span>
        </Card>

        <Card>
          <svg width="36" height="20" viewBox="0 0 36 20" className="mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="36" height="20" rx="3" fill="#0073CE"/>
          </svg>
          <span className="font-semibold text-[12px]">American Express</span>
        </Card>

        <Card>
          <svg width="36" height="20" viewBox="0 0 36 20" className="mr-2" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="36" height="20" rx="3" fill="#00A86B"/>
          </svg>
          <span className="font-semibold text-[12px]">Pay</span>
        </Card>
      </IconWrapper>
    </div>
  )
}

export default PaymentIcons
