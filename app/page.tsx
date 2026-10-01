// À personnaliser
const CONTACT_EMAIL = "contact@orylab.fr";
const ORYSTUDIO_URL = "https://orystudio.fr";

const teasers = [
  { code: "01", title: "Impression 3D", text: "Objets fonctionnels et décoratifs, conçus sous Fusion 360 et imprimés sur place." },
  { code: "02", title: "Horloges & mécanismes", text: "Pendules, horloges murales, pièces mobiles : des projets qui bougent." },
  { code: "03", title: "Prototypes & petites séries", text: "De l'idée au fichier, du fichier à l'objet. Bientôt disponibles à la commande." },
];

function Dots({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`inline-flex gap-[0.18em] ${className}`}>
      <span className="dot-a block size-[0.32em] rounded-full bg-paper" />
      <span className="dot-b block size-[0.32em] rounded-full bg-filament" />
    </span>
  );
}

export default function Home() {
  return (
    <main className="layers relative flex min-h-svh flex-col">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 pt-6 sm:px-8 sm:pt-8">
        <span className="text-lg font-semibold tracking-tight">öRyLab</span>
        <span className="flex items-center gap-2 rounded-full border border-paper/15 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted">
          <span className="size-1.5 rounded-full bg-filament" />
          En construction
        </span>
      </header>

      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 py-16 sm:px-8">
        <Dots className="mb-6 text-6xl sm:text-8xl" />
        <h1 className="max-w-3xl text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-tight">
          Le labo est en train d&apos;imprimer<span className="text-filament">.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-paper/70">
          öRyLab, c&apos;est l&apos;atelier R&amp;D de Grégory Garcia : impression 3D, objets conçus de A à Z et
          expérimentations. Le site arrive bientôt, couche après couche.
        </p>

        <div className="mt-10 max-w-md" role="presentation">
          <div className="flex justify-between font-mono text-[11px] uppercase tracking-widest text-muted">
            <span>Impression du site</span>
            <span>Couche 42 / 100</span>
          </div>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-paper/10">
            <div className="print-bar h-full w-[42%] rounded-full bg-filament" />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition hover:bg-filament hover:text-paper"
          >
            Me contacter
          </a>
          <a
            href={ORYSTUDIO_URL}
            className="rounded-full border border-paper/20 px-5 py-3 text-sm font-medium transition hover:border-paper/60"
          >
            Besoin d&apos;un site web ? öRyStudio →
          </a>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-widest text-muted">Bientôt au labo</p>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:grid-cols-3">
          {teasers.map((t) => (
            <li key={t.code} className="bg-ink p-6">
              <span className="font-mono text-xs text-filament">{t.code}</span>
              <h2 className="mt-3 text-lg font-semibold">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{t.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mx-auto flex w-full max-w-5xl flex-col gap-2 border-t border-paper/10 px-5 py-6 font-mono text-[11px] uppercase tracking-widest text-muted sm:flex-row sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} öRyLab · Harnes, Hauts-de-France</span>
        <span>
          Une marque <span className="text-paper">öRy</span>
        </span>
      </footer>
    </main>
  );
}
