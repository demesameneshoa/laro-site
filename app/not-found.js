import { PageHero } from '../components/blocks';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <PageHero img="/img/carpets.jpg" pos="40% 60%" height={86} kicker={['404', 'Page not found']} title={'This carpet\nleads nowhere.'} accent
      text="The page you were looking for has moved or no longer exists." buttons={[{ text: 'Back to the home page', href: '/' }]} />
  );
}
