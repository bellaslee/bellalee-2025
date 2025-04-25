type Props = {
  wordCount: number;
};

export default function ReadTime({ wordCount }: Props) {
  function estimateReadTime(wordCount: number) {
    const assumedSpeed = 265;
    const readingTime = Math.ceil(wordCount / assumedSpeed);
    return readingTime;
  }

  return <div>{estimateReadTime(wordCount)} min read</div>;
}
