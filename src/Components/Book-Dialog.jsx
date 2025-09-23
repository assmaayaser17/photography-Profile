import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { useForm } from "react-hook-form";
import { Textarea } from "@/Components/ui/textarea";

export default function BookSessionDialog({ open, setOpen }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Send email logic here (EmailJS or backend API)
    reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-white rounded-2xl shadow-xl border border-white/30">
        <DialogHeader>
          <DialogTitle className="text-gray-600 text-3xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
            Book a Session
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-6 pb-6">
          <div className="flex flex-col">
            {/* <Label className=" font-semibold mb-1">Name</Label> */}
            <Input
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="rounded-lg border-2 border-white/40 bg-white/20 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
            />
          </div>

          <div className="flex flex-col">
            <Label className="text-white font-semibold mb-1">Email</Label>
            <Input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your Email"
              className="rounded-lg border-2 border-white/40 bg-white/20 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
            />
          </div>

          <div className="flex flex-col">
            <Label className="text-white font-semibold mb-1">Message</Label>
            <Textarea
              {...register("message")}
              placeholder="Tell me about your session..."
              className="min-h-[120px] rounded-lg border-2 border-white/40 bg-white/20 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gray-400  text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition-transform duration-300"
          >
            Send
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
