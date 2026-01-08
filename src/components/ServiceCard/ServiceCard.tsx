import React from "react";

import { AddButton } from "../AddButton/AddButton";
import type { Service } from "../../types/service";


type ServiceCardProps = {
  service: Service;
  selectedCount?: number;
  onAdd: (service: Service) => void;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  selectedCount,
  onAdd,
}) => {
  const isSelected = Boolean(selectedCount && selectedCount > 0);

  return (
    <div
      style={{ background: service.bg }}
      className={`
        rounded-2xl p-4 flex flex-col justify-between
        transition-all duration-300
        ${isSelected ? "shadow-lg" : "shadow-sm"}
      `}
    >
      <div className="space-y-1">
        <h3 className="font-semibold text-sm">{service.title}</h3>

        <p className="text-xs text-gray-700">
          Цена: {service.price} €
        </p>

        {isSelected && (
          <p className="text-xs text-gray-600">
            Добавлено: {selectedCount}
          </p>
        )}
      </div>

      <AddButton onClick={() => onAdd(service)} />
    </div>
  );
};
