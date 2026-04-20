import { Toaster } from "react-hot-toast"
import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import Attendence from "./pages/Attendence"
import Employees from "./pages/Employees"
import Leave from "./pages/Leave"
import Payslips from "./pages/Payslips"
import Settings from "./pages/Settings"
import PrintPayslip from "./pages/PrintPayslip"
import LoginLoading from "./pages/LoginLoading"
import LoginForm from "./components/LoginForm"
 
 const App = () => {
   return (
    
      <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLoading />} />
        <Route path="/login/admin" element={<LoginForm role="admin" title="Admin Portal" subtitle="sign in to manage the organization" />} />
        <Route path="/login/employee" element={<LoginForm role="employee" title="Employee Portal" subtitle="sign in to access your account" />} />


        <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendence" element={<Attendence />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/payslips" element={<Payslips />} />
        
        <Route path="/settings" element={<Settings />} /> 
        </Route>
        <Route path="/print/payslip/:id" element={<PrintPayslip />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>    
          </>
   )
 }
 
 export default App