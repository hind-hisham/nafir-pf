"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 bg-contact text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-shadow-md">Contact Us</h2>
      <p className="mt-2 text-shadow-md">Have a question? Send us a message.</p>
      <form onSubmit={handleSubmit} className="border mt-6 bg-white/10 backdrop-blur-md  p-6 rounded-lg shadow-md w-full max-w-md">
        <label className="block mb-2 font-semibold">Name</label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="mb-4" />

        <label className="block mb-2 font-semibold">Email</label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="mb-4" />

        <label className="block mb-2 font-semibold">Message</label>
        <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message" className="mb-4" />

        <Button type="submit" className="w-full bg-primary text-white">Send Message</Button>
      </form>
    </section>
  );
};

export default Contact;