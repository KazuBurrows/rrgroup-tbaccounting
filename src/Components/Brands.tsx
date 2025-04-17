import crystal from '../assets/images/Crystal-Logo.png'
import xero from '../assets/images/xero-logo.png'
import cash from '../assets/images/cash-manager-logo.png'

function Brands() {
  return (
    <div className="md:w-2/3 md:flex block py-8 gap-8 justify-center items-center mx-auto">
        <img className="md:h-24 h-28 mx-auto" src={crystal} alt="crystal-logo" />
        <img className="md:h-24 h-28 mx-auto" src={xero} alt="xero-logo" />
        <img className="md:h-24 h-28 mx-auto" src={cash} alt="cash-manager-logo" />
    </div>

  );
}

export default Brands;
