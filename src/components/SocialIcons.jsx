import React from 'react'

const Icon = ({ children }) => (
  <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-transparent border border-transparent mr-3">
    {children}
  </div>
);

const SocialIcons = () => {
  return (
    <div className="flex items-center">
      {/* Facebook */}
      <Icon>
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden fill="#222">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H22z"></path>
        </svg>
      </Icon>

      {/* Twitter */}
      <Icon>
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden fill="#222">
          <path d="M22 5.9c-.6.3-1.3.5-2 .6.7-.4 1.3-1 1.6-1.8-.7.4-1.4.7-2.2.9C18.5 5 17.6 4.6 16.6 4.6c-1.7 0-3.1 1.4-3.1 3.1 0 .2 0 .5.1.7-2.6-.1-5-1.4-6.6-3.3-.3.6-.5 1.2-.5 1.9 0 1.4.7 2.6 1.8 3.3-.6 0-1.2-.2-1.7-.4v.1c0 1.8 1.3 3.3 3 3.6-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.7 3.7 2.7C13.5 18 11.9 18.8 10 18.8c-1.1 0-2.2-.3-3.1-.9 1.2 3.8 4.7 6.5 8.9 6.6-3.2 2.5-7.3 3.9-11.7 3.9-.8 0-1.7 0-2.5-.1C6.2 23.9 9.8 25 13.7 25c9.2 0 14.3-7.7 14.3-14.3v-.6C27.5 7.3 25 6 22 5.9z"></path>
        </svg>
      </Icon>

      {/* Instagram */}
      <Icon>
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden fill="#222">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zM19.5 6.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"></path>
        </svg>
      </Icon>

      {/* Messenger / WhatsApp-like bubble */}
      <Icon>
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden fill="#222">
          <path d="M12 2a10 10 0 1 0 6.9 17.1L22 22l-2.9-1A10 10 0 0 0 12 2z"></path>
        </svg>
      </Icon>
    </div>
  )
}

export default SocialIcons
