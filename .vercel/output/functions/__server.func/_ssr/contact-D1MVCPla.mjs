import { r as __toESM } from "../_runtime.mjs";
import { d as site, l as serviceChips, m as timelineOptions, n as budgetOptions, r as cn } from "./site-BL-5-lz3.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as PageHero } from "./PageHero-RJP8RCxl.mjs";
import { a as ArrowUpRight, i as Check, r as LoaderCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D1MVCPla.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/ContactForm.tsx";
function ContactForm() {
	const [services, setServices] = (0, import_react.useState)([]);
	const [budget, setBudget] = (0, import_react.useState)("");
	const [timeline, setTimeline] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const toggleService = (service) => setServices((current) => current.includes(service) ? current.filter((s) => s !== service) : [...current, service]);
	const onSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const description = String(data.get("description") ?? "").trim();
		const next = {};
		if (!name) next.name = "Please tell us your name.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
		if (services.length === 0) next.services = "Select at least one service.";
		if (description.length < 20) next.description = "A couple of sentences helps us reply properly.";
		setErrors(next);
		if (Object.keys(next).length > 0) return;
		setStatus("sending");
		window.setTimeout(() => setStatus("sent"), 900);
	};
	if (status === "sent") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "border-t border-accent pt-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "inline-flex size-12 items-center justify-center bg-accent text-accent-foreground",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, {
					className: "size-5",
					"aria-hidden": "true"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 51,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 50,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mt-8 font-display text-title font-bold uppercase",
				children: "Inquiry received"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 53,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-4 max-w-[44ch] text-sm text-muted-foreground",
				children: "Thanks — we'll come back to you within one business day with next steps and a few questions."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 56,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => {
					setStatus("idle");
					setServices([]);
					setBudget("");
					setTimeline("");
				},
				className: "mt-8 border-b border-foreground pb-1 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:border-accent hover:text-accent",
				children: "Send another"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 60,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 49,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
		onSubmit,
		noValidate: true,
		className: "flex flex-col gap-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-8 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
						label: "Name",
						name: "name",
						error: errors.name,
						required: true
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 79,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
						label: "Company",
						name: "company"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 80,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
						label: "Email",
						name: "email",
						type: "email",
						error: errors.email,
						required: true
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 81,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
						label: "Phone (optional)",
						name: "phone",
						type: "tel"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 88,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 78,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
					className: "eyebrow text-muted-foreground",
					children: "What do you need?"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 92,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap gap-2.5",
					children: serviceChips.map((chip) => {
						const selected = services.includes(chip);
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							"aria-pressed": selected,
							onClick: () => toggleService(chip),
							className: cn("border px-5 py-3.5 text-xs uppercase tracking-[0.14em] transition-all duration-500", selected ? "border-transparent bg-ink text-ink-foreground" : "border-hairline text-muted-foreground hover:border-foreground hover:text-foreground"),
							children: chip
						}, chip, false, {
							fileName: _jsxFileName$1,
							lineNumber: 99,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 95,
					columnNumber: 9
				}, this),
				errors.services ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorText, { children: errors.services }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 116,
					columnNumber: 28
				}, this) : null
			] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 91,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChipGroup, {
				legend: "Project budget",
				options: budgetOptions,
				value: budget,
				onChange: setBudget
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 119,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChipGroup, {
				legend: "Timeline",
				options: timelineOptions,
				value: timeline,
				onChange: setTimeline
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 125,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
					htmlFor: "description",
					className: "eyebrow text-muted-foreground",
					children: "Project description"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 133,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
					id: "description",
					name: "description",
					rows: 5,
					"aria-invalid": Boolean(errors.description),
					className: "mt-4 w-full border-b border-input bg-transparent pb-4 text-base outline-none transition-colors duration-500 focus:border-accent sm:text-sm",
					placeholder: "What are you building, and what does success look like?"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 136,
					columnNumber: 9
				}, this),
				errors.description ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorText, { children: errors.description }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 145,
					columnNumber: 11
				}, this) : null
			] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 132,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "submit",
				disabled: status === "sending",
				className: "inline-flex w-full items-center justify-center gap-2 bg-ink px-8 py-6 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto",
				children: status === "sending" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
					className: "size-4 animate-spin",
					"aria-hidden": "true"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 156,
					columnNumber: 13
				}, this), "Sending"] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 155,
					columnNumber: 11
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: ["Send Inquiry", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
					className: "size-4",
					"aria-hidden": "true"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 162,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 160,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 149,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 77,
		columnNumber: 5
	}, this);
}
function Field({ label, name, type = "text", error, required }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
			htmlFor: name,
			className: "eyebrow text-muted-foreground",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 185,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
			id: name,
			name,
			type,
			required,
			"aria-invalid": Boolean(error),
			className: "mt-4 w-full border-b border-input bg-transparent pb-4 text-base outline-none transition-colors duration-500 focus:border-accent sm:text-sm"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 188,
			columnNumber: 7
		}, this),
		error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorText, { children: error }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 196,
			columnNumber: 16
		}, this) : null
	] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 184,
		columnNumber: 5
	}, this);
}
function ChipGroup({ legend, options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
		className: "eyebrow text-muted-foreground",
		children: legend
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 214,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-6 flex flex-wrap gap-2.5",
		children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "button",
			"aria-pressed": value === option,
			onClick: () => onChange(value === option ? "" : option),
			className: cn("border px-5 py-3.5 text-xs uppercase tracking-[0.14em] transition-all duration-500", value === option ? "border-transparent bg-ink text-ink-foreground" : "border-hairline text-muted-foreground hover:border-foreground hover:text-foreground"),
			children: option
		}, option, false, {
			fileName: _jsxFileName$1,
			lineNumber: 217,
			columnNumber: 11
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 215,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 213,
		columnNumber: 5
	}, this);
}
function ErrorText({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		role: "alert",
		className: "mt-3 text-xs text-destructive",
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 239,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/contact.tsx?tsr-split=component";
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
		eyebrow: "Contact",
		title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
			"Let's make",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 13
			}, this),
			"something great."
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 6,
			columnNumber: 42
		}, this),
		copy: "A few details are enough to start. We reply within one business day."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "border-t border-hairline py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell grid gap-14 md:grid-cols-[1.3fr_0.7fr] md:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactForm, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
				className: "flex flex-col gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "eyebrow text-muted-foreground",
						children: "Email"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: `mailto:${site.email}`,
						className: "mt-3 block text-sm underline-offset-4 hover:underline",
						children: site.email
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 17,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "eyebrow text-muted-foreground",
						children: "Social"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3 flex flex-col gap-2",
						children: site.socials.map((social) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: social.href,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: social.label
						}, social.label, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 45
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "border-t border-hairline pt-6 text-sm text-muted-foreground",
						children: "Not sure which discipline your project needs? Describe the outcome and we'll map the route."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 10
	}, this);
}
//#endregion
export { ContactPage as component };
