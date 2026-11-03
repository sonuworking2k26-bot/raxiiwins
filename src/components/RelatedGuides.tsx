import Link from "next/link";
import { pages, type PageKey } from "@/lib/site";

const labels: Record<PageKey, string> = {
  home: "Raxi Win",
  register: "Raxi Win Register",
  login: "Raxi Win Login",
  apk: "Raxi Win APK",
  game: "Raxi Win Game",
  scam: "Scam checklist",
  responsible: "Responsible play",
};

const blurb: Record<PageKey, string> = {
  home: "Lobby overview and how to start",
  register: "Mobile signup, OTP and invite",
  login: "Phone login and password recovery",
  apk: "Download safety and install checks",
  game: "WinGo, K3, Aviator and more",
  scam: "Fake links and OTP traps",
  responsible: "Limits and healthier habits",
};

export function RelatedGuides({ current }: { current: PageKey }) {
  const keys = (Object.keys(pages) as PageKey[]).filter((k) => k !== current);

  return (
    <section className="related-section" aria-labelledby="related-heading">
      <div className="site-shell">
        <h2 id="related-heading" className="related-title">
          Related Raxi Win guides
        </h2>
        <p className="related-lead">Jump to the next topic without hunting the menu.</p>
        <ul className="related-grid">
          {keys.map((key) => (
            <li key={key}>
              <Link href={pages[key].path} className="related-link">
                <span className="related-link-title">{labels[key]}</span>
                <span className="related-link-blurb">{blurb[key]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
