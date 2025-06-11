import Navigation from '@/app/_components/navigation';
import Container from '@/app/_components/container';
import Image from 'next/image';
import styles from '@/app/_styles/project-styles.module.css';
import ProjectInfo from '@/app/_components/project-info';
import TwoColSection from '@/app/_components/two-col-section';
import Links from '@/app/_components/links';

export default function InfoCapstone() {
  return (
    <main className={styles['project']}>
      <Navigation />
      <Container>
        <ProjectInfo
          title="Gender in STEM: the Power of Image"
          client="Flickr Foundation"
          type="UX Design, UX Research, Marketing Strategy"
          startYear={2024}
          imgSrc="/img/posts/info-capstone/bus-mockup.jpg"
          imgAlt="Bus ad mockup."
          imgWidth={1891}
          imgHeight={1261}
        />
        <TwoColSection title="Overview">
          <p>
            STEM fields have notoriously been male-dominated. Out of 300
            STEM-oriented images we found on Flickr, only 38% of the people
            within them were femme-presenting, highlighting a significant
            underrepresentation. This disparity was further evident in our
            graphic elicitation study, where participants predominantly drew
            male figures when asked to depict STEM professionals. These findings
            demonstrate a market for a curated social justice gallery focusing
            on diverse representation.
          </p>
          <p>
            By leveraging the{' '}
            <Links href="https://www.flickr.com/commons">Flickr Commons</Links>,
            the gallery showcases a broader range of historical femme
            representations in STEM. By creating dynamic public and social media
            adverts with images from the study, we encourag professionals to
            engage with the gallery on their daily commute. This approach not
            only directs individuals to a visual resource promoting gender
            diversity, but also normalizes diverse representations in STEM,
            fostering a sense of belonging and inspiration.
          </p>
          <p>
            The combination of our research methods, gallery, and its marketing
            strategy demonstrates a commitment to creating a more inclusive and
            equitable STEM community, uplifting individuals who have been
            historically marginalized in these fields.
          </p>
          <p>
            <Links href="https://www.flickr.com/photos/201495836@N05/galleries/72157723349865334/">
              View gallery
            </Links>
          </p>
        </TwoColSection>
        <section className="md:columns-2">
          <Image
            src="/img/posts/info-capstone/lutterlough.png"
            alt="Sophie Lutterlough at her microscope."
            width={636}
            height={802}
          />
          <Image
            src="/img/posts/info-capstone/bus-ad.jpg"
            alt="Bus ad prototype."
            width={1825}
            height={1266}
          />
          <Image
            src="/img/posts/info-capstone/train-mockup.jpg"
            alt="Train ad mockup."
            width={599}
            height={635}
          />
        </section>
        <TwoColSection title="Problem Statement">
          <p>
            Femme-presenting people remain underrepresented in male-dominated
            STEM fields, especially computing. Stereotypes and societal biases
            often obscure their challenges and contributions, underscoring the
            need for initiatives that drive awareness, empathy, and inclusivity.
          </p>
          <p>
            How can we use intentionally curated Flickr images, research and
            data analysis insights, and marketing materials to challenge the
            status quo?
          </p>
        </TwoColSection>
        <TwoColSection title="Key Research Insights">
          <h4>Background</h4>
          <p>
            Computing was once considered a feminine endeavor due to its routine
            and mechanical nature (Ensmenger, 2015). The progression of STEM
            spaces has been much like the previous industrial revolution, where
            machinery was developed through the lens of "modern manliness"
            (Oldenziel, 1999, p.19). Men began to push women out of the picture
            and self identifying with pop culture images of the genius
            programmer, effectively colonizing the technology space.
          </p>
          <p>
            The culture of the industry, stemming from male-dominated college
            computer labs, makes the space unfriendly for non-male-identifying
            people to navigate. "Tech" is glorified as "masculine" through image
            (Ensmenger 2015). Social media trends perpetuate these stereotypes,
            undermining the self-esteem of those who do not fit the image of a
            technologist (Rutledge, 2023).
          </p>
          <p>
            Therefore, we see a trend of low engagement of women in STEM and
            computing — women only make up 24% of the STEM workforce (Piloto,
            2023).
          </p>
          <h4>Study Findings</h4>
          <p>
            <em>Data analysis:</em> Using the Flickr API, we generated a random
            photo sample of 300 images with tags like engineer, hackathon,
            computer science, and so on. We then hand-coded the gender of
            individuals present in the images and discovered that only 38% of
            identifiable individuals were femme-presenting.
          </p>
          <p>
            <em>Graphic elicitation:</em> We asked 8 study participants to draw
            and use AI image generation to create images of 5 STEM professions.
            Of all the images, only 29% were femme-presenting.
          </p>
          <p>
            <em>User interviews:</em> We conducted interviews with 8
            participants and found that
          </p>
          <ol>
            <li>
              They perceived STEM work culture as homogenous, which makes it
              hard for people who did not fit in to enter the space.
            </li>
            <li>
              People tended to respect male leadership and authority more, while
              women were not taken as seriously.
            </li>
            <li>
              Participants said representation would make them feel more
              confident in the space due to knowing there were people like them
              who also made it — it's inspirational to see that people who do
              not fit into the stereotype can also succeed.
            </li>
          </ol>
        </TwoColSection>
        <TwoColSection title="References">
          <ul>
            <li>
              Duguid, M. M., & Thomas-Hunt, M. C. (2015). Condoning
              stereotyping? How awareness of stereotyping prevalence impacts
              expression of stereotypes. Journal of Applied Psychology, 100(2),
              343–359. https://doi.org/10.1037/a0037908
            </li>
            <li>
              Ensmenger, Nathan. (2015). "Beards, Sandals, and Other Signs of
              Rugged Individualism": Masculine Culture within the Computing
              Professions. Osiris, 30(1). https://doi.org/10.1086/682955
            </li>
            <li>
              National Center for Women & Information Technology. (2023). Women
              and Information Technology by the Numbers.
              https://wpassets.ncwit.org/wp-content/uploads/2021/05/13192101/ncwit_btn_03252021_fullsize.pdf
            </li>
            <li>
              Oldenziel, Ruth. (1999). Making Technology Masculine: Men, Women,
              and Modern Machines in America, 1870–1945.
            </li>
            <li>
              Piloto, C. (2023, March 13). The Gender Gap in STEM | MIT
              Professional Education. MIT Professional Education.
              https://professionalprograms.mit.edu/blog/leadership/the-gender-gap-in-stem/
            </li>
            <li>
              Singh, V. K., Chayko, M., Inamdar, R., & Floegel, D. (2020).
              Female librarians and male computer programmers? Gender bias in
              occupational images on digital media platforms. Journal of the
              Association for Information Science and Technology, 71(11),
              1281–1294. https://doi.org/10.1002/asi.4335
            </li>
            <li>
              UNESCO. (2024, April 25). New UNESCO report warns social media
              affects girls' well-being, learning and career choices. UNESCO.
              https://www.unesco.org/gem-report/en/articles/new-unesco-report-warns-social-media-affects-girls-well-being-learning-and-career-choices
            </li>
            <li>
              US Census Bureau. (2024, September 10). Income in the United
              States: 2023. Census.gov.
              https://www.census.gov/library/publications/2024/demo/p60-282.html
            </li>
          </ul>
        </TwoColSection>
      </Container>
    </main>
  );
}
