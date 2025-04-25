import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import { PostTitle } from '@/app/_components/post-title';
import { type Author } from '@/interfaces/author';
import ReadTime from './read-time';
import Separator from './separator';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  words: number;
};

export function PostHeader({ title, coverImage, date, words }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg flex items-center">
          <DateFormatter dateString={date} />
          <Separator />
          <ReadTime wordCount={words} />
        </div>
      </div>
    </>
  );
}
