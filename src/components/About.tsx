export default function About() {
  return (
    <section
      id="sobre"
  data-aos="fade-up"
      className="bg-[#12081d] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* FOTO */}
        <div className="flex justify-center">
          <img
            src="src\assets\images\Ana.png"
            alt="Sensitiva Ana"
            className="rounded-3xl shadow-2xl w-full max-w-md"
          />
        </div>

        {/* TEXTO */}
        <div>

          <span className="text-yellow-400 font-semibold uppercase tracking-widest">
            SOBRE
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Sensitiva Ana
          </h2>

          <p className="text-gray-300 mt-8 leading-8 text-lg">
            Há mais de 30 anos ajudando pessoas através da espiritualidade,
            Tarot e Astrologia.

            Cada consulta é realizada com total sigilo, respeito e dedicação,
            buscando orientar você nos momentos mais importantes da vida.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="bg-[#1c1128] rounded-2xl p-6">
              <h3 className="text-yellow-400 text-3xl font-bold">
                30+
              </h3>

              <p className="text-gray-300 mt-2">
                Anos de experiência
              </p>
            </div>

            <div className="bg-[#1c1128] rounded-2xl p-6">
              <h3 className="text-yellow-400 text-3xl font-bold">
                5.000+
              </h3>

              <p className="text-gray-300 mt-2">
                Consultas realizadas
              </p>
            </div>

            <div className="bg-[#1c1128] rounded-2xl p-6">
              <h3 className="text-yellow-400 text-3xl font-bold">
                100%
              </h3>

              <p className="text-gray-300 mt-2">
                Atendimento Online
              </p>
            </div>

            <div className="bg-[#1c1128] rounded-2xl p-6">
              <h3 className="text-yellow-400 text-3xl font-bold">
                ⭐⭐⭐⭐⭐
              </h3>

              <p className="text-gray-300 mt-2">
                Atendimento Sigiloso
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}