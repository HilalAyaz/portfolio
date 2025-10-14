"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticleBackground";
import { SiGithub, SiLinkedin } from "react-icons/si";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [buttonState, setButtonState] = useState<"idle" | "sending" | "sent">(
    "idle"
  );

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
      newErrors.name =
        "Name must be at least 2 letters and contain only alphabets.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    } else if (formData.message.length > 500) {
      newErrors.message = "Message cannot exceed 500 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setButtonState("sending");

    try {
      const res = await fetch("https://formspree.io/f/xayrjndb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setButtonState("sent");
        setTimeout(() => setButtonState("idle"), 5000);
      } else {
        toast.error("Something went wrong. Please try again later.");
        setButtonState("idle");
      }
    } catch (error) {
      toast.error("Error sending message. Check your connection.");
      setButtonState("idle");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hilalbusiness@outlook.com",
      href: "mailto:hilalbusiness@outlook.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: SiGithub,
      label: "GitHub",
      href: "https://github.com/hilalayaz",
      color: "hover:text-primary",
    },
    {
      icon: SiLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/itshilaal/",
      color: "hover:text-accent",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:hilalbusiness@outlook.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />

        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Get In{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how I can help bring your
                ideas to life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Left Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/50 backdrop-blur-lg border-border h-full">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your full name"
                          className="bg-background/50"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="your.email@example.com"
                          className="bg-background/50"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <Input
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          placeholder="What's this about?"
                          className="bg-background/50"
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.subject}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          placeholder="Tell me about your project..."
                          rows={6}
                          className="bg-background/50"
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>
                      <Button
                        type="submit"
                        disabled={buttonState !== "idle"}
                        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 disabled:opacity-50"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {buttonState === "idle"
                          ? "Send Message"
                          : buttonState === "sending"
                          ? "Sending..."
                          : "Message Sent!"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Card className="bg-card/50 backdrop-blur-lg border-border">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">Availability</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p>📍 Based in Islamabad, Pakistan</p>
                      <p>⏰ Timezone: UTC+5</p>
                      <p>💼 Available for freelance projects</p>
                      <p>🚀 Open to remote opportunities</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-lg border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      {contactInfo.map((info) => (
                        <a
                          key={info.label}
                          href={info.href}
                          className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all group"
                        >
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {info.label}
                            </p>
                            <p className="font-medium">{info.value}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-lg border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                    <div className="space-y-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all ${social.color}`}
                        >
                          <social.icon className="h-6 w-6" />
                          <span className="font-medium">{social.label}</span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
