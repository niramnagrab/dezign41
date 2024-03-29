import classNames from 'classnames';
import { useId } from 'hooks';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  const id = useId();
  const clipId = `monogram-clip-${id}`;

  return (
    <svg
      aria-hidden
      className={classNames('monogram', className)}
      width="70"
      height="45"
      viewBox="0 0 512.296 512.296"
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="m325.757 501.179c90.527-29.941 140.391-116.005 140.391-240.502 0-133.506-49.863-223.217-140.42-250.771-50.618-15.205-119.389-7.819-279.58-9.814v512c165.389-2.29 226.628 6.38 279.609-10.913zm-155.683-99.961v-289.93c10.534.26 77.335-1.262 101.045 4.219 48.252 10.811 67.925 52.343 67.925 140.907 0 74.443-10.342 127.68-60.776 140.688-23.448 6.14-76.602 3.42-108.194 4.116z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className="monogram__highlight" width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
}

export default Monogram;
