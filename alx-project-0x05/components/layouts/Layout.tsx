import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Add a Header component if required */}
      <header className="bg-gray-800 text-white p-4">Header</header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white p-4">Footer</footer>
    </div>
  );
};

export default Layout;

