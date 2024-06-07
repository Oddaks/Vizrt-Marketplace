import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="relative bg-viz-orange">
      <div className="flex justify-between space-x-4 items-center text-white">
        <div className="flex items-center mb-2 mt-2 p-5 text-center"> 
          <FontAwesomeIcon icon={faCircleCheck} className="mr-2" size="2x" />
          <p className="mx-auto">Trusted By 
          <br />The Best</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCircleCheck} className="mr-2" size="2x" />
          <div className="text-center text-sm"> 
            <p>
              Vizrt's Customers Success provides industry-leading service,
              <br /> delivers customer satisfaction,
              <br /> and robust adoption of Vizrt software
              <br /> to best support users.
            </p>
          </div>
        </div>
        <div className="flex items-center mb-2 mt-2 p-5">
          <FontAwesomeIcon icon={faCircleCheck} className="mr-2" size="2x" />
          <div className="text-center"> 
            <p>
              Our customers tell the world's stories <br /> and we ensure they are told seamlessly
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
