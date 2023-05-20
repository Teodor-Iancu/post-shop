import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Post OnlineShop',
  description:
    'Die Welt der Crypto stamps, 2019 hat die Österreichische Post AG die erste Blockchain-Briefmarke der Welt herausgegeben. Erstmalig schafft es ein scheinbar traditionelles Produkt die Briefmarke sich die hochkomplexe Technologie der Blockchain zunutze zu machen',
  keywords: 'Briefmarken, Crypto Briefmarken, Crypto stamp, Crypto stamp Art',
};

export default Meta;
