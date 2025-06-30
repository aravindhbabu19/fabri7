import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
         <nav class="navbar navbar-dark bg-dark text-white navbar-expand-lg">
            
                <Link class='text-decoration-none' to={'/'}>
                <img src='./Images/Fab/logo1.jpeg' height={100} width={100} class='rounded'/>
                </Link>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#ull">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="ull">
                    
                    <ul class="navbar-nav ms-auto">
                        <Link class='text-decoration-none ' to={'/'}>
                        <li class="nav-item ms-2 me-5"><a class="nav-link active nav1-color" href="">Home</a></li>
                        </Link>
                        <Link class='text-decoration-none' to={'/About'}>
                        <li class="nav-item ms-2 me-5"><a class="nav-link active" href="">About Us</a></li>
                        </Link>
                        
                        <Link class='text-decoration-none' to={'/Services'}>
                        <li class="nav-item ms-2 me-5"><a class="nav-link active" href="">Services</a></li>
                        </Link>
                        <Link class='text-decoration-none' to={'/Project'}>
                        <li class="nav-item ms-2 me-5"><a class="nav-link active" href="">Projects</a></li>
                        </Link>
                        <Link class='text-decoration-none' to={'/Contact'}>
                        <li class="nav-item me-5"><a class="nav-link active" href="">Contact Us</a></li>
                        </Link>
                       {/* <div class="btn-group">
                            <button type="button" class="btn btn-white dropdown-toggle me-5" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                            </button>
                            <ul class="dropdown-menu wid ">
                            <Link class='text-decoration-none' to={'/Ms'}>
                            <li><a class="dropdown-item" href="#">Ms Steel Gate</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Roll'}>
                            <li><a class="dropdown-item" href="#">Rolling Shutter</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Rail'}>
                            <li><a class="dropdown-item" href="#">Ms Railing</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Roof'}>
                            <li><a class="dropdown-item" href="#">Roofing</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Collap'}>
                            <li><a class="dropdown-item" href="#">Collapsible Gate</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Window'}>
                            <li><a class="dropdown-item" href="#">Window Grill</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Safety'}>
                            <li><a class="dropdown-item" href="#">Safety Grill</a></li>
                            </Link>
                            <li><hr class="dropdown-divider wid1"/></li>
                            <Link class='text-decoration-none' to={'/Steel'}>
                            <li><a class="dropdown-item" href="#">Steel Structure</a></li>
                            </Link>
                            
                            
                            
                            
                          </ul>
                       </div> */}
                    </ul>
                    
                    
                </div>
            
        </nav>
    </div>
  )
}

export default Navigation
