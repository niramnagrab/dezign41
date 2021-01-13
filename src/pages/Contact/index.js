import { useState, useCallback, useRef } from 'react';
import classNames from 'classnames';
import { TransitionGroup, Transition } from 'react-transition-group';
import { Helmet } from 'react-helmet';
import Input from 'components/Input';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import { Button } from 'components/Button';
import Section from 'components/Section';
import Icon from 'components/Icon';
import { useScrollRestore, useFormInput, useRouteTransition } from 'hooks';
import { reflow, isVisible } from 'utils/transition';
import prerender from 'utils/prerender';
import { msToNum, numToPx, numToMs } from 'utils/style';
import { tokens } from 'components/ThemeProvider/theme';
import Heading from 'components/Heading';
import Text from 'components/Text';
import './index.css';

const initDelay = tokens.base.durationS;

function getStatusError({
  status,
  errorMessage,
  fallback = 'There was a problem with your request',
}) {
  if (status === 200) return false;

  const statuses = {
    500: 'There was a problem with the server, try again later',
    404: 'There was a problem connecting to the server. Make sure you are connected to the internet',
  };

  if (errorMessage) {
    return errorMessage;
  }

  return statuses[status] || fallback;
}

function getDelay(delayMs, initDelayMs = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return { '--delay': numToMs((msToNum(initDelayMs) + numDelay).toFixed(0)) };
}

const Contact = () => {
  const { status } = useRouteTransition();
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [statusError, setStatusError] = useState('');
  useScrollRestore();

  const onSubmit = useCallback(
    async event => {
      event.preventDefault();
      setStatusError('');

      if (sending) return;

      try {
        setSending(true);

        const response = await fetch('https://api.hamishw.com/message', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.value,
            message: message.value,
          }),
        });

        const responseMessage = await response.json();

        const statusError = getStatusError({
          status: response?.status,
          errorMessage: responseMessage?.error,
          fallback: 'There was a problem sending your message',
        });

        if (statusError) throw new Error(statusError);

        setComplete(true);
        setSending(false);
      } catch (error) {
        setSending(false);
        setStatusError(error.message);
      }
    },
    [email.value, message.value, sending]
  );

  return (
    <Section className={classNames('contact', `contact--${status}`)}>
      <Helmet>
        <title>Contact | Dezign41</title>
        <meta
          name="description"
          content="Send us a message if you’re interested in discussing a project or if you just want to say hi"
        />
      </Helmet>
      <TransitionGroup component={null}>
        {!complete && (
          <Transition appear mountOnEnter unmountOnExit timeout={1600} onEnter={reflow}>
            {status => (
              <form className="contact__form" method="post" onSubmit={onSubmit}>
                <Heading
                  className={classNames('contact__title', `contact__title--${status}`, {
                    'contact__title--hidden': prerender,
                  })}
                  level={3}
                  as="h1"
                  style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
                >
                  <DecoderText
                    text="Get in touch with us"
                    start={status !== 'exited' && !prerender}
                    delay={300}
                  />
                </Heading>
                <div className="contact-text">
                  For further queries or collaboration, please email us at{' '}
                  <a href="mailto: info@agency.com">info@agency.com</a>. You can also give
                  us a call at{' '}
                  <a href="callto: +4407471370804">+44 - 0747 - 137 - 0804</a> or{' '}
                  <a href="callto: +8613062719095">+86 - 130 - 6271 - 9095</a>.
                </div>
                <div className="address">
                  <div>
                    <h2>China Office</h2>
                    <p>
                      55 Hengshan Lu, <br />
                      200333, Shanghai, <br />
                      130 6271 9095
                    </p>
                  </div>
                  <div>
                    <h2>UK Office</h2>
                    <p>
                      51 Earls' Court Square, <br />
                      SW5 9DG, London <br />
                      0747 - 137 - 0804
                    </p>
                  </div>
                </div>
              </form>
            )}
          </Transition>
        )}
        {complete && (
          <Transition appear mountOnEnter unmountOnExit onEnter={reflow} timeout={0}>
            {status => (
              <div className="contact__complete" aria-live="polite">
                <Heading
                  level={3}
                  as="h3"
                  className={classNames(
                    'contact__complete-title',
                    `contact__complete-title--${status}`
                  )}
                >
                  Message Sent
                </Heading>
                <Text
                  size="l"
                  className={classNames(
                    'contact__complete-text',
                    `contact__complete-text--${status}`
                  )}
                  style={getDelay(tokens.base.durationXS)}
                >
                  I’ll get back to you within a couple days, sit tight
                </Text>
                <Button
                  secondary
                  iconHoverShift
                  className={classNames(
                    'contact__complete-button',
                    `contact__complete-button--${status}`
                  )}
                  style={getDelay(tokens.base.durationM)}
                  href="/"
                  icon="chevronRight"
                >
                  Back to homepage
                </Button>
              </div>
            )}
          </Transition>
        )}
      </TransitionGroup>
    </Section>
  );
};

export default Contact;
