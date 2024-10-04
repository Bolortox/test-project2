"use client";
import { Card } from "@/components/ui/Card";
import { CreateModal } from "@/components/ui/CreateModal";
import { EditModal } from "@/components/ui/EditModal";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center gap-11">
      <div className="w-36 h-11 rounded-3xl bg-slate-400 flex justify-center items-center font-bold">
        Create Product
      </div>
      <Card />
      <EditModal />
      <CreateModal />
    </div>
  );
}
