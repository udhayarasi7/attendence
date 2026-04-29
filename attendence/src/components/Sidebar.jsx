import { ChevronRightIcon, Menu, User, X, LayoutGrid, Users, CalendarCheck, FileText, DollarSign, Settings, LogOut } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { dummyProfileData } from '../assets/assets'

const Sidebar = () => {
  const { pathname } = useLocation()
  const [userName, setUserName] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName)
  }, [])
  //close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])
  const role = "" || "Employee";
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutGrid },
    ...(role === "ADMIN" ? [{ name: "Employees", href: "/employees", icon: Users }] : [{ name: "Attendance", href: "/attendence", icon: CalendarCheck }]),
    { name: "Leave", href: "/leave", icon: FileText },
    { name: "Payslips", href: "/payslips", icon: DollarSign },
    { name: "Settings", href: "/settings", icon: Settings },
  ]
const handleLogout = () => {
  window.location.href = "/login"
}
  const sidebarContent = (
    <>
      <div className='px-5 pt-6 pb-5 border-b border-white/6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <User className='text-white size-7' />
            <div>
              <p className='font-semibold text-[13px] text-white tracking-wide'>Employee MS</p>
              <p className='text-[11px] text-slate-500 font-medium'>Management System</p>
            </div>
          </div>
          <button onClick={() => setMobileOpen(false)} className='lg:hidden text-slate-400 hover:text-white p-1'>
            <X size={20} />
          </button>
        </div>

        {/* User Profile Card */}
        {userName && (
          <div className='mt-4 p-3 rounded-lg bg-white/3 border border-white/4'>
            <div className='flex items-center gap-3'>
              <div className='w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center ring-1 ring-white/10 shrink-0'>
                <span className='text-slate-400 text-xs font-semibold'>
                  {userName.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className='min-w-0'>
                <p className='text-[13px] font-medium text-slate-200 truncate'>{userName}</p>
                <p className='text-[11px] text-slate-500 truncate'>{role === "ADMIN" ? "Administrator" : "Employee"}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Profile Section */}
      <div className='px-5 pt-5 pb-2'>
        <p className='text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500'>Navigation</p>
      </div>
      {/*section label*/}
      {/*Navigation list */}
      <div className='flex-1 px-3 space-y-0.5 overflow-y-auto'>
        {navItems.map((navItem) => {
          const isActive = pathname.startsWith(navItem.href)
          return (
            <Link to={navItem.href} key={navItem.name} className='group relative flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors'>
              {isActive && <div className='absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-indigo-500' />}
              <navItem.icon className={`w-[17px] h-[17px] shrink-0 ${isActive ? "text-indigo-300" : "text-slate-400 group-hover:text-slate-300"}`} />
              <span className='flex-1'>{navItem.name}</span>
              {isActive && <ChevronRightIcon className='w-3.5 h-3.5 text-indigo-500/50' />}
            </Link>
          )
        })}

      </div>
      {/*Logout button */}
      <div className='p-3 border-t border-white/6'>
        <button onClick={handleLogout} className='flex items-center gap-3 w-full px-3 py-2.5 rounded-md text-[13px] font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/8 transition-all duration-150'>
          <LogOut className='w-[17px] h-[17px] text-slate-400 group-hover:text-slate-300' />
          <span>Log out</span>
        </button>

      </div>
    </>
  )
  return (
    <>
      <button onClick={() => setMobileOpen(true)} className='lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10'>
        <Menu size={20} />
      </button>
      {mobileOpen && <div className='lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40' onClick={() => setMobileOpen(false)} />}
      <aside className='hidden lg:flex flex-col h-full w-[260px] bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white shrink-0 border-r border-white/4'>
        {sidebarContent}
      </aside>
      <aside className={'lg:hidden fixed inset-y-0 left-0 w-72 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white z-50 flex-col transform transition-transform duration-300 ' + (mobileOpen ? "translate-x-0" : "-translate-x-full")}></aside>
    </>
  )
}

export default Sidebar