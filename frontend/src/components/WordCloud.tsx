import './WordCloud.css';

import { ArchimedeanRandomRandomizer, Cloud, CloudPoint, WordCollider } from '@alesmenzel/cloud';
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { scaleLinear } from 'd3-scale';

interface WordCloudProps {
  words: Array<{ text: string; value: number }>;
}

type Points = { index: number; point: CloudPoint; item: { text: string; count: number } };

const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 60;
const FONT = 'Inter';

const WordCloud: React.FC<WordCloudProps> = ({ words }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [points, setPoints] = useState<Points[]>([]);
  const [size, setSize] = useState({
    width: 300,
    height: 200,
  });

  const [cloud] = useState(
    () =>
      new Cloud<{ text: string; count: number }>({
        width: size.width,
        height: size.height,
        randomizer: new ArchimedeanRandomRandomizer({ width: size.width, height: size.height }),
        collider: new WordCollider({
          width: size.width,
          height: size.height,
          font: FONT,
          textAlign: 'center',
          textBaseline: 'middle',
          gap: 2,
        }),
        attempts: 200,
      }),
  );

  const fontScale = useMemo(() => {
    const max = words.reduce((acc, word) => Math.max(acc, word.value), 0);
    return scaleLinear().domain([1, max]).range([MIN_FONT_SIZE, MAX_FONT_SIZE]).clamp(true);
  }, [words]);

  const colorScale = useMemo(() => {
    return scaleLinear<string>()
      .domain([MIN_FONT_SIZE, MAX_FONT_SIZE])
      .range(['#64748b', '#0f172a'])
      .clamp(true);
  }, []);

  const { width, height } = size;

  useLayoutEffect(() => {
    cloud.update({ width, height });
    setPoints([]);

    let i = 0;
    let animationHandle: number;

    function calculate() {
      const word = words[i];
      if (!word) return;

      const count = fontScale(word.value);
      const point = cloud.next({ text: word.text, count });

      if (point) {
        setPoints(points => [...points, { index: i, point, item: { text: word.text, count } }]);
      }
      i += 1;
      animationHandle = requestAnimationFrame(calculate);
    }

    animationHandle = requestAnimationFrame(calculate);

    return () => {
      cancelAnimationFrame(animationHandle);
    };
  }, [cloud, width, height, words, fontScale]);

  useEffect(() => {
    if (!ref.current) return undefined;

    const { clientWidth, clientHeight } = ref.current;
    setSize({ width: clientWidth, height: clientHeight });

    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          const contentBoxSize = Array.isArray(entry.contentBoxSize)
            ? entry.contentBoxSize[0]
            : entry.contentBoxSize;
          setSize({ width: contentBoxSize.inlineSize, height: contentBoxSize.blockSize });
        }
      }
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="word-cloud-container">
      <svg width="100%" height="100%">
        {points.map(({ point, item, index }) => (
          <g transform={`translate(${point.x} ${point.y})`} key={index}>
            <text
              x={0}
              y={0}
              textAnchor="middle"
              alignmentBaseline="middle"
              fill={colorScale(item.count)}
              className="word"
              style={{
                font: `${item.count}px ${FONT}`,
              }}
            >
              {item.text}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default WordCloud;
