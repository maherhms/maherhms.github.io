import {
  mobile,
  backend,
  creator,
  web,
  netframework,
  database,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  itdz,
  htw,
  carrent,
  jobit,
  tripguide,
  threejs,
  unity,
  blender,
  csharp,
  dotnet,
  aspnet,
  efcore,
  restapi,
  oracle,
  sql,
  linux,
  ansible,
  gamestore,
  inventory,
  admin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: ".NET Backend Development",
    icon: dotnet,
  },
  {
    title: "Oracle Database & Automation",
    icon: database,
  },
  {
    title: "C# / Unity Game Development",
    icon: unity,
  },
  {
    title: "3D & Interactive Applications",
    icon: blender,
  },
];

const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotnet, 
  },
  {
    name: "ASP.NET Core",
    icon: aspnet,
  },
  {
    name: "Entity Framework Core",
    icon: efcore,
  },
  {
    name: "REST APIs",
    icon: restapi,
  },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Ansible",
    icon: ansible,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "JavaScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Oracle-Spezialist",
    company_name: "ITDZ Berlin (IT-Dienstleistungszentrum Berlin)",
    icon: itdz,
    iconBg: "#E6DEDD",
    date: "Apr. 2025 – Heute",
    points: [
      "Automatisierung der Bereitstellung und Installation von Oracle-Datenbanken unter RHEL 8/9 mittels Ansible.",
      "Entwicklung und Pflege von Ansible-Playbooks für Installation, Konfiguration und Patch-Management.",
      "Sicherstellung konsistenter, reproduzierbarer und auditierbarer Datenbank-Deployments.",
    ],
  },
  {
    title: "QA-Tester",
    company_name: "ITDZ Berlin (IT-Dienstleistungszentrum Berlin)",
    icon: itdz,
    iconBg: "#E6DEDD",
    date: "Okt. 2024 – März 2025",
    points: [
      "Durchführung von Qualitätssicherungstests für IT-Systeme und Anwendungen.",
      "Planung, Durchführung und Dokumentation von Tests.",
      "Identifikation und Dokumentation von Fehlern und Abweichungen.",
    ],
  },
  {
    title: "AR/VR Unity Developer – Inspirer",
    company_name: "Hochschule für Technik und Wirtschaft Berlin",
    icon: htw,
    iconBg: "#383E56",
    date: "Jan. 2022 – Aug. 2024",
    points: [
      "Erarbeitung wissenschaftlicher Grundlagen im Bereich Augmented Reality zur Partizipation im Stadtraum.",
      "Konzeption und Entwicklung von digitalen und nicht-digitalen Prototypen.",
      "Betreuung und Evaluation von User-Tests.",
      "Entwicklung von Augmented-Reality-Funktionen und Benutzeroberflächen für mobile Endgeräte.",
      "Entwicklung mit der Unity Engine sowie Programmierung von AR-Funktionen und Datenbankschnittstellen in C#.",
      "Integration von Frameworks und Plugins.",
      "Erstellung und Optimierung von 3D-Objekten für Augmented- und Virtual-Reality-Anwendungen.",
    ],
  },
  {
    title: "React Web Application Developer – SparePartAssist & RecoStation",
    company_name: "Hochschule für Technik und Wirtschaft Berlin",
    icon: htw,
    iconBg: "#E6DEDD",
    date: "Okt. 2021 – Juli 2022",
    points: [
      "Entwicklung von Deep-Learning-Verfahren für die 3D-Ähnlichkeitssuche.",
      "Entwicklung synthetischer Datensätze und Aufbereitung realer Datensätze.",
      "Testen und Evaluieren der entwickelten Algorithmen.",
      "Entwicklung von Three.js-Algorithmen.",
      "Entwurf von Mockups und Entwicklung einer plattformübergreifenden WebView-App für iOS und Android.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "GameStore",
    description:
      "Moderne REST-API auf Basis von ASP.NET Core und .NET 10 mit Minimal APIs. Das Projekt zeigt saubere Backend-Entwicklung, API-Design, Datenpersistenz und eine wartbare Anwendungsstruktur.",
    tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "aspnetcore",
        color: "green-text-gradient",
      },
      {
        name: "efcore",
        color: "pink-text-gradient",
      },
    ],
    image: gamestore,
    source_code_link: "https://github.com/maherhms/GameStore",
  },

  {
    name: "Inventory Control System",
    description:
      "Anwendung zur Verwaltung von Inventar und Beständen, entwickelt mit ASP.NET Core MVC, Entity Framework Core und SQL Server. Der Fokus liegt auf einer sauberen und wartbaren Anwendungsarchitektur.",
      tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "aspnetcore",
        color: "green-text-gradient",
      },
      {
        name: "sqlserver",
        color: "pink-text-gradient",
      },
      {
        name: "Blazor",
        color: "white-text-gradient",
      },
      {
        name: ".net-mvc",
        color: "green-text-gradient",
      },
    ],
    image: inventory,
    source_code_link:
      "https://github.com/maherhms/InventoryControlSystem_MVC",
  },

  {
    name: "Admin Dashboard",
    description:
      "Full-Stack-Administrationsplattform mit rollenbasierten Benutzeroberflächen, Analytics, Authentifizierung und Cloud-Diensten. Entwickelt mit modernen TypeScript- und React-Technologien.",
      tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link:
      "https://github.com/maherhms/Admin-Dashboard-Frontend",
  },
  {
    name: "AshenDepths",
    description:
      "RPG-Projekt, entwickelt mit Unity und C#. Inspiriert von modernen Souls-Like und mit Fokus auf Gameplay-Systeme, Combat, interaktive Mechaniken und 3D-Umgebungen.",
    tags: [
      { name: "csharp", color: "blue-text-gradient" },
      { name: "unity", color: "green-text-gradient" },
      { name: "Terrain-generation", color: "white-text-gradient" },
      { name: "Blender", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://www.youtube.com/watch?v=HbkaW4KNsCA",
  },
  {
    name: "Shattered Realms",
    description:
      "Action-RPG entwickelt mit Unity und C#. Das Projekt verbindet Gameplay-Programmierung, interaktive Systeme und 3D-Umgebungen, die mit Blender erstellt wurden.",
      tags: [
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "blender",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/maherhms/Shattered-Realms",
  },
];



export { services, technologies, experiences, testimonials, projects };