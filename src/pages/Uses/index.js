import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'components/ProjectLayout';
import Link from 'components/Link';
import usesBackground from 'assets/uses-background.mp4';
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import prerender from 'utils/prerender';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import './index.css';

const Uses = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>Uses | Hamish Williams</title>
        <meta
          name="description"
          content="A list of hardware and software I use to do my thing"
        />
      </Helmet>
      <ProjectContainer className="uses">
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
          entered={!prerender}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days. Made the switch from Sketch in 2020 and haven't
                    looked back. I've also created <Link href="#">a few plugins</Link>{' '}
                    that you can install.
                  </li>
                  <li>
                    Any motion graphics I create are created in Adobe After Effects. So
                    far I haven't found a non-Adobe product that's as good. If anyone has
                    suggestions please <Link href="/contact">message me</Link>.
                  </li>
                  <li>
                    For any 3D models I use{' '}
                    <Link href="https://www.blender.org/">Blender</Link>. Since 2.8 it's
                    become way simpler to use and in a lot of ways better than expensive
                    paid tools like 3DS Max or Maya.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection first className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my text editor, with the Atom One Dark theme and Operator Mono as
                    my typeface of choice.
                  </li>
                  <li>
                    Firefox is my main browser for both development and general use.
                  </li>
                  <li>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. The component-centric mental model is
                    the first thing that truly made sense to me as a designer.
                  </li>
                  <li>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org/">three.js</Link>. It has a bit of a
                    learning curve but you can do some really powerful stuff with it.
                  </li>
                  <li>
                    For CSS I've used a myriad pre-processors and css-in-js solutions like
                    styled-components, but these days I'm using vanilla CSS with{' '}
                    <Link href="https://postcss.org/">PostCSS</Link> to get upcoming CSS
                    features today.
                  </li>
                  <li>
                    For Javascript animations I use{' '}
                    <Link href="https://popmotion.io/api/">Popmotion Pure 8</Link>, it's a
                    great way to add spring animations to three.js. All other animations
                    are CSS with{' '}
                    <Link href="https://reactcommunity.org/react-transition-group/">
                      React Transition Group
                    </Link>{' '}
                    for enter/exit transitions.
                  </li>
                  <li>
                    For building and testing UI components in isolation I use{' '}
                    <Link href="#">Storybook</Link>. Check out the{' '}
                    <Link href="#">storybook for this website</Link>.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection className="uses__section">
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <ProjectSectionText>
                <ul>
                  <li>My laptop is a trusty 2015 Macbook Pro.</li>
                  <li>
                    My Windows PC is a custom built GTX 780ti, i7 4770k, ASRock Z97
                    Extreme4 build with a 1Tb NVME SSD and a Cooler Master 850w power
                    supply.
                  </li>
                  <li>I use a Logitech MX keys wireless keyboard.</li>
                  <li>My mouse is a Logitech G403.</li>
                  <li>My monitor is a 1440p IPS 144hz LG 27GL850.</li>
                  <li>I use a Blue Yeti microphone for audio recording.</li>
                  <li>
                    I use Audio Technica ATH-M50x headphones at my workstation and Apple
                    Airpods while AFK.
                  </li>
                </ul>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default Uses;
