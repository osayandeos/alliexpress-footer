import React from 'react'

const FooterColumn = ({ title, items }) => {
  return (
    <div>
      <h3 className="font-semibold text-[16px] mb-4">{title}</h3>
      <ul className="space-y-2 text-[color:var(--muted)] text-sm">
        {items.map((it, i) => (
          <li key={i} className="leading-tight">{it}</li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn
