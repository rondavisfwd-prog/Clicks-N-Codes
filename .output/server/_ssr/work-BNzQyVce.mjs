import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-qJJObVZa.mjs";
import { t as CTASection } from "./CTASection-Bdx--wDO.mjs";
import {
  n as TestimonialsSection,
  r as WorkSection,
  t as MetricsSection,
} from "./TestimonialsSection-DWTxQup8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-BNzQyVce.js
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
          eyebrow: "Selected work",
          title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_jsx_runtime.Fragment,
            {
              children: [
                "Selected",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                "work.",
              ],
            },
          ),
          copy: "Sample case studies shown while client engagements are being prepared for publication.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSection, {
          showHeader: false,
          detailed: true,
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricsSection, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {}),
      ],
    },
  );
}
//#endregion
export { WorkPage as component };
