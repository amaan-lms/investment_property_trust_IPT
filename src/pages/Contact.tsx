"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Globe,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Mail,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "775-552-9163",
    link: "tel:775-552-9163",
  },
  {
    icon: Mail,
    title: "Mail to",
    value: "trustee@investmentpropertytrust.com",
    link: "mailto:trustee@investmentpropertytrust.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "USA",
    link: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9AM - 5PM",
    link: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [result, setResult] = useState("");

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission using Web3Forms
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");

    const data = new FormData();
    data.append("access_key", "67e21209-2718-4816-ab5b-cf6a7b3c09af");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const json = await response.json();

      if (json.success) {
        setResult("Form Submitted Successfully!");
        toast({
          title: "Message Received",
          description: "Thank you for contacting us. We'll be in touch soon!",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setResult("Error submitting form. Please try again.");
        toast({
          title: "Submission Failed",
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch (err) {
      console.error(err);
      setResult("Error submitting form. Please try again.");
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-300 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-blue-900 rounded-full px-4 py-2 text-blue-900 text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-900 text-lg md:text-xl leading-relaxed">
              Have a question or ready to discuss your next real estate
              project? Our team is here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 pb-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your real estate needs..."
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>

                <span className="text-sm text-muted-foreground mt-2 block">
                  {result}
                </span>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us directly or visit our office. We're always
                  happy to discuss your real estate goals.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-secondary rounded-xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-muted-foreground font-semibold lg:text-sm hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground font-semibold">{info.value}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="p-16">
        <div className="bg-secondary rounded-2xl overflow-hidden h-96 relative">
          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps?q=2150+Meridian+Blvd,+Unit+A,+Minden,+NV+89423&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-2 rounded shadow">
            <p className="text-sm font-semibold text-slate-900">
              2150 Meridian Blvd A, Minden, NV 89423, USA
            </p>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work With Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              When you partner with Investment Property Trust, you get more than
              just real estate services—you get a dedicated team committed to
              your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                description:
                  "40+ years of experience across all real estate sectors",
              },
              {
                title: "In-House Team",
                description: "Dedicated realtors supporting every transaction",
              },
              {
                title: "Full Service",
                description: "From acquisition to sales, we handle it all",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
