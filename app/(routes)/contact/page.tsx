// const Contact = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-6 py-16">
//       {/* Title */}
//       <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
//         Contactează-ne
//       </h1>
//       <p className="text-center text-gray-600 mb-12">
//         Ai întrebări? Echipa noastră îți stă la dispoziție.
//       </p>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Info Card */}
//         <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
//           <h2 className="text-xl font-semibold mb-6 text-gray-900">
//             Informații de contact
//           </h2>

//           <div className="space-y-4 text-gray-700">
//             <p>
//               <span className="font-semibold text-blue-600">📍 Adresă:</span>{" "}
//               Str. 9 Mai, Bacău
//             </p>
//             <p>
//               <span className="font-semibold text-blue-600">📞 Telefon:</span>{" "}
//               0712 345 678
//             </p>
//             <p>
//               <span className="font-semibold text-blue-600">✉️ Email:</span>{" "}
//               contact@farmacia_la_un_click_distanta.ro
//             </p>
//             <p>
//               <span className="font-semibold text-blue-600">⏰ Program:</span>{" "}
//               L–V: 09:00 – 18:00
//             </p>
//           </div>
//         </div>

//         {/* Form Card */}
//         <form className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col gap-5 shadow-sm">
//           <h2 className="text-xl font-semibold mb-2 text-gray-900">
//             Trimite-ne un mesaj
//           </h2>

//           <input
//             type="text"
//             placeholder="Nume"
//             required
//             className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             required
//             className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <textarea
//             placeholder="Mesajul tău..."
//             rows={5}
//             required
//             className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//           />

//           <button
//             type="submit"
//             className="mt-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Trimite mesajul
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
"use client";

import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ivket58", // SERVICE ID
        "template_qxcsz2m", // TEMPLATE ID
        e.target,
        "RXPys4R6Reoo4SslP" // PUBLIC KEY
      )
      .then(() => {
        alert("Mesaj trimis cu succes!");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("A apărut o eroare. Încearcă din nou.");
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
        Contactează-ne
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Ai întrebări? Echipa noastră îți stă la dispoziție.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">
            Informații de contact
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold text-blue-600">📍 Adresă:</span>{" "}
              Str. 9 Mai, Bacău
            </p>
            <p>
              <span className="font-semibold text-blue-600">📞 Telefon:</span>{" "}
              0712 345 678
            </p>
            <p>
              <span className="font-semibold text-blue-600">✉️ Email:</span>{" "}
              contact@farmacia_la_un_click_distanta.ro
            </p>
            <p>
              <span className="font-semibold text-blue-600">⏰ Program:</span>{" "}
              L–V: 09:00 – 18:00
            </p>
          </div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={sendEmail}
          className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col gap-5 shadow-sm"
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-900">
            Trimite-ne un mesaj
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Nume"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Mesajul tău..."
            rows={5}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Trimite mesajul
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
