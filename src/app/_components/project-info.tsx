import Image from 'next/image';

type Props = {
  title: string;
  client: string;
  type: string;
  startYear: number;
  endYear?: number;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
};

export default function ProjectInfo({
  title,
  client,
  type,
  startYear,
  endYear,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
}: Props) {
  return (
    <section className="project-info">
      <h2 className="title md:w-3/4">{title}</h2>
      <div className="flex flex-col md:flex-row justify-between md:w-3/4">
        <div>
          <p className="text-xl">Client</p>
          <p>{client}</p>
        </div>
        <div>
          <p className="text-xl">Type</p>
          <p>{type}</p>
        </div>
        <div>
          <p className="text-xl">Year</p>
          <p>
            {startYear}
            {endYear ? ` – ${endYear}` : ''}
          </p>
        </div>
      </div>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        className="w-full"
      />
    </section>
  );
}
