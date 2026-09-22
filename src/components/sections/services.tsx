import { Reveal, SectionHeading } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { services, servicesIntro } from "@/content/services";
import { site } from "@/content/site";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
          description={servicesIntro.description}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.03}>
              <article className="h-full rounded-3xl border border-white/8 bg-white/[0.03] p-5">
                <h3 className="text-base text-zinc-50">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Button
            size="lg"
            className="h-11 rounded-full px-5"
            nativeButton={false}
            render={<a href={site.ctas.startProject.href} />}
          >
            {site.ctas.startProject.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
