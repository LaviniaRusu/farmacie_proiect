const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-4">Despre noi</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
        Suntem o farmacie modernă, dedicată sănătății tale, oferind produse
        sigure, originale și servicii de calitate, la doar un click distanță.
      </p>

      {/* Sections */}
      <div className="space-y-16">
        {/* Cine suntem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Cine suntem</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Farmacia la un click distanta</strong> este o platformă
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

          <div className="bg-green-50 rounded-xl p-8">
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
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold mb-3">Misiunea noastră</h3>
            <p className="text-gray-700 leading-relaxed">
              Misiunea noastră este să îți oferim acces rapid la produse
              farmaceutice de calitate, informații corecte și suport
              profesionist, contribuind activ la menținerea și îmbunătățirea
              sănătății tale.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold mb-3">Viziunea noastră</h3>
            <p className="text-gray-700 leading-relaxed">
              Ne dorim să devenim un reper de încredere în domeniul farmaceutic
              online din România, prin inovație, responsabilitate și orientare
              către client.
            </p>
          </div>
        </div>

        {/* Valori */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">
            Valorile noastre
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <p className="text-3xl mb-2">🛡️</p>
              <h4 className="font-semibold mb-2">Siguranță</h4>
              <p className="text-sm text-gray-600">
                Respectăm standarde stricte de calitate și legalitate.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <p className="text-3xl mb-2">🤝</p>
              <h4 className="font-semibold mb-2">Încredere</h4>
              <p className="text-sm text-gray-600">
                Construim relații bazate pe transparență și respect.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <p className="text-3xl mb-2">⚕️</p>
              <h4 className="font-semibold mb-2">Profesionalism</h4>
              <p className="text-sm text-gray-600">
                Oferim suport specializat și informații corecte.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 text-center">
              <p className="text-3xl mb-2">🚚</p>
              <h4 className="font-semibold mb-2">Rapiditate</h4>
              <p className="text-sm text-gray-600">
                Livrăm comenzile rapid și în siguranță.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-700 rounded-xl p-10 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">Ai nevoie de ajutor?</h3>
          <p className="mb-6">
            Echipa noastră de specialiști este pregătită să îți răspundă tuturor
            întrebărilor.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contactează-ne
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
