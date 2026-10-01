import { Band, Spacer } from '../../components/ui';
import { PageHero, SectionHead, Split, Stats, Why, Team, Audience, Cta } from '../../components/blocks';
import { about, reasons, team, audiences, defaultCta } from '../../content/site';

export const metadata = { title: 'About', description: 'LARO Advertising PLC, founded in Addis Ababa in 2012: corporate branding, printing, promotional products and events.' };

export default function About() {
  const p = about;
  return (
    <>
      <PageHero {...p.hero} crumb="About" />
      <Band tone="paper"><Split {...p.story} tone="light" /></Band>
      <Band cut="dark" top={90} bottom={40}><Stats items={p.stats} /></Band>
      <Band top={70}>
        <SectionHead kicker={['Why LARO', 'Our commitment']} title={'Six reasons procurement\nteams come back.'} text="Transforming ideas into strong brands, with products and service that leave a lasting impression and long-term value." />
        <Spacer h={40} />
        <Why items={reasons} />
      </Band>
      <Band top={40}>
        <SectionHead kicker={['Team', 'The people on your project']} title="One team from artwork to install." size="small" />
        <Spacer h={40} />
        <Team items={team} />
      </Band>
      <Band tone="paper" cut="paper">
        <SectionHead tone="light" kicker={['Clients', 'Who we serve']} title={'Built for institutions\nthat can’t afford a miss.'} text="Procurement teams choose LARO when the date is fixed, the protocol is strict and the brand has to be exact." />
        <Spacer h={40} />
        <Audience items={audiences} />
      </Band>
      <Band top={90}><Cta {...defaultCta} /></Band>
    </>
  );
}
