import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactCardDialog({ open, setOpen }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-white rounded-2xl shadow-xl border border-white/30">
        <DialogHeader>
          <DialogTitle className="text-gray-500 text-3xl font-extrabold mb-4 tracking-wide drop-shadow-lg text-center">
            Let’s Connect
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-6 px-6 pb-6 text-center">
          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ismailbakass9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-amber-500 hover:text-amber-400 transition"
          >
            <FaEnvelope className="text-2xl" />
            <span className="text-lg font-medium">ismailbakass9@gmail.com</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/31684399384"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-green-500 hover:text-green-400 transition"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="text-lg font-medium">+31 6 84399384</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/livwsi?igsh=bHlud3duamVvcnVk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-pink-600 hover:text-pink-500 transition"
          >
            <FaInstagram className="text-2xl" />
            <span className="text-lg font-medium">@livwsi</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
