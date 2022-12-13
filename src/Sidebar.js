import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin Schools <sup>2</sup></div>
            </a>

          
            <hr class="sidebar-divider my-0"/>


           

            <hr class="sidebar-divider"/>


            <div class="sidebar-heading">
                Interface
            </div>

            <li class="nav-item">
                <Link to={"/teachers"} class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Teachers</span>
                </Link>
                
            </li>

            <li class="nav-item">
                <Link to={"/students"} class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Students</span>
                </Link>
                
            </li>


        </ul>
  )
}

export default Sidebar