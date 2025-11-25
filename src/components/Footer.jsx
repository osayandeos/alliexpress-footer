import React from 'react'
import FooterColumn from "./FooterColumn";
import PaymentIcons from "./PaymentIcons";
import SocialIcons from "./SocialIcons";

const topColumns = [
  {
    title: "Customer service",
    items: [
      "Help Center",
      "Transaction Services",
      "Agreement for non-EU/UK Consumers",
      "Terms and Conditions for EU/EEA/UK Consumers (Transactions)",
      "Take our feedback survey",
    ],
  },
  {
    title: "Shopping with us",
    items: ["Making payments", "Delivery options", "Buyer Protection"],
  },
  {
    title: "Collaborate with us",
    items: [
      "Partnerships",
      "Affiliate program",
      "DS Center",
      "Seller Log In",
      "中国卖家入驻",
      "Non-Chinese Seller Registration",
      "Become a payment partner with us",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[color:var(--footer-bg)] text-[14px]">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left columns (3 columns) */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {topColumns.map((col) => (
              <FooterColumn key={col.title} title={col.title} items={col.items} />
            ))}
          </div>

          {/* Pay with + social */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-[16px] mb-4">Pay with</h3>
              <PaymentIcons />
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-[16px] mb-4">Stay connected</h3>
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Lower info blocks */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Help</h4>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">
              Help Center, Disputes &amp; Reports, Return&amp;refund policy, Report IPR
              infringement, DSA/OSA Information, Integrity Compliance, Transparency
              Center, Submit report (non-registered users)
            </p>

            <h4 className="font-semibold mt-6 mb-2">Browse by Category</h4>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">
              All Popular, Product, Promotion, Low Price, Great Value, Reviews, Wiki, Blog, Video
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">AliExpress Multi-Language Sites</h4>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">
              Russian, Portuguese, Spanish, French, German, Italian, Dutch, Turkish,
              Japanese, Korean, Thai, Arabic, Hebrew, Polish
            </p>

            <h4 className="font-semibold mt-6 mb-2">Alibaba Group</h4>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">
              Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy, Alibaba Cloud,
              Alibaba International, AliTelecom, DingTalk, Juhuasuan, Taobao Marketplace, Tmall,
              Taobao Global, AliOS, 1688
            </p>
          </div>
        </div>
      </div>

      {/* Bottom black bar */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 py-3 text-sm">
          <div className="overflow-x-auto">
            <p className="whitespace-nowrap">
              Intellectual Property Protection - Privacy Policy - Sitemap - Terms of Use -
              Information for EU consumers - Legal Information / Imprint - Transaction Services
              Agreement
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
