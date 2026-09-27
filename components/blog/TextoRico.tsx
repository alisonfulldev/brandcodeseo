import Link from "next/link";
import type { ReactNode } from "react";

// Aceita [texto](/url) e **negrito** dentro dos textos dos artigos.
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

export default function TextoRico({ texto }: { texto: string }) {
  const partes: ReactNode[] = [];
  let ultimo = 0;
  for (const m of texto.matchAll(TOKEN)) {
    const inicio = m.index ?? 0;
    if (inicio > ultimo) partes.push(texto.slice(ultimo, inicio));
    if (m[1] && m[2]) {
      const interno = m[2].startsWith("/");
      partes.push(
        interno ? (
          <Link key={inicio} href={m[2]} className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
            {m[1]}
          </Link>
        ) : (
          <a key={inicio} href={m[2]} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline underline-offset-2 hover:text-blue-900">
            {m[1]}
          </a>
        )
      );
    } else if (m[3]) {
      partes.push(<strong key={inicio} className="font-semibold text-[#0A1628]">{m[3]}</strong>);
    }
    ultimo = inicio + m[0].length;
  }
  if (ultimo < texto.length) partes.push(texto.slice(ultimo));
  return <>{partes}</>;
}
