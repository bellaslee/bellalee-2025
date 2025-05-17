import Navigation from '@/app/_components/navigation';
import Link from 'next/link';
import Separator from '../_components/separator';

export default function Home() {
  return (
    <main>
      <Navigation />
      <section className="flex flex-col md:flex-row">
        <div className="flex-1 mt-20">
          <h2>
            Hi, I'm Bella! I'm a consultant, designer, artist, and writer.
          </h2>
          <p>
            My dream is to make information more intuitive, accessible, and
            enjoyable by bridging the gap between people and technology. I'm
            particularly interested in organizing data such that it is easy to
            find and creating meaningful and readable visualizations.
          </p>
          <p>
            Everyone has a story to tell. I strive to understand, empathize
            with, and incorporate people’s diverse voices and experiences as the
            foundation for a good information experience.
          </p>
          <p>
            See a glimpse of my world in{' '}
            <a href="https://garden.bellalee.com">my digital garden</a> or view
            more polished works <Link href="/blog">on my blog</Link> :)
          </p>
          <p>
            Beyond work, I enjoy drawing, singing, fingerstyle guitar, hip-hop
            dance, reading, and diving into new things, like tarot, creative
            writing, and archaic Chinese. I take pride in my curiosity and
            eagerness to learn, and I hope to get to know myself, others, and
            the world better as I progress in my career. I gravitate toward
            themes of love, fate, eternity, and loss in art and philosophy.
            Books that I've enjoyed recently include <i>The Door</i>,{' '}
            <i>The Count of Monte Cristo</i>, <i>Giovanni's Room</i>,{' '}
            <i>Crime and Punishment</i>, and <i>The Flowers of Buffoonery</i>.
            Some fun projects that I've worked on in the past include page art
            and merch for fanzines, selling my own acrylic keychains, and doing
            commissions for DND campaigns. I also like giving clothes I don't
            wear anymore new lives by drawing my own designs on them.
          </p>
        </div>
        <div className="flex-1"></div>
      </section>
      <section className="flex flex-col md:flex-row mb-18">
        <div className="flex-1"></div>
        <div className="flex-1 mt-20">
          <h2>Projects</h2>
          <h3>UX Design & Research</h3>
          <ul>
            <li>
              <a href="../projects/info-capstone">
                Gender in STEM: the Power of Image
              </a>
            </li>
            <li>
              <a href="https://umwelt.vercel.app/" target="_blank">
                Umwelt
              </a>
            </li>
            <li>
              <Link href="../projects/giiive">Giiive</Link>
            </li>
            <li>
              <Link href="../projects/itemize">Itemize</Link>
            </li>
          </ul>
          <h3>Data Visualization</h3>
          <ul>
            <li>
              <Link href="../projects/datathon-2023">
                UW Dubstech 2023 Datathon
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col md:flex-row">
        <div className="flex-1"></div>
        <div className="flex-1">
          <h2>Experience</h2>
          <ul>
            <li>
              <b>West Monroe</b> / Consultant (2025–)
            </li>
            <li>
              <b>UW Information Technology</b> / Brand Strategy Intern (2023 —
              2025)
            </li>
            <li>
              <b>Smirk UW</b> / President (2023–2024)
              <ul>
                <li>Chief Design Officer (2022–2023)</li>
                <li>Graphic Designer (2021–2022)</li>
              </ul>
            </li>
            <li>
              <b>Sensors, Energy, and Automation Laboratory</b> / Web
              Development Team Lead (2022)
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
