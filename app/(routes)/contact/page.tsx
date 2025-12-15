const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-2">Contactează-ne</h1>
      <p className="text-center text-gray-600 mb-12">
        Ai întrebări? Echipa noastră îți stă la dispoziție.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6">Informații de contact</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">📍 Adresă:</span> Str. 9 Mai,
              Bacau
            </p>
            <p>
              <span className="font-semibold">📞 Telefon:</span> 0712 345 678
            </p>
            <p>
              <span className="font-semibold">✉️ Email:</span>{" "}
              contact@farmacia_la_un_click_distanta.ro
            </p>
            <p>
              <span className="font-semibold">⏰ Program:</span> L–V: 09:00 –
              18:00
            </p>
          </div>
        </div>

        {/* Form Card */}
        <form className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-5">
          <h2 className="text-xl font-semibold mb-2">Trimite-ne un mesaj</h2>

          <input
            type="text"
            placeholder="Nume"
            required
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <textarea
            placeholder="Mesajul tău..."
            rows="5"
            required
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
          />

          <button
            type="submit"
            className="mt-2 bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Trimite mesajul
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
