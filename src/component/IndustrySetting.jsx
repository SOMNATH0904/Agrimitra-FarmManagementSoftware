import React from 'react'

const IndustrySetting = () => {
  
  return (
    <div className=' fixed ml-[240px]'> 
      <main className="p-4  ">
    <section className="settings-section mb-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">General Settings</h2>
      <div className="setting mb-4">
        <label for="farmName" className="block mb-1">Interested Crops</label>
        <textarea cols={20} rows={4} id="farmName" name="farmName" className="w-full px-4 py-2 border rounded-md border-gray-300"/>
      </div>
      <div className="setting mb-4">
        <label className="block mb-1">Timezone:</label>
        <select id="timezone" name="timezone" className="w-full px-4 py-2 border rounded-md border-gray-300">
          <option value="GMT-8">GMT-8</option>
          <option value="GMT-7">GMT-7</option>
        </select>
      </div>
    </section>
    <section className="settings-section mb-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Notification Settings</h2>
      <div className="setting mb-4">
        <label for="emailNotifications" className="flex items-center">
          <input type="checkbox" id="emailNotifications" name="emailNotifications" className="mr-2"/>
          Email Notifications
        </label>
      </div>
      <div className="setting mb-4">
        <label for="smsNotifications" className="flex items-center">
          <input type="checkbox" id="smsNotifications" name="smsNotifications" className="mr-2"/>
          SMS Notifications
        </label>
      </div>
    </section>
  </main>
  <footer className="p-4">
    <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors">Save Changes</button>
  </footer>
</div>
  )
}

export default IndustrySetting