import { useState } from 'react';
import ChatBot from './components/chat/ChatBot';
import ProductsGrid from './components/products/ProductsGrid';

function App() {
   const [view, setView] = useState<'products' | 'chat'>('products');

   return (
      <div className="p-4 h-screen w-full flex flex-col gap-4">
         <div className="flex items-center gap-2">
            <button
               type="button"
               onClick={() => setView('products')}
               className={`px-3 py-2 rounded border ${
                  view === 'products'
                     ? 'bg-black text-white'
                     : 'bg-white text-black'
               }`}
            >
               Products
            </button>
            <button
               type="button"
               onClick={() => setView('chat')}
               className={`px-3 py-2 rounded border ${
                  view === 'chat'
                     ? 'bg-black text-white'
                     : 'bg-white text-black'
               }`}
            >
               Chat
            </button>
         </div>

         <div className="flex-1 min-h-0">
            {view === 'products' ? <ProductsGrid /> : <ChatBot />}
         </div>
      </div>
   );
}

export default App;
