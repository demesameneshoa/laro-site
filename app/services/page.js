import { Band, Spacer } from '../../components/ui';
import { PageHero, SectionHead, Stack, Process, Audience, Cta } from '../../components/blocks';
import { services, audiences, defaultCta } from '../../content/site';

export const metadata = { title: 'Services', description: 'Corporate 3D flags, Adey Abeba carpets, corporate and eco gift boxes, printing, branding and events in Addis Ababa.' };

export default function Services() {
  const p = services;
  return (
    <>
      <PageHero {...p.hero} crumb="Services" />
      <Band bottom={60}>
        <SectionHead {...p.intro} />
        <Spacer h={50} />
        <Stack cards={p.cards} />
      </Band>
      <Band tone="paper" cut="paper">
        <SectionHead tone="light" {...p.process} />
        <Spacer h={50} />
        <Process steps={p.process.steps} />
      </Band>
      <Band cut="dark">
        <SectionHead kicker={['Clients', 'Who we serve']} title={'Built for institutions\nthat can’t afford a miss.'} layout="stacked" size="small" />
        <Spacer h={40} />
        <Audience items={audiences} tone="dark" />
      </Band>
      <Band top={20}><Cta {...defaultCta} /></Band>
    </>
  );
}
