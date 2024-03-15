import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { Suspense } from "react";
import LoadingEvents from "./loading";
import { Metadata } from "next";
import { capitalizeFirstLetter } from "@/lib/utils";

// import { EventoEvent } from "@/lib/definitions";

type EventsPageParams = {
  params: {
    city: string;
  };
};

// export const metadata: Metadata = {
//   title: "Evento - Find events around you",
//   description: "Browse more than 10,000 events worldwide",
// };

export function generateMetadata({ params }: EventsPageParams): Metadata {
  const city = params.city;

  return {
    title:
      city === "all"
        ? "All Events"
        : `Events in ${capitalizeFirstLetter(city)}`,
  };
}

export default async function EventsPage({ params }: EventsPageParams) {
  const city: string = params.city;

  // The data fetching logic has been moved to the EventsList component so that it doesn't block the rendering of the page.
  /*
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();
  console.log(events);
  */

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${capitalizeFirstLetter(city)}`}
      </H1>

      <Suspense fallback={<LoadingEvents />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
