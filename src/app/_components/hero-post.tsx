import CoverImage from '@/app/_components/cover-image';
import Link from 'next/link';
import DateFormatter from './date-formatter';
import Separator from './separator';
import ReadTime from './read-time';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  words: number;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  words,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="big">
            <Link href={`/blog/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg flex items-center">
            <DateFormatter dateString={date} />
            <Separator />
            <ReadTime wordCount={words} />
          </div>
        </div>
      </div>
    </section>
  );
}
