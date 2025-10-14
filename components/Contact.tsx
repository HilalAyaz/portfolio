"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SiGithub, SiLinkedin } from "react-icons/si";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [buttonState, setButtonState] = useState<"idle" | "sending" | "sent">(
    "idle"
  );
  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
      newErrors.name =
        "Name must be at least 2 letters and contain only letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 500) {
      newErrors.message = "Message cannot exceed 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setButtonState("sending");
    try {
      await axios.post("https://formspree.io/f/xayrjndb", formData, {
        headers: { Accept: "application/json" },
      });
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setButtonState("sent");

      setTimeout(() => setButtonState("idle"), 5000);
    } catch (error) {
      console.error(error);
      toast.error("Oops! Something went wrong.");
      setButtonState("idle");
    }
  };

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
    <section id="contact" className="py-20 px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-lg border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      placeholder="Your name"
                      className="bg-background/50"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
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
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      placeholder="Tell me about your project..."
                      rows={5}
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
                      ? "Sending Message..."
                      : "Message Sent"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur-lg border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="space-y-4">
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

            <Card className="bg-card/50 backdrop-blur-lg border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Quick Info</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>📍 Islamabad, Pakistan</p>
                  <p>⏰ Timezone: UTC +5:00</p>
                  <p>💼 Available for Freelance and Full Time Roles</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
