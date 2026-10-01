import { Band, Spacer } from '../../components/ui';
import { PageHero, SectionHead, Portfolio as Grid, Logos, Cta } from '../../components/blocks';
import { portfolio, projects, clients } from '../../content/site';

export const metadata = { title: 'Portfolio', description: 'Flags, carpets, gift boxes, print and event branding produced and installed by LARO Advertising PLC.' };

export default function PortfolioPage() {
  const p = portfolio;
  return (
    <>
      <PageHero {...p.hero} crumb="Portfolio" />
      <Band>
        <SectionHead {...p.intro} size="small" />
        <Spacer h={30} />
        <Grid items={projects} />
      </Band>
      <Band tone="paper" cut="paper" bottom={90}>
        <SectionHead tone="light" size="small" kicker={['Clients', 'Partner brands']} title={'Trusted across government,\ndiplomacy and finance.'} />
        <Spacer h={40} />
        <Logos items={clients} />
      </Band>
      <Band top={90}><Cta {...p.cta} text="Send the brief, quantities and venue. We come back with a costed proposal, samples where needed and an installation plan." /></Band>
    </>
  );
}
