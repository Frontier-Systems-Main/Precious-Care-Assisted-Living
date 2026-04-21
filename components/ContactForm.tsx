import { BUSINESS } from "@/lib/constants";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  return (
    <Card className="overflow-hidden border-white/60 bg-white/85 shadow-glow backdrop-blur">
      <div
        className="h-2 w-full bg-gradient-to-r from-[#7bb0d6] via-[#ffd7eb] to-[#fff4d2]"
        aria-hidden="true"
      />
      <CardHeader className="space-y-3 p-6 pb-0">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Contact form
        </p>
        <CardTitle className="font-heading text-3xl leading-tight text-foreground">
          Tell us how to reach you
        </CardTitle>
        <p className="text-lg leading-8 text-muted-foreground">
          Precious Care Assisted Living Facility is here to help families ask
          questions, learn more about the home-like setting, and take the next
          step toward a conversation or tour.
        </p>
        <div className="rounded-[1.35rem] border border-[#ecd6e4] bg-[#fff4fb]/85 px-4 py-3 text-base leading-7 text-[#35556b]">
          Share as much or as little as you need. A short message is enough to
          start the conversation.
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <form
          action={BUSINESS.contact.formAction}
          method="POST"
          className="space-y-5"
        >
          <input type="hidden" name="_subject" value="Website inquiry" />

          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" autoComplete="name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" autoComplete="tel" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest">I am interested in</Label>
            <select
              id="interest"
              name="interest"
              defaultValue=""
              required
              className="flex h-12 w-full rounded-2xl border border-input bg-background px-4 py-3 text-base text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Assisted living">Assisted living</option>
              <option value="Career opportunities">Career opportunities</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Share a few details about your loved one, your timeline, or questions you would like answered."
            />
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <Button type="submit" size="lg">
              Send Inquiry
            </Button>
            <p className="text-sm leading-6 text-muted-foreground">
              Prefer to call or email instead? Use the direct contact details on
              this page.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
