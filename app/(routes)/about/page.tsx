const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">
        Despre noi
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
        Suntem o farmacie modernă, dedicată sănătății tale, oferind produse
        sigure, originale și servicii de calitate, la doar un click distanță.
      </p>

      <div className="space-y-16">
        {/* Cine suntem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Cine suntem
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Farmacia la un click distanță</strong> este o platformă
              online dedicată comercializării produselor farmaceutice,
              suplimentelor alimentare, produselor dermato-cosmetice și
              dispozitivelor medicale.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Colaborăm exclusiv cu furnizori autorizați și respectăm toate
              normele legale pentru a-ți oferi siguranță, transparență și
              profesionalism.
            </p>
          </div>

          {/* Info box */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">
            <ul className="space-y-4 text-gray-700">
              <li>✔️ Produse originale și certificate</li>
              <li>✔️ Livrare rapidă oriunde în țară</li>
              <li>✔️ Consultanță de specialitate</li>
              <li>✔️ Plăți sigure și protejate</li>
            </ul>
          </div>
        </div>

        {/* Misiune & Viziune */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Misiunea noastră
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Misiunea noastră este să îți oferim acces rapid la produse
              farmaceutice de calitate, informații corecte și suport
              profesionist.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Viziunea noastră
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Ne dorim să devenim un reper de încredere în domeniul farmaceutic
              online din România.
            </p>
          </div>
        </div>

        {/* Valori */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            Valorile noastre
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: "🛡️",
                title: "Siguranță",
                text: "Respectăm standarde stricte de calitate.",
              },
              {
                icon: "🤝",
                title: "Încredere",
                text: "Relații bazate pe transparență.",
              },
              {
                icon: "⚕️",
                title: "Profesionalism",
                text: "Suport specializat și corect.",
              },
              {
                icon: "🚚",
                title: "Rapiditate",
                text: "Livrare rapidă și sigură.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="text-3xl mb-2">{item.icon}</p>
                <h4 className="font-semibold mb-2 text-gray-900">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-xl p-10 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Ai nevoie de ajutor?</h3>
          <p className="mb-6 text-blue-100">
            Echipa noastră de specialiști este pregătită să îți răspundă tuturor
            întrebărilor.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Contactează-ne
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
