import project1 from '@/assets/projects/project-1.webp';
import project2 from '@/assets/projects/project-2.webp';
import project3 from '@/assets/projects/project-3.webp';
import project4 from '@/assets/projects/project-4.webp';
import project5 from '@/assets/projects/project-5.webp';
import project6 from '@/assets/projects/project-6.webp';
import project7 from '@/assets/projects/project-7.webp';
import project8 from '@/assets/projects/project-8.webp';

const projects = [
  { src: project1, alt: 'Wooden swing gate installation' },
  { src: project2, alt: 'Modern black aluminum gate' },
  { src: project3, alt: 'Ornamental iron driveway gate' },
  { src: project4, alt: 'Contemporary slat gate design' },
  { src: project5, alt: 'Horizontal rail gate installation' },
  { src: project6, alt: 'Wood fence with iron pedestrian gate' },
  { src: project7, alt: 'Sliding gate motor installation' },
  { src: project8, alt: 'DoorBird access control system' },
];

const getPreviousMonthName = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date.toLocaleString('en-US', { month: 'long' });
};

export function RecentProjects() {
  const prevMonth = getPreviousMonthName();

  return (
    <section className="py-16 md:py-24 bg-background border-t border-border">
      <div className="container-main">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">
            <span className="text-foreground">Recent </span>
            <span className="gold-text">{prevMonth}</span>
            <span className="text-foreground"> Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Real work from our team — every technician arrives with hundreds of design options.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-sm"
            >
              <img
                src={project.src}
                alt={project.alt}
                loading="lazy"
                decoding="async"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
