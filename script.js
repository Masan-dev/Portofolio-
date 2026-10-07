/* ==================================================
   PORTFOLIO MODAL
   ================================================== */

// Mengambil semua portfolio card
const portfolioCards = document.querySelectorAll(".portfolio-card");

// Mengambil elemen modal
const modal = document.getElementById("portfolioModal");

// Mengambil tombol close
const closeModal = document.getElementById("closeModal");

// Mengambil elemen yang akan diisi oleh data project
const modalTitle = document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalTech =
    document.getElementById("modalTech");


/*
    Perulangan untuk setiap portfolio card.

    forEach berarti:
    "lakukan sesuatu untuk setiap card".
*/

portfolioCards.forEach(function(card) {

    /*
        Event click akan dijalankan
        ketika card ditekan.
    */

    card.addEventListener("click", function(event) {

        /*
            Kalau yang ditekan adalah tombol VIEW,
            event tetap berasal dari card.

            Jadi kita tetap mengambil data
            dari card yang sama.
        */

        // Mengambil data dari attribute HTML
        const title = card.dataset.title;

        const description =
            card.dataset.description;

        const tech =
            card.dataset.tech;


        // Memasukkan data ke modal
        modalTitle.textContent = title;

        modalDescription.textContent =
            description;

        modalTech.textContent = tech;


        /*
            Menambahkan class active
            agar card mengecil sebentar
            ketika ditekan.
        */

        card.classList.add("active");


        /*
            setTimeout digunakan supaya
            animasi tekan sempat terlihat.
        */

        setTimeout(function() {

            card.classList.remove("active");

        }, 150);


        /*
            Menampilkan modal
            dengan menambahkan class show.
        */

        modal.classList.add("show");


        /*
            Menghentikan klik supaya
            tidak diteruskan ke elemen lain.
        */

        event.stopPropagation();

    });

});


/* ==================================================
   CLOSE MODAL
   ================================================== */

closeModal.addEventListener("click", function() {

    modal.classList.remove("show");

});


/*
    Kalau user mengklik area hitam
    di luar modal, modal ditutup.
*/

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


/*
    Tombol ESC juga dapat digunakan
    untuk menutup modal.
*/

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});


/* ==================================================
   CONTACT FORM
   ================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    /*
        Mencegah form melakukan reload halaman.

        Karena belum ada backend,
        form ini hanya simulasi.
    */

    event.preventDefault();


    // Mengambil nama dari input
    const name =
        document.getElementById("name").value;


    /*
        Menampilkan pesan sederhana.

        Nanti kalau sudah belajar backend,
        bagian ini dapat diganti dengan
        proses pengiriman data sebenarnya.
    */

    alert(
        "Terima kasih, " +
        name +
        "! Pesan berhasil diterima."
    );


    // Mengosongkan form
    contactForm.reset();

});