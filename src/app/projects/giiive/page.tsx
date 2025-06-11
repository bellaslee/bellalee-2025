import Navigation from '@/app/_components/navigation';
import Container from '@/app/_components/container';
import Image from 'next/image';
import styles from '@/app/_styles/project-styles.module.css';
import ProjectInfo from '@/app/_components/project-info';
import TwoColSection from '@/app/_components/two-col-section';
import Links from '@/app/_components/links';

export default function Giiive() {
  return (
    <main className={styles['project']}>
      <Navigation />
      <Container>
        <ProjectInfo
          title="Giiive"
          client="BU Catalyst Designathon"
          type="UX Design and Research"
          startYear={2023}
          imgSrc="/img/posts/giiive/thumbnail.jpeg"
          imgAlt="Thumbnail for Giiive project."
          imgWidth={2880}
          imgHeight={1800}
        />
        <TwoColSection title="Overview">
          <p>
            Giiive placed 1st in the coexistence track, the track that had the
            most submissions, in the 2023 BU Catalyst Designathon. The project
            was created by a team of three over the course of two and a half
            days.
          </p>
          <p>
            <Links href="https://www.figma.com/proto/DgWWNKuQbQdncNsy4CyFWQ/Catalyst-2023?node-id=15-762&scaling=scale-down&page-id=15%3A711&starting-point-node-id=15%3A738">
              View Prototype
            </Links>
          </p>
        </TwoColSection>
        <TwoColSection title="Problem">
          <p>
            As students living in a densely-populated city, we coexist with
            people from many walks of life, including those experiencing
            homelessness. This issue is especially prevalent near the University
            of Washington campus, and we pass by many homeless individuals in
            our daily routines. As we come from backgrounds with little exposure
            to such experiences, we had to educate ourselves on the housing
            crisis as we assimilated into the culture here. We, and many of our
            friends, would help them if we could, but we lack the means to do so
            without risking personal safety. And, without hearing their stories,
            it is hard to break free from our biases and cultural stereotypes.
          </p>
          <p>
            <i>Giiive</i> aims to solve the problem by encouraging passersby to
            connect and empathize with their local homeless population by
            hearing their individual stories. By presenting the community
            through a human-centered approach rather than statistics, we aim to
            reduce stigma and encourage the user to engage with an accessible
            solution. Though we acknowledge that donations are short-term
            solutions, we hope that, by providing small starting steps, we can
            pique the user’s interest in contributing to long-term, systemic
            change.
          </p>
          <p>
            To aid them in their journey, we provide links to additional
            educational resources. We hope users will walk away from the
            experience feeling educated, compassionate, and open-minded.
          </p>
        </TwoColSection>
        <section className="md:columns-2">
          <Image
            src="/img/posts/giiive/1.jpeg"
            alt="Brainstorming mind map."
            width={1452}
            height={1304}
          />
          <Image
            src="/img/posts/giiive/2.jpeg"
            alt="Interview responses."
            width={1768}
            height={1312}
          />
          <Image
            src="/img/posts/giiive/3.jpeg"
            alt="User personas."
            width={1326}
            height={1158}
          />
          <Image
            src="/img/posts/giiive/4.jpeg"
            alt="Focus points."
            width={1448}
            height={1126}
          />
          <Image
            src="/img/posts/giiive/5.jpeg"
            alt="User flow."
            width={1130}
            height={1402}
          />
        </section>
        <TwoColSection title="Key Research Insights">
          <p>
            According to user research survey responses from 12 participants,
            stigma is the primary barrier that prevents them from diving beyond
            a surface-level interest and understanding of the situation. Many
            also expressed that they would be willing to give to the homeless
            community if appropriate resources were accessible and readily
            available. Therefore, we decided to design a mobile application
            aimed at reducing stigma and educating the user.
          </p>
        </TwoColSection>
        <TwoColSection title="Prototyping">
          <p>
            During our design process, we focused on goals rather than features,
            using “the leap” focus points to structure our decisions. We decided
            that the metric we wanted to move was the user’s open-mindedness and
            philanthropy, while we wanted users to feel educated and
            compassionate after the designed experience.
          </p>
        </TwoColSection>
        <TwoColSection title="Limitations">
          <p>
            Our app is targeted towards college students and young adults who
            have access to mobile phones and internet service. This main
            stakeholder was chosen out of convenience due to the time limit.
          </p>
          <p>
            We understand that some homeless individuals may not readily have
            access to these resources, hence we intend to connect them with our
            service through various local organizations. However, there is a
            possibility that their stories may be misrepresented, and they will
            have no control over this. Additionally, we must ensure that the
            privacy of the individuals behind the stories is well protected, as
            they do not have the luxury of stable, private residences.
          </p>
        </TwoColSection>
        <TwoColSection title="Attributions">
          <p>
            Project created with Annie Pao and Stephanie Chou for the BU
            Catalyst 2023 Designathon.
          </p>
        </TwoColSection>
      </Container>
    </main>
  );
}
