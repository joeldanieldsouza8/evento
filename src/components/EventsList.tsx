// import { EventoEvent } from "@/lib/definitions";
import { EventoEvent } from "@prisma/client";
import EventCard from "./EventCard";
import { getEvents } from "@/lib/utils";

// type EventsListProps = {
//   events: EventoEvent[];
// };

type EventsListProps = {
  city: string;
};

export default async function EventsList({ city }: EventsListProps) {
  const events: EventoEvent[] = await getEvents(city);

  // if (!city) {
  //   return <p>City not found</p>;
  // }

  return (
    <section className="flex items-center justify-center min-h-screen container mx-auto">
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
