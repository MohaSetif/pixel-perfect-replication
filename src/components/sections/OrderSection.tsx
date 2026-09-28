import { useState } from "react";
import { Facebook, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { restaurant } from "@/lib/restaurant";
import { useLanguage } from "@/hooks/useLanguage";

export function OrderSection() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success(
      t.order.disclaimer,
    );
  };

  return (
    <section id="order" className="bg-secondary/60 bg-woodgrain py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.order.eyebrow}
            title={t.order.title}
            subtitle={t.order.subtitle}
          />
        </Reveal>

        <div className="mt-12 flex justify-center">
          {/* <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-warm sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="name">{t.order.name}</Label>
                  <Input id="name" name="name" required placeholder={t.order.namePlaceholder} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="date">{t.order.date}</Label>
                  <Input id="date" name="date" type="date" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="time">{t.order.time}</Label>
                  <Input id="time" name="time" type="time" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="party">{t.order.partySize}</Label>
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
                  <Label htmlFor="contact">{t.order.contact}</Label>
                  <Input
                    id="contact"
                    name="contact"
                    required
                    placeholder={t.order.contactPlaceholder}
                    className="mt-2"
                  />
                </div>
              </div>

              <Button type="submit" variant="hero" size="xl" className="mt-7 w-full">
                <Send /> {sent ? t.order.sent : t.order.send}
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {t.order.disclaimer}
              </p>
            </form>
          </Reveal> */}

          <Reveal delay={120} className="w-full max-w-2xl space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-warm">
              <h3 className="text-xl font-bold text-foreground">{t.order.ratherTalk}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.order.ratherTalkDesc}
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Button asChild variant="hero" size="xl">
                  <a href={restaurant.phoneHref}>
                    <Phone /> {t.order.call} {restaurant.phone}
                  </a>
                </Button>
                <Button asChild variant="rustic" size="xl">
                  <a href={restaurant.facebook} target="_blank" rel="noreferrer noopener">
                    <Facebook /> {t.order.messageOnFacebook}
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border-2 border-primary/40 bg-primary/10 p-6">
              <p className="text-script text-2xl text-primary">{t.order.remember}</p>
              <p className="mt-1 font-semibold text-foreground">
                {t.order.rememberDesc}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
