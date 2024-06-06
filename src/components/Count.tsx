"use client";

import { Avatar } from "flowbite-react";

type CountProps = {
    icon: string
    entity: string
    total: number
}

export default function Count({ icon, entity, total }: CountProps) {
  return (
    <Avatar img={icon} rounded>
    <div className="space-y-1 font-medium dark:text-white">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {entity}
      </div>
      <div>{total}</div>
    </div>
  </Avatar>
  )
}
