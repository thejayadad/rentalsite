import AccountNavbar from "@/components/AccountNavbar";

export default function DashboardLayout({ children }) {
    return <section>
        <AccountNavbar />
        {children}</section>
  }