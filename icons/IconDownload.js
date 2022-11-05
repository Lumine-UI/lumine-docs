import {memo} from 'react';

export const IconDownload = memo(
  function IconDownload({className}) {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
        <path
          d="M20.5 22H3.5C3.10218 22 2.72064 21.842 2.43934 21.5607C2.15804 21.2794 2 20.8978 2 20.5V15.5C2 15.3674 2.05268 15.2402 2.14645 15.1464C2.24021 15.0527 2.36739 15 2.5 15H3.5C3.63261 15 3.75979 15.0527 3.85355 15.1464C3.94732 15.2402 4 15.3674 4 15.5V20H20V15.5C20 15.3674 20.0527 15.2402 20.1464 15.1464C20.2402 15.0527 20.3674 15 20.5 15H21.5C21.6326 15 21.7598 15.0527 21.8536 15.1464C21.9473 15.2402 22 15.3674 22 15.5V20.5C22 20.8978 21.842 21.2794 21.5607 21.5607C21.2794 21.842 20.8978 22 20.5 22Z"
          fill="currentColor"
        />
        <path
          d="M10.9999 2.5V13.79L8.81994 11.61C8.72479 11.5178 8.59747 11.4662 8.46494 11.4662C8.33241 11.4662 8.20509 11.5178 8.10994 11.61L7.39994 12.32C7.30769 12.4151 7.2561 12.5425 7.2561 12.675C7.2561 12.8075 7.30769 12.9348 7.39994 13.03L10.9399 16.56C11.0785 16.7003 11.2436 16.8117 11.4255 16.8877C11.6075 16.9637 11.8027 17.0029 11.9999 17.0029C12.1971 17.0029 12.3924 16.9637 12.5743 16.8877C12.7563 16.8117 12.9214 16.7003 13.0599 16.56L16.5999 13C16.6922 12.9048 16.7438 12.7775 16.7438 12.645C16.7438 12.5125 16.6922 12.3851 16.5999 12.29L15.8899 11.58C15.7948 11.4878 15.6675 11.4362 15.5349 11.4362C15.4024 11.4362 15.2751 11.4878 15.1799 11.58L12.9999 13.79V2.5C12.9999 2.36739 12.9473 2.24021 12.8535 2.14645C12.7597 2.05268 12.6325 2 12.4999 2H11.4999C11.3673 2 11.2402 2.05268 11.1464 2.14645C11.0526 2.24021 10.9999 2.36739 10.9999 2.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }
);
