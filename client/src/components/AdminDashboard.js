import React from "react";
import AdminHeader from "./AdminHeader";
import AdminActionsBtn from "./AdminActionsBtn";
import AdminCategoryModal from "./AdminCategoryModal";
import AdminProductModal from "./AdminProductModal";

const AdminDashboard = () => {
  /***** Render ****/
  return (
    <section>
      <AdminHeader />
      <AdminActionsBtn />
      <AdminCategoryModal />
      <AdminProductModal />
    </section>
  );
};

export default AdminDashboard;
