import './WordCloud.css';

import React from 'react';
import ReactWordcloud from 'react-wordcloud';

interface WordCloudProps {
  words: Array<{ text: string; value: number }>;
}

const WordCloud: React.FC<WordCloudProps> = ({ words }) => {
  const options = {
    rotations: 2,
    rotationAngles: [-90, 0] as [number, number],
    fontSizes: [12, 40] as [number, number],
    padding: 5,
    deterministic: true,
    colors: [
      '#1f77b4',
      '#ff7f0e',
      '#2ca02c',
      '#d62728',
      '#9467bd',
      '#8c564b',
      '#e377c2',
      '#7f7f7f',
      '#bcbd22',
      '#17becf',
    ],
  };

  return (
    <div className="word-cloud-container">
      <ReactWordcloud words={words} options={options} size={[300, 200]} />
    </div>
  );
};

export default WordCloud;
