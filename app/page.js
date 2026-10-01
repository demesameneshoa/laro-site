import Showroom from '../components/Showroom';
import Loader from '../components/Loader';
import { Band, Spacer } from '../components/ui';
import { SectionHead, Callout, EcoList, Portfolio, Audience, Logos, Why, Cta } from '../components/blocks';
import { site, showroom, ecoItems, projects, audiences, clients, reasons, defaultCta } from '../content/site';

export default function Home() {
  return (
    <>
      {site.showLoader ? <Loader /> : null}
      <Band flush><Showroom data={showroom} /></Band>

      <Band tone="paper" cut="paper" cols="42fr 58fr">
        <div className="laro-col">
          <SectionHead tone="light" layout="stacked" size="small" kicker={['Eco', 'Sustainable procurement']} title="Green procurement, met with a green catalogue."
            text="Embassies, NGOs, banks and international organizations increasingly require sustainable suppliers. Our eco range meets that brief without lowering the finish, and every item carries your logo, colours and campaign message."
            link={{ text: 'Explore the eco range', href: '/eco-range' }} />
          <Callout label="Tender-ready" text="Ask for the eco catalogue with materials and specifications for each item, ready to attach to your procurement file." />
        </div>
        <div className="laro-col"><EcoList items={ecoItems} /></div>
      </Band>

      <Band cut="dark">
        <SectionHead kicker={['Work', 'Portfolio']} title="Proof, installed." text="A selection of flags, carpets, gift boxes and event branding we have produced and installed." />
        <Spacer h={30} />
        <Portfolio items={projects} limit={6} more={{ text: 'View the full portfolio', href: '/portfolio' }} />
      </Band>

      <Band tone="paper" cut="paper" bottom={90}>
        <SectionHead tone="light" kicker={['Clients', 'Who we serve']} title={'Built for institutions\nthat can’t afford a miss.'} text="Procurement teams choose LARO when the date is fixed, the protocol is strict and the brand has to be exact." />
        <Spacer h={40} />
        <Audience items={audiences} />
        <Spacer h={70} />
        <Logos items={clients} />
      </Band>

      <Band cut="dark">
        <SectionHead kicker={['About', 'Why LARO']} title={'Six reasons procurement\nteams come back.'} text="Transforming ideas into strong brands, with products and service that leave a lasting impression and long-term value." link={{ text: 'Meet the team', href: '/about' }} />
        <Spacer h={40} />
        <Why items={reasons} />
      </Band>

      <Band top={20}><Cta {...defaultCta} /></Band>
    </>
  );
}
