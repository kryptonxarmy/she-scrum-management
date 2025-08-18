"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default function AdminPage() {
  return (
    <ProtectedRoute requiredRole="SUPERADMIN">
      <AdminDashboard />
    </ProtectedRoute>
  );
}
