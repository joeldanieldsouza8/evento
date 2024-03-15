import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
// import { EventoEvent } from "./definitions";
import { EventoEvent, PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

export function merge(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string): Promise<EventoEvent[]> {
  try {
    // Time-based Revalidation: Revalidate data after a certain amount of time has passed and a new request is made. This is useful for data that changes infrequently and freshness is not as critical.
    
    // const response = await fetch(
    //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    //   { next: { revalidate: 300 } }
    // );
    // const events: EventoEvent[] = await response.json();
    // console.log(events);
    

    const events: EventoEvent[] = await prisma.eventoEvent.findMany({
      where: {
        city: city,
      },
    });

    return JSON.parse(JSON.stringify(events));
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}

export async function getEvent(slug: string): Promise<EventoEvent> {
  try {
    
    // const response = await fetch(
    //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
    // );
    // const event: EventoEvent = await response.json();
    

    const event = await prisma.eventoEvent.findUnique({
      where: {
        slug: slug,
      },
    });

    if (!event) {
      return notFound();
    }

    return JSON.parse(JSON.stringify(event));
  } catch (error) {
    console.error("Error fetching event:", error);
    throw error;
  }
}
