import { Section } from "../components/layout/Section";
import { Badge } from "../components/ui/Badge";
import { Reveal } from "../components/ui/Reveal";
import { experience } from "../data/experience";
import { profile } from "../data/profile";
import { skillLayers } from "../data/skills";

const ROLES = ["Analytics Engineer", "Data Analyst", "Product Analyst", "Data Scientist"];

/** Act 4: about statement, the four working layers, education, and background. */
export function Profile() {
  const visibleExperience = experience.filter((item) => item.verified);

  return (
    <Section
      id="about"
      label="About"
      meta="04 / Profile"
      title="One pattern, four layers"
    >
      <Reveal>
        <p className="max-w-3xl font-display text-xl font-medium leading-snug text-[#16181d] sm:text-2xl">
          {profile.about}
        </p>
        <ul className="mt-7 flex flex-wrap gap-2" aria-label="Role focus">
          {ROLES.map((role) => (
            <li key={role}>
              <Badge tone="accent">{role}</Badge>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* working layers */}
      <div className="mt-14 space-y-4">
        {skillLayers.map((layer, index) => (
          <Reveal key={layer.id} delay={index * 0.05}>
            <div className="paper-card grid gap-4 rounded-2xl p-6 sm:grid-cols-[220px_1fr] sm:gap-8">
              <div>
                <p className="font-mono text-[11px] font-bold text-[#c23a08]">0{index + 1}</p>
                <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-[#16181d]">
                  {layer.name}
                </h3>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-[#4b4f58]">{layer.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {layer.tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
                <p className="mt-3 text-xs text-[#8a8e98]">
                  <span className="font-mono uppercase tracking-wider">Proof: </span>
                  {layer.proofProjects.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* education / background */}
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {visibleExperience.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.07}>
            <div className="paper-card h-full rounded-2xl p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c23a08]">
                {item.kind === "education" ? "Education" : "Experience"}
                {" · "}
                {item.startDate}
                {item.endDate ? ` to ${item.endDate}` : ""}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-[#16181d]">
                {item.title}
              </h3>
              <p className="mt-0.5 text-sm text-[#4b4f58]">
                {item.organization}
                {item.location ? `, ${item.location}` : ""}
              </p>
              {item.kind === "experience" ? (
                <p className="mt-3 text-sm leading-relaxed text-[#4b4f58]">
                  {item.description.join(" ")}
                </p>
              ) : (
                <ul className="mt-3 space-y-1.5">
                  {item.description.map((line) => (
                    <li key={line} className="text-sm leading-relaxed text-[#4b4f58]">
                      {line}
                    </li>
                  ))}
                </ul>
              )}
              {item.bullets && (
                <ul className="mt-3 list-disc space-y-1.5 pl-4">
                  {item.bullets.map((line) => (
                    <li key={line} className="text-sm leading-relaxed text-[#4b4f58]">
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
