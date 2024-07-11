import React, { useContext } from "react";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import ReactToPrint from "react-to-print";
import { State } from "../context/stateContext";

function App() {
  const {
    clientName,
    setClientName,
    clientAddress,
    setClientAddress,
    invoiceNumber,
    setInvoiceNumber,
    invoiceDate,
    setInvoiceDate,
    notes,
    setNotes,
    componentRef,
  } = useContext(State);

  return (
    <main className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start" style={{ maxWidth: "1920px", margin: "auto" }}>
      <section>
        <div className="bg-white p-5 rounded shadow">
          <article className="md:grid grid-cols-2 gap-10 md:mt-16">
            <div className="flex flex-col">
              <label htmlFor="clientName">Enter your client's name</label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your client's name"
                maxLength={56}
                autoComplete="off"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="clientAddress">Enter your client's address</label>
              <input
                type="text"
                name="clientAddress"
                id="clientAddress"
                placeholder="Enter your client's address"
                maxLength={96}
                autoComplete="off"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
            </div>
          </article>

          <article className="md:grid grid-cols-3 gap-10 mt-5">
            <div className="flex flex-col">
              <label htmlFor="invoiceNumber">Quatation Number</label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                placeholder="Invoice Number"
                autoComplete="off"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="invoiceDate">Quotation Date</label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                placeholder="Invoice Date"
                autoComplete="off"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>
          </article>

          {/* Table form component */}
          <article className="mt-5">
            <TableForm />
          </article>

          <label htmlFor="notes" className="mt-5">Additional Notes</label>
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="5"
            placeholder="Additional notes to the client"
            maxLength={500}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-2 border-2 border-gray-300 rounded"
          ></textarea>

        </div>
      </section>

      {/* Invoice Preview section */}
      <div className="invoice__preview bg-white p-5 rounded-2xl border-4 border-blue-200">
        <ReactToPrint
          trigger={() => (
            <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
              Print / Download
            </button>
          )}
          content={() => componentRef.current}
        />
        <div ref={componentRef} className="p-5">
          <Header />
          <MainDetails />
          <ClientDetails />
          <Dates />
          <Table />
          <Notes />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
