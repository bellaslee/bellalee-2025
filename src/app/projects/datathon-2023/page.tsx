import styles from '@/app/_styles/project-styles.module.css';
import Navigation from '@/app/_components/navigation';
import Container from '@/app/_components/container';
import ProjectInfo from '@/app/_components/project-info';
import TwoColSection from '@/app/_components/two-col-section';
import { ExternalLink } from 'lucide-react';

export default function Datathon2023() {
  return (
    <main className={styles['project']}>
      <Navigation />
      <Container>
        <ProjectInfo
          title="Datathon 2023"
          client="Dubstech Datathon"
          type="Data Analysis & Visualization"
          startYear={2023}
          imgSrc="/img/posts/datathon-2023/thumbnail.jpeg"
          imgAlt="Thumbnail for Datahon 2023 project."
          imgWidth={2880}
          imgHeight={1546}
        />
        <TwoColSection title="Overview">
          <p>
            Our project placed 1st out of 34 teams for Best Data Analysis in the
            2023 UW Dubstech Datathon. The project was created by a team of
            three over the course of two days.
          </p>
          <p>
            Project created with Iris Hamilton and Sean Lim for the UW Dubstech
            2023 Datathon.
          </p>
          <p>
            <a href="https://datathon-2023.netlify.app/">
              View project <ExternalLink className="w-4 h-4 inline" />
            </a>
          </p>
        </TwoColSection>
        <TwoColSection title="Solution">
          <p>
            The event organizers provided us with a dataset and a list of
            potential questions to explore. Since our team members were just
            dipping our toes into data analysis, we chose the grocery store data
            track to work with. Prior to the datathon, we had attended workshops
            to learn how to use Power BI and Tableau.
          </p>
        </TwoColSection>
      </Container>
    </main>
  );
}
