import React from 'react'

const Navbar = (props) => {
  return (
    <div class="bg-black text-white">
      <div className="logo" class="flex bg-slate-950 text-white py-4">{props.logoText}</div>
        <ul class="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar
