import Links from '@/app/_components/links';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import ReadTime from './read-time';
import Separator from './separator';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  words: number;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  words,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3>
        <Links href={`/blog/${slug}`}>
          {title}
        </Links>
      </h3>
      <div className="text-lg mb-4 flex items-center">
        <DateFormatter dateString={date} />
        <Separator />
        <ReadTime wordCount={words} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
