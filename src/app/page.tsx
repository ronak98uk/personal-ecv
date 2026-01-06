export default function Page() {
  const profile = {
    name: "Ronakkumar Alpeshkumar Prajapati",
    location: "London, UK",
    phone: "+44 78338 15873",
    email: "ronak98uk@gmail.com",
    linkedinLabel: "linkedin.com/in/ronak98p",
    linkedinUrl: "https://www.linkedin.com/in/ronak98p",
    headline: "Retail & Warehouse Professional | MSc Management with Data Analytics",
    summary:
      "Motivated and dependable retail and warehouse professional with hands-on experience at Amazon and Sainsbury’s. Skilled in stock handling, deliveries, and maintaining excellent store presentation. Confident using digital tools to manage stock and ensure product availability. A strong team player who delivers tasks with efficiency, accuracy, and a customer-first attitude.",
  };

  const skills = [
    { title: "Store & Operations", items: ["Stock replenishment", "Delivery processing", "Stockroom organisation"] },
    { title: "Customer Service", items: ["Product assistance", "Customer engagement", "Service excellence"] },
    { title: "Digital Skills", items: ["Inventory systems", "Handheld scanners", "Microsoft Excel", "Microsoft Word"] },
    { title: "Teamwork & Adaptability", items: ["Flexible across departments", "Shift flexibility", "Clear communication"] },
    { title: "Health & Safety", items: ["Safe handling practices", "Compliance with SOPs", "High safety standards"] },
  ];

  const experience = [
    {
      company: "Amazon",
      location: "Dartford, United Kingdom",
      role: "Warehouse Operative",
      dates: "March 2025 – Present",
      bullets: [
        "Process and pick products promptly to meet daily targets.",
        "Support smooth logistics flow through teamwork and clear communication.",
        "Use digital tools to track and manage stock accurately while maintaining quality standards.",
      ],
    },
    {
      company: "Amazon",
      location: "Tilbury, United Kingdom",
      role: "Warehouse Operative",
      dates: "June 2024 – January 2025",
      bullets: [
        "Ensured prompt processing and shipment of orders in a high-volume distribution environment.",
        "Unloaded, sorted, and scanned parcels to maintain stock accuracy.",
        "Followed health and safety guidelines and supported workflow coordination.",
      ],
    },
    {
      company: "Sainsbury’s",
      location: "Eltham Superstore",
      role: "Trading Assistant",
      dates: "November 2023 – December 2023",
      bullets: [
        "Restocked shelves, conducted product code checks, and supported daily store operations.",
        "Handled customer queries and supported till service and cash transactions.",
        "Maintained clean, organised sections to enhance customer experience.",
      ],
    },
  ];

  const projects = [
    {
      title: "Quiz Management System",
      dates: "2021–2022",
      subtitle: "Master’s Degree Project",
      bullets: [
        "Developed a dynamic web application for creating and managing interactive quizzes and tracking user performance.",
        "Front End: Django, HTML, CSS, JavaScript; Back End: Python",
      ],
      tags: ["Django", "Python", "HTML/CSS", "JavaScript"],
    },
    {
      title: "Railway Reservation System",
      dates: "2019–2020",
      subtitle: "Bachelor’s Degree Project",
      bullets: [
        "Designed and built a database-driven system to handle ticket booking, cancellations, and user management.",
        "Front End: ASP.Net; Back End: MS SQL Server",
      ],
      tags: ["ASP.NET", "MS SQL Server"],
    },
    {
      title: "Student Management System",
      dates: "2018–2019",
      subtitle: "Bachelor’s Degree Project",
      bullets: [
        "Created a desktop application to manage student records, academic performance, and personal information efficiently.",
        "Front End: VB.Net; Back End: MS SQL Server",
      ],
      tags: ["VB.NET", "MS SQL Server"],
    },
    {
      title: "Static Website on Mobile Games",
      dates: "2017–2018",
      subtitle: "Bachelor’s Degree Project",
      bullets: [
        "Developed a responsive informational website displaying various mobile games using fundamental web technologies.",
        "Technologies: HTML, CSS, Bootstrap, JavaScript",
      ],
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
  ];

  const education = [
    { degree: "MSc Management with Data Analytics", school: "BPP University, London", dates: "2022 – 2024" },
    { degree: "MCA – Master of Computer Applications", school: "Sardar Patel University, India", dates: "2020 – 2022" },
    { degree: "BSc Information Technology", school: "Sardar Patel University, India", dates: "2017 – 2020" },
  ];

  const certifications = [
    "Level 3 Emergency First Aid at Work (BIIAB, UK)",
    "Fire Safety Awareness Course (BIIAB, UK)",
    "ASP.Net Training Certificate (Hatkesh Infotech Pvt. Ltd., 6 months)",
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="border-b border-zinc-200 pb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{profile.name}</h1>
              <p className="mt-2 text-base text-zinc-700">{profile.headline}</p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">{profile.summary}</p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-4 text-sm text-zinc-700">
              <div className="flex flex-col gap-1">
                <span className="font-medium text-zinc-900">{profile.location}</span>
                <span>{profile.phone}</span>
                <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <a className="underline underline-offset-4" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                  {profile.linkedinLabel}
                </a>
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-3 py-2 text-xs font-medium text-white hover:bg-zinc-800"
                  href={`mailto:${profile.email}`}
                >
                  Contact
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-3 py-2 text-xs font-medium text-zinc-900 hover:bg-zinc-50"
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Key Skills</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((block) => (
              <div key={block.title} className="rounded-xl border border-zinc-200 p-4 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">{block.title}</p>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700">
                  {block.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Professional Experience</h2>
          <div className="mt-4 space-y-4">
            {experience.map((job) => (
              <article key={`${job.company}-${job.role}-${job.dates}`} className="rounded-xl border border-zinc-200 p-5 shadow-sm">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold">{job.role}</h3>
                    <p className="text-sm text-zinc-700">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-600">{job.dates}</p>
                </div>
                <ul className="mt-3 space-y-1 text-sm text-zinc-700">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="rounded-xl border border-zinc-200 p-5 shadow-sm">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="text-sm text-zinc-600">
                  {p.subtitle} · {p.dates}
                </p>

                <ul className="mt-3 space-y-1 text-sm text-zinc-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Education</h2>
            <div className="mt-4 space-y-3">
              {education.map((e) => (
                <div key={e.degree} className="border-l border-zinc-200 pl-4">
                  <p className="text-sm font-semibold">{e.degree}</p>
                  <p className="text-sm text-zinc-700">{e.school}</p>
                  <p className="text-sm text-zinc-600">{e.dates}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Certifications</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="mt-12 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}


