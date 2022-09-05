import jic1 from "../dist/img/portfolio/jic1.jpg";
import football1 from "../dist/img/portfolio/football1.png";
import blankPortfolio from "../dist/img/portfolio/blank.png";

function Portfolio() {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Project Terbaru
            </h2>
            <p className="font-medium text-base text-secondary md:text-lg">
              Berikut adalah beberapa project yang pernah saya buat.
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={jic1} alt="Jogja IT Clinic" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Web Upload Gambar - JOGJA IT CLINIC
            </h3>
            <p className="font-medium text-base text-secondary">
              Project ini adalah project yang saya dapat saat internship di
              Jogja IT Clinic
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img
                src={blankPortfolio}
                alt="Gunungkidul Youth Movement"
                className="w-full"
              />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Website Organisasi - Gunungkidul Youth Movement
            </h3>
            <p className="font-medium text-base text-secondary">
              Project freelance saya untuk membuat website salah satu organisasi
              kepemudaan di Gunungkidul, Yogyakarta yaitu Gunungkidul Youth
              Movement.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img
                src={blankPortfolio}
                alt="PT. UNICON SEJAHTERA MANDIRI"
                className="w-full"
              />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Website Toko Bangunan - PT. UNICON SEJAHTERA MANDIRI
            </h3>
            <p className="font-medium text-base text-secondary">
              Project freelance saya dalam membuat website advertising Toko
              Bangunan milik PT. UNICON SEJAHTERA MANDIRI.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={football1} alt="App" className="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Website Jadwal Premier League
            </h3>
            <p className="font-medium text-base text-secondary">
              Project ini berupa website yang berisi informasi jadwal Premier
              League. Data yang tercantum mengambil dari API gratis berisi
              informasi sepakbola di Premier League. Website ini dapat melihat
              detil jadwal yang akan berlangsung maupun yang telah selesai
              dilaksanakan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
