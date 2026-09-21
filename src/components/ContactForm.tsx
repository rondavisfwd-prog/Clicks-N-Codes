import { useState } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { budgetOptions, serviceChips, timelineOptions } from "@/content/site";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "services" | "description", string>>;

export function ContactForm() {
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const toggleService = (service: string) =>
    setServices((current) =>
      current.includes(service) ? current.filter((s) => s !== service) : [...current, service],
    );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (services.length === 0) next.services = "Select at least one service.";
    if (description.length < 20) next.description = "A couple of sentences helps us reply properly.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    // Placeholder submission: connect to an inbox or CRM before launch.
    window.setTimeout(() => setStatus("sent"), 900);
  };

  if (status === "sent") {
    return (
      <div className="border-t border-accent pt-12">
        <span className="inline-flex size-12 items-center justify-center bg-accent text-accent-foreground">
          <Check className="size-5" aria-hidden="true" />
        </span>
        <h2 className="mt-8 font-display text-title font-bold uppercase">Inquiry received</h2>
        <p className="mt-4 max-w-[44ch] text-sm text-muted-foreground">
          Thanks — we&apos;ll come back to you within one business day with next steps and a few
          questions.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setServices([]);
            setBudget("");
            setTimeline("");
          }}
          className="mt-8 border-b border-foreground pb-1 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:border-accent hover:text-accent"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-14">
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" error={errors.email} required />
        <Field label="Phone (optional)" name="phone" type="tel" />
      </div>

      <fieldset>
        <legend className="eyebrow text-muted-foreground">What do you need?</legend>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {serviceChips.map((chip) => {
            const selected = services.includes(chip);
            return (
              <button
                key={chip}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleService(chip)}
                className={cn(
                  "border px-5 py-3.5 text-xs uppercase tracking-[0.14em] transition-all duration-500",
                  selected
                    ? "border-transparent bg-ink text-ink-foreground"
                    : "border-hairline text-muted-foreground hover:border-foreground hover:text-foreground",
                )}
              >
                {chip}
              </button>
            );
          })}
        </div>
        {errors.services ? <ErrorText>{errors.services}</ErrorText> : null}
      </fieldset>

      <ChipGroup
        legend="Project budget"
        options={budgetOptions}
        value={budget}
        onChange={setBudget}
      />
      <ChipGroup
        legend="Timeline"
        options={timelineOptions}
        value={timeline}
        onChange={setTimeline}
      />

      <div>
        <label htmlFor="description" className="eyebrow text-muted-foreground">
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          aria-invalid={Boolean(errors.description)}
          className="mt-4 w-full border-b border-input bg-transparent pb-4 text-base outline-none transition-colors duration-500 focus:border-accent sm:text-sm"
          placeholder="What are you building, and what does success look like?"
        />
        {errors.description ? <ErrorText>{errors.description}</ErrorText> : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 bg-ink px-8 py-6 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            Send Inquiry
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string | undefined;
  error?: string | undefined;
  required?: boolean | undefined;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        className="mt-4 w-full border-b border-input bg-transparent pb-4 text-base outline-none transition-colors duration-500 focus:border-accent sm:text-sm"
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  );
}

function ChipGroup({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="eyebrow text-muted-foreground">{legend}</legend>
      <div className="mt-6 flex flex-wrap gap-2.5">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={value === option}
            onClick={() => onChange(value === option ? "" : option)}
            className={cn(
              "border px-5 py-3.5 text-xs uppercase tracking-[0.14em] transition-all duration-500",
              value === option
                ? "border-transparent bg-ink text-ink-foreground"
                : "border-hairline text-muted-foreground hover:border-foreground hover:text-foreground",
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <p role="alert" className="mt-3 text-xs text-destructive">
      {children}
    </p>
  );
}
