import Image from "next/image";

import { EventoEvent } from "@/lib/definitions";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/event/${event.slug}`}>
      {/* Card */}
      <section className="relative rounded-xl shadow-lg bg-slate-900 m-3">
        <div className="p-5 flex flex-col">
          <div className="rounded-xl overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.name}
              width={500}
              height={500}
            />
          </div>

          <div className="flex flex-col flex-1 justify-center items-center mt-5">
            <h2 className="text-2xl font-semibold">{event.name}</h2>
            <p className="italic text-white/75">By {event.organizerName}</p>
            <p className="text-sm text-white/50 mt-4">{event.location}</p>
          </div>
        </div>

        <section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}
