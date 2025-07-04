import cn from 'classnames';
import Links from '@/app/_components/links';
import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('w-full', {
        'transition-shadow duration-200': slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Links href={`/blog/${slug}`} aria-label={title}>
          {image}
        </Links>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
