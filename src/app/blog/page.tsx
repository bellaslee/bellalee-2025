import { HeroPost } from '@/app/_components/hero-post';
import { MoreStories } from '@/app/_components/more-stories';
import { getAllPosts } from '@/lib/api';
import Navigation from '../_components/navigation';

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Navigation />
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
        words={heroPost.words}
      />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </main>
  );
}
