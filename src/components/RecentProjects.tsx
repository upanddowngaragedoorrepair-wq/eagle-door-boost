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

export function RecentProjects() {
  return (
    <section className="py-[72px] md:py-24 border-t border-border bg-background">
      <div className="container-main">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">
            <span className="text-foreground">Our Most Recent </span>
            <span className="gold-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every technician arrives with a tablet showing hundreds of real designs from our recent installs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
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
