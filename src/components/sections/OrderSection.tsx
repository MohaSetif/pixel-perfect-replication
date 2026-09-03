import { useState } from "react";
import { Facebook, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { restaurant } from "@/lib/restaurant";

export function OrderSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Reservation request noted — please call to confirm your table.");
  };

  return (
    <section id="order" className="bg-secondary/60 bg-woodgrain py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Prenota un tavolo"
            title="Order or reserve"
            subtitle="Only 6–7 tables, so booking ahead is a good idea. Fastest of all: just give us a ring."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-warm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" name="date" type="date" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" name="time" type="time" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="party">Party size</Label>
                  <Input
                    id="party"
                    name="party"
                    type="number"
                    min={1}
                    max={20}
                    defaultValue={2}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="contact">Phone or email</Label>
                  <Input
                    id="contact"
                    name="contact"
                    required
                    placeholder="+36 ..."
                    className="mt-2"
                  />
                </div>
              </div>

              <Button type="submit" variant="hero" size="xl" className="mt-7 w-full">
                <Send /> {sent ? "Request sent" : "Send reservation request"}
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Requests are not confirmed automatically — we will ring you back, or call us
                directly.
              </p>
            </form>
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-warm">
              <h3 className="text-xl font-bold text-foreground">Rather talk to us?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Dine-in, takeaway and delivery orders all go through the phone or Facebook.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Button asChild variant="hero" size="xl">
                  <a href={restaurant.phoneHref}>
                    <Phone /> Call {restaurant.phone}
                  </a>
                </Button>
                <Button asChild variant="rustic" size="xl">
                  <a href={restaurant.facebook} target="_blank" rel="noreferrer noopener">
                    <Facebook /> Message on Facebook
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border-2 border-primary/40 bg-primary/10 p-6">
              <p className="text-script text-2xl text-primary">Remember!</p>
              <p className="mt-1 font-semibold text-foreground">
                Kitchen closes at 3:00 pm and reopens at 6:00 pm.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
