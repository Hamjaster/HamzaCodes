import React from 'react'
import logo from "./Images/hamza.png"
export default function Footer() {
  return (
    <div class="container ">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-muted">© 2022 Hamza Shah</p>
    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
  
    <img width={50} src={logo} alt="" srcset="" />
    </a>

   
  </footer>
</div>
  )
}
