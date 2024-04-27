import React from 'react'

const IndustryDashboard = () => {
  return (
    <div className='fixed left-[240px] top-0'>
        <div className="bg-gray-100 min-h-screen">
        <header className="bg-green-800 text-white text-center p-6">
          <h1 className="text-3xl">Farm Management System</h1>
        </header>
        <main>
          <section className="m-5 p-5 bg-white rounded shadow-md">
            <h2 className="text-2xl text-green-800">Introduction</h2>
            <p>The Farm Management System is an innovative solution designed to streamline the operations of modern farming. It integrates various aspects of farm management, including crop planning, livestock management, resource allocation, and financial tracking into one comprehensive platform.</p>
          </section>
          <section className="m-5 p-5 bg-white rounded shadow-md">
            <h2 className="text-2xl text-green-800">Features</h2>
            <ul className="list-none p-0">
              <li className="bg-gray-300 mb-2 p-2 rounded">Comprehensive Crop Management</li>
              <li className="bg-gray-300 mb-2 p-2 rounded">Efficient Livestock Tracking</li>
              <li className="bg-gray-300 mb-2 p-2 rounded">Resource Allocation and Optimization</li>
              <li className="bg-gray-300 mb-2 p-2 rounded">Financial Management and Analysis</li>
              <li className="bg-gray-300 mb-2 p-2 rounded">Real-time Data and Analytics</li>
            </ul>
          </section>
        </main>
        <footer className="bg-green-800 text-white text-center p-3 absolute inset-x-0 bottom-0">
          <p>&copy; 2024 Farm Management System. All rights reserved.</p>
        </footer>
          </div>
    </div>
  )
}

export default IndustryDashboard