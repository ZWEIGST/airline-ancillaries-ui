import { useState } from 'react';
import { serviceBlocks } from "./date/serviceBlocks";  
import { ServiceCard } from './components';
import { Header } from './components';

import './index.css';
import type { SelectedService, Service } from './types/service';

const bookingNumber = "ABC12345";



function App() {
  const [selected, setSelected] = useState<SelectedService[]>([]);

  const addService = (service: Service) => {
    setSelected((prev) => {
      const existing = prev.find((s) => s.id === service.id);
      if (existing) {
        return prev.map((s) =>
          s.id === service.id ? { ...s, count: s.count + 1 } : s
        );
      }
      return [...prev, { ...service, count: 1 }];
    });
  };

  const total = selected.reduce(
    (sum, s) => sum + s.price * s.count,
    0
  );

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4">
      <Header bookingNumber={bookingNumber} />

      <main className="space-y-10">
        {serviceBlocks.map((block) => (
          <section key={block.title} className="space-y-4">
            <div className="inline-block border-2 border-[#5f7f6a] rounded-xl px-4 py-1 text-sm">
              {block.title}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {block.services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onAdd={addService}
                  selectedCount={
                    selected.find((s) => s.id === service.id)?.count
                  }
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      <aside className="mt-12 rounded-2xl bg-white p-6 shadow-md">
        <h2 className="font-semibold mb-4">Итого</h2>

        <ul className="text-sm space-y-2">
          {selected.map((s) => (
            <li key={s.id} className="flex justify-between">
              <span>{s.title}</span>
              <span>
                {s.price} € × {s.count}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between font-semibold mt-4">
          <span>Общая сумма</span>
          <span>{total} €</span>
        </div>

        <button className="cursor-pointer mt-6 w-full rounded-xl bg-[#5f7f6a] text-white py-3 hover:shadow-[0_0_0_3px_rgba(95,127,106,0.35)]">
          Оформить заказ
        </button>
      </aside>
    </div>
    </>
  )
}

export default App;  
