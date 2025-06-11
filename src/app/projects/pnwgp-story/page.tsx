import Navigation from '@/app/_components/navigation';
import Container from '@/app/_components/container';
import Image from 'next/image';
import styles from '@/app/_styles/project-styles.module.css';
import ProjectInfo from '@/app/_components/project-info';
import TwoColSection from '@/app/_components/two-col-section';
import Links from '@/app/_components/links';

export default function PNWGPStory() {
  return (
    <main className={styles['project']}>
      <Navigation />
      <Container>
        <ProjectInfo
          title="A powerful network links Washington classrooms to the stars"
          client="UW Information Technology"
          type="Writing"
          startYear={2024}
          endYear={2025}
          imgSrc="/img/posts/pnwgp-story/thumbnail.jpeg"
          imgAlt="Observatory with stars in background."
          imgWidth={1080}
          imgHeight={1080}
        />
        <TwoColSection title="Overview">
          <p>
            During my internship at University of Washington Information
            Technology, a casual 30-minute conversation about Wi-Fi evolved into
            multiple interviews, a video shoot, and, finally, a published
            feature. This project has been an incredible capstone to my
            internship. Huge thanks to Ignacio for being an amazing mentor and
            teaching me the ins and outs of science writing, Sam and Erin for
            helping me coordinate and capture interviews, as well as the Brand
            Strategy team at UW-IT for all the support during my time here.
          </p>
          <p>
            <Links href="https://it.uw.edu/a-powerful-network-links-washington-classrooms-to-the-stars/">
              View live article
            </Links>
          </p>
        </TwoColSection>
        <TwoColSection title="Article">
          <p>
            On a clear night in the Northwest, you can easily spot Orion’s belt
            or the Big Dipper peeking over the horizon — a seemingly unchanged
            sky that untold generations have observed for millennia.
          </p>
          <p>
            In reality, stars are born, die and explode into supernovae right
            before our eyes, practically all the time. We just can’t see these
            changes happening in our daily lives.
          </p>
          <p>
            This is where the new NSF-DOE Vera C. Rubin Observatory atop the
            Andes Mountains in northern Chile comes in. With the world’s largest
            camera attached to the giant 27.5-foot in diameter Simonyi Survey
            Telescope, it will let University of Washington astronomers and
            their global partners observe change in real time.
          </p>

          <p>
            UW astronomy professor Andrew Connolly hopes to estimate the
            properties of galaxies based on their colors using images captured
            by Rubin Observatory. Rubin took its first commissioning images on
            April 15, 2025. As the focus and alignment of the telescope was
            adjusted, the images resolved into the thousands of stars and
            galaxies that will be just a tiny slice of the billions the full
            survey will detect.
          </p>
          <p>
            Towards the end of this year, the observatory will complete its
            commissioning and begin to photograph the night sky — 1,000 images
            in all per night over 10 years with a 3,200-megapixel camera. The
            project will create about 20 terabytes of digital information each
            night, so much data that it will require powerful computing
            infrastructure to make sense of it all.
          </p>
          <p>
            This enormous amount of data would typically take ages to upload to
            the Internet. However, one of the tools that makes it possible for
            researchers to efficiently share all this information globally is
            high-bandwidth, high-capacity networks. And the heart of one of
            those networks is right here at the University of Washington:
            Pacific Northwest Gigapop (PNWGP).
          </p>
          <h4>PNWGP’s Network Capabilities</h4>
          <p>
            PNWGP is a nonprofit corporation that serves research and education
            organizations throughout the Pacific Rim. Operated by University of
            Washington Information Technology (UW-IT), it provides
            cost-effective, robust, reliable, high-bandwidth, and high-capacity
            networking to higher education and researchers across the globe,
            including UW astronomers working at the Rubin observatory.
          </p>
          <p>
            UW-IT oversees this super-fast network, which can be up to 200 times
            faster than the average home Internet and capable of downloading a
            full HD movie in mere seconds.
          </p>
          <p>
            The power of this network not only lets people from across the world
            access astronomical data, but it also helps accelerate research
            progress in all areas of study.
          </p>
          <p>
            Data is the foundation of modern research, no matter if you’re
            working with the big picture to survey the cosmos, or with the
            minute details to decipher the genome. That’s why researchers rely
            on PNWGP’s powerful Internet connectivity to access, share and
            publish their information.
          </p>
          <p>
            “We get the network out of the way so the researcher can focus on
            what they’re trying to do and get their research done,” says David
            Sinn, a network architect with UW-IT.
          </p>
          <p>
            Since the University handles many research opportunities and
            projects, it is also able to focus on external initiatives to reach
            the broader community, he said.
          </p>
          <p>
            So, how exactly does this PNWGP work? In a nutshell, it connects
            physical backbone nodes in Seattle, Portland, Spokane and Chicago
            using fiber connections to enable data to flow freely.
          </p>

          <h4>From K-20 to the top of the Andes: local and global impact</h4>
          <p>
            PNWGP’s efforts aren’t just confined to the Pacific Northwest. On a
            global scale, it works on collaborative projects, like the Western
            Regional Network and Pacific Wave Internet Exchange. These combine
            the power of each partner institution’s networks to create a larger
            range of connectivity. Their efforts allow researchers across the
            globe to connect with colleagues, data, and even scientific
            instruments, like the Large Hadron Collider, radio telescopes, and
            soon, the universe in photos from the Rubin observatory.
          </p>
          <p>
            Last year, PNWGP received the 2024 Innovations in Networking Award
            for Network Partner from the Corporation for Education Network
            Initiatives in California (CENIC), which lauded UW-IT and the PNWGP
            group for its part in expanding the global research and education
            network ecosystem.
          </p>
          <p>
            On a local scale, PNWGP provides connectivity services to the
            Washington K-20 Education Network, a wide area network that provides
            internet access to schools and libraries across Washington.
          </p>
          <p>
            The K-20 Network has 392 directly connected members and serves more
            than 1.5 million students, faculty, staff and researchers across the
            state.
          </p>
          <p>
            Jack Haden-Enneking, the K-20 Program Manager at UW-IT, said PNWGP
            is a critical partner to K-20 in providing reliable internet
            connectivity to remote and underserved areas.
          </p>
          <p>
            “One of the main benefits of K-20 is ensuring high-speed
            connectivity to every member, regardless of their size or location,”
            he says. “We’ve built up high-speed connectivity into corners of the
            state that just didn’t have it before.”
          </p>
          <p>
            That means a budding young astronomer in a small, rural town in
            Eastern Washington now has the same access to information as a
            student in a larger school district.
          </p>
          <p>
            Widescale connectivity and fast networks allow access to large
            datasets through the cloud, like the upcoming photos from the Rubin
            Observatory, something that would not have been possible just a
            short few years ago.
          </p>
          <p>
            With a click of the mouse, curious students can quickly uncover
            answers to the universe’s biggest questions: Why does it expand? Why
            does it accelerate? How did our solar system form?
          </p>
          <p>
            Once they have their eyes on an astronomical object or phenomenon,
            they might want to get more information about it. Supplementary data
            is scattered across various sources, including NASA’s databases,
            other cloud databases and telescope archives. Networks like PNWGP’s
            connect these data sources, making them accessible almost right
            away.
          </p>
          <h4>Up next: Rubin Observatory’s heavy data sets</h4>
          <p>
            Research is an iterative process. So, in addition to connectivity,
            large amounts of data and shared knowledge also allow for rapid
            problem-solving.
          </p>
          <p>
            “The quicker you can get an answer, the quicker you can think about
            what it means,” and the quicker we can make scientific
            breakthroughs,” said Andy Connolly, an astronomy professor at the
            University of Washington.
          </p>
          <p>
            Connolly’s work is deeply dependent on data, and he will be relying
            heavily on high-speed networks to make sense of what Rubin will be
            imaging over the next 10 years.
          </p>
          <p>
            His work focuses on large cosmology surveys and how they “paint” the
            evolution of galaxies. And this painting by Rubin can help him
            estimate the properties of galaxies based on their colors, for
            example.
          </p>
          <p>
            Most recently, Connolly has been working on using algorithms to
            improve the sharpness of the images from the Rubin telescope in
            preparation for the actual photographing of the sky. But Connolly is
            also an educator who is deeply vested in taking knowledge and making
            it available across the globe. One of his passions is to take the
            technology that private companies use to search the internet into a
            useful tool for research and education.
          </p>
          <p>And a network like PNWGP may just lie at the center of it all.</p>
          <p>
            “The secret sauce of UW is the ability to collaborate and connect,”
            Connolly said. “It’s that connective web that allows research to be
            successful.”
          </p>
        </TwoColSection>
      </Container>
    </main>
  );
}
