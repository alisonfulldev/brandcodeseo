import Link from "next/link";

interface LinkItem {
  href: string;
  label: string;
}

interface LinkGroup {
  titulo: string;
  links: LinkItem[];
}

export default function RelatedLinksSection({ groups }: { groups: LinkGroup[] }) {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {groups.map((group) => (
            <div key={group.titulo}>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                {group.titulo}
              </h2>
              <div className="flex flex-wrap gap-2">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs text-gray-600 bg-white border border-gray-200 rounded-md px-3 py-1.5 hover:border-blue-300 hover:text-blue-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
