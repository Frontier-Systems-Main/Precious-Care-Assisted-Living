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
      <CardHeader className="space-y-3 p-5 pb-0 sm:p-6 sm:pb-0">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-sm sm:tracking-[0.2em]">
          Contact form
        </p>
        <CardTitle className="font-heading text-[2rem] leading-tight text-foreground sm:text-3xl">
          Tell us how to reach you
        </CardTitle>
        <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Precious Care Assisted Living Facility is here to help families ask
          questions, learn more about the home-like setting, and take the next
          step toward a conversation or tour.
        </p>
        <div className="rounded-[1.1rem] border border-[#ecd6e4] bg-[#fff4fb]/85 px-4 py-3 text-sm leading-6 text-[#35556b] sm:rounded-[1.35rem] sm:text-base sm:leading-7">
          Share as much or as little as you need. A short message is enough to
          start the conversation.
        </div>
      </CardHeader>
      <CardContent className="p-5 sm:p-6">
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
            <Button type="submit" size="lg" className="w-full sm:w-auto">
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
