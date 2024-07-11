import React from "react";
import FooterImage from '../images/footer.png'; // Adjust the path according to your project structure

export default function Footer() {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center text-center">
          <li className="text-sm"> {/* Adjust text size here */}
            <span className="font-bold block">TERMS & CONDITIONS:</span>
            <span className="block text-xs"> SALE TAX: GST@18%</span> {/* Adjust text size here */}
            <span className="block text-xs"> PAYMENT: ADVANCE / AGAINST PI</span> {/* Adjust text size here */}
            <span className="block text-xs"> FREIGHT: EXTRA AS APPLICABLE</span> {/* Adjust text size here */}
            <span className="block text-xs"> DELIVERY: 7-10 DAYS AFTER PO CONFIRMATION</span> {/* Adjust text size here */}
            <span className="block mt-3 text-xs">
              WE HOPE THAT YOU WILL FIND OUR OFFER IN LINE WITH YOUR REQUIREMENT. IF YOU REQUIRE ANY FURTHER ASSISTANCE, PLEASE FEEL FREE TO CALL US. NOW WE LOOK FORWARD TO RECEIVE YOUR VALUED PURCHASE ORDER SOON.
            </span>
            <span className="block mt-3 text-xs">
              THANKS WITH WARM REGARDS,
            </span>
            <span className="block text-xs">LOKESH BIHANI</span> {/* Adjust text size here */}
            <span className="block text-xs">+91 8585999048</span> {/* Adjust text size here */}
          </li>
        </ul>
        <div className="flex justify-center mt-5">
          <img 
            src={FooterImage} // Adjust the path as needed
            alt="Footer Image" 
            className="w-full h-auto"
            style={{ maxWidth: "100%", height: "auto" }} // Ensure the image adjusts responsively
          />
        </div>
      </footer>

      <p className="text-center px-5 mt-8 text-xs">
        Invoicer is built by{" "}
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Anant Sharma
        </a>
      </p>
    </>
  );
}
