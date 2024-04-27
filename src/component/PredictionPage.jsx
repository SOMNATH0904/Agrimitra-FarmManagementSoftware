import React from 'react'

const PredictionPage = () => {
  return (
    <div className='fixed left-[240px] top-0 w-[83%]'>
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-5">
    <div className="container mx-auto">
      <h1 className="text-center text-3xl">Farm Management Prediction</h1>
    </div>
  </header>
  <main className="py-10">
    <div className="container mx-auto">
      <section className="prediction-section">
        <h2 className="text-center text-2xl mb-6">Weather Prediction</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="grid-item bg-green-500 rounded-lg p-6">
            <h3 className="text-white text-lg mb-3">Rainfall Prediction</h3>
            <p><textarea className="w-full h-24"></textarea></p>
          </div>
          <div className="grid-item bg-red-500 rounded-lg p-6">
            <h3 className="text-white text-lg mb-3">Temperature Prediction</h3>
            <p><textarea className="w-full h-24"></textarea></p>
          </div>
          <div className="grid-item bg-yellow-500 rounded-lg p-6">
            <h3 className="text-white text-lg mb-3">Humidity Prediction</h3>
            <p><textarea className="w-full h-24"></textarea></p>
          </div>
        </div>
      </section>
      <section className="prediction-section">
        <h2 className="text-center text-2xl mb-6">Soil Prediction</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="grid-item bg-teal-400 rounded-lg p-6">
            <h3 className="text-white text-lg mb-3">Soil pH Prediction</h3>
            <p><textarea className="w-full h-24"></textarea></p>
          </div>
          <div className="grid-item bg-blue-500 rounded-lg p-6">
            <h3 className="text-white text-lg mb-3">Nitrogen Prediction</h3>
            <p><textarea className="w-full h-24"></textarea></p>
          </div>
          <div className="grid-item bg-orange-400 rounded-lg p-6">
            <h3 className="text-white text-lg mb-3">Phosphorus Prediction</h3>
            <p><textarea className="w-full h-24"></textarea></p>
          </div>
          <div className="grid-item bg-pink-400 rounded-lg p-6">
            <h3 className="text-white text-lg mb-3">Potassium Prediction</h3>
            <p><textarea className="w-full h-24"></textarea></p>
          </div>
        </div>
      </section>
    </div>
  </main>
</div>
  )
}

export default PredictionPage