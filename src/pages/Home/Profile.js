import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import Link from 'components/Link';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import Image from 'components/Image';
import Section from 'components/Section';
import ProfileImg from 'assets/profile2.jpg';
import ProfileImgLarge from 'assets/profile2.jpg';
import ProfileImgPlaceholder from 'assets/profile-placeholder.jpg';
import { reflow } from 'utils/transition';
import { media } from 'utils/style';
import { ReactComponent as KatakanaProfile } from 'assets/katakana-profile.svg';
import Heading from 'components/Heading';
import Text from 'components/Text';
import './Profile.css';

const ProfileText = ({ status, titleId }) => (
  <Fragment>
    <Heading
      className={classNames('profile__title', `profile__title--${status}`)}
      level={3}
      id={titleId}
    >
      <DecoderText
        text="Your digital partner
"
        start={status !== 'exited'}
        delay={500}
      />
    </Heading>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      Specialising in web design and development services, we work with exceptional
      companies around the world to help them bring to life their digital ideas. We always
      start by learning more about the customer, followed by the analysis, research,
      planning, wire framing and content creation of your product. Once completed, we then
      more on to the web design and SEO driven content. In the digital era, it is crucial
      to provide exceptional experience to your users and we are here to help you analyse
      the competition, create content that matters, communicate effectively and convert
      visitors.
    </Text>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      <b>
        Client-focused and customer-centric, we create web solutions that deliver tangible
        business results. Want to go digital? Let us be your digital partner!
      </b>
    </Text>
  </Fragment>
);

const Profile = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className="profile"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="profile__content">
            <div className="profile__column">
              <ProfileText status={status} titleId={titleId} />
              <Button
                secondary
                className={classNames('profile__button', `profile__button--${status}`)}
                icon="send"
                target="_blank"
                onClick={e =>
                  (window.location = 'https://calendly.com/web-agency-shanghai/15min')
                }
              >
                Schedule a call
              </Button>
            </div>
            <div className="profile__column">
              <div className="profile__tag" aria-hidden>
                {/* <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={status !== 'entered'}
                  collapseDelay={1000}
                /> */}
                <div
                  className={classNames(
                    'profile__tag-text',
                    `profile__tag-text--${status}`
                  )}
                >
                  {/* About Us */}
                </div>
              </div>
              <div className="profile__image-wrapper">
                <Image
                  reveal
                  delay={100}
                  placeholder={ProfileImgPlaceholder}
                  srcSet={`${ProfileImg} 480w, ${ProfileImgLarge} 960w`}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Company office photo"
                />
                {/* <KatakanaProfile
                  className={classNames('profile__svg', `profile__svg--${status}`)}
                /> */}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Profile;
