// AnimatedLetters.tsx
import React from 'react';
import { concatenateClassNames } from '../Utility/RenderingConfigurationUtils';

interface AnimatedLettersProps {
  text: string;
  characterAnimationConfiguration: {
    fields: {
      Animation: string;
      AnimationIteration: string;
      AnimationSpeed: string;
      AnimationDelay: { value: number };
    };
  };
  letterStyle?: React.CSSProperties;
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({
  text,
  characterAnimationConfiguration,
}) => {
  const { fields: configFields } = characterAnimationConfiguration;
  const characterClassNames = concatenateClassNames(
    configFields.Animation,
    configFields.AnimationIteration,
    configFields.AnimationSpeed
  );

  const animationDelay = configFields.AnimationDelay.value;

  return (
    <>
      {text.split('').map((letter, index) => (
        <span className="animated-letters-wrapper" key={index}>
          <span
            className={`animated-letters-item letter d-inline-block ${characterClassNames}`}
            style={{
              whiteSpace: 'pre',
              animationDelay: `${(index + 1) * animationDelay}ms`,
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </>
  );
};

export default AnimatedLetters;
