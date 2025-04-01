import React from "react";

export default function Panel() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Kontrol Paneli</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Telegram Bot Yönetimi</h2>
          <p className="text-gray-400 mb-4">Bot ayarlarınızı yapılandırın ve mesaj gönderin.</p>
          <a 
            href="/telegram_menu.html" 
            target="_blank" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Bot Paneli
          </a>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">İçerik Üretimi</h2>
          <p className="text-gray-400 mb-4">GPT destekli içerik önerileri alın.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded">
            İçerik Oluştur
          </button>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Ayarlar</h2>
          <p className="text-gray-400 mb-4">Sistem ayarlarınızı yapılandırın.</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded">
            Ayarları Düzenle
          </button>
        </div>
      </div>
    </div>
  );
}