import atainz from '../assets/images/atainz-logo.jpeg'
import crystal from '../assets/images/Crystal-Logo.png'
import xero from '../assets/images/xero-logo.png'
import cash from '../assets/images/cash-manager-logo.png'

function Brands() {
  return (
    <div className="md:w-2/3 md:flex block py-12 gap-8 justify-center items-center mx-auto">
        <img className="lg:h-44 md:h-28 h-40 mx-auto" src={atainz} alt="atainz-logo" />
        <img className="lg:h-32 md:h-24 h-42 mx-auto" src={crystal} alt="crystal-logo" />
        <img className="lg:h-32 md:h-24 h-32 mx-auto" src={xero} alt="xero-logo" />
        <img className="lg:h-32 md:h-24 h-32 mx-auto" src={cash} alt="cash-manager-logo" />
    </div>

  );
}

export default Brands;
