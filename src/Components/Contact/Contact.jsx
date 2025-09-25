import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="CONTACT" className="flex flex-col justify-center items-center text-white bg-white px-4 py-20">
      {/* العنوان */}
      <h2 className="text-4xl text-black md:text-5xl font-bold mb-6 text-center">
        Contact
      </h2>

      {/* نص توضيحي */}
      <p className="text-gray-700 text-lg md:text-xl max-w-xl text-center mb-10">
        I'm always happy to connect. Whether you have a question, want to book a
        session, or just want to say hi — feel free to reach out through any of
        the platforms below.
      </p>

      {/* الأيقونات */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10 mb-6">
        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=ismailbakass9@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 hover:text-amber-700 transition"
          aria-label="Send Email via Gmail"
        >
          <FaEnvelope className="text-4xl sm:text-5xl" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/31684399384"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700 transition"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-4xl sm:text-5xl" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/livwsi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-700 transition"
          aria-label="Instagram"
        >
          <FaInstagram className="text-4xl sm:text-5xl" />
        </a>
      </div>

      {/* بيانات التواصل المكتوبة */}
      <div className="text-center text-gray-800 space-y-2">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:ismailbakass9@gmail.com"
            className="underline hover:text-amber-700"
          >
            ismailbakass9@gmail.com
          </a>
        </p>
        <p>
          📱 WhatsApp:{" "}
          <a
            href="https://wa.me/31684399384"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-green-700"
          >
            +31 6 8439 9384
          </a>
        </p>
        <p>
          📷 Instagram:{" "}
          <a
            href="https://www.instagram.com/livwsi"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pink-700"
          >
            @livwsi
          </a>
        </p>
      </div>
    </section>
  );
}
