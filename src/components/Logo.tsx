import React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
};

export default function Logo({ className = '', style, imageStyle }: Props) {
  return (
    <span className={className} aria-hidden={false} role="img" title="Abc Readymix Solutions Logo" style={{ display: 'flex', ...style }}>
      <img
        src="/images/logo.png"
        alt="Abc Readymix Solutions Logo"
        className="logo-img"
        style={{
          borderRadius: '8px',
          ...imageStyle
        }}
      />
    </span>
  );
}
