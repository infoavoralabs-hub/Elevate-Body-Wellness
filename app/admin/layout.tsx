import Link from "next/link";
import { Users, Calendar, Mail, Home } from "lucide-react";

export const metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-charcoal text-white p-6 hidden md:block">
        <div className="mb-8 font-display font-bold text-xl text-gold">
          Elevate Admin
        </div>
        <nav className="space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
            <Home className="h-5 w-5" /> Overview
          </Link>
          <Link href="/admin/bookings" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
            <Calendar className="h-5 w-5" /> Bookings
          </Link>
          <Link href="/admin/contacts" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
            <Mail className="h-5 w-5" /> Messages
          </Link>
          <Link href="/admin/subscribers" className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
            <Users className="h-5 w-5" /> Subscribers
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
