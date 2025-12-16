import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, FileText, Mail, Phone, Building, Globe, MapPin } from "lucide-react";
import { useEffect } from "react";

const PrivacyPolicy = () => {
    // Scroll to section if hash is present in URL
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    const sections = [
        {
            id: "introduction",
            title: "Introduction & Scope",
            content: "Investment Property Trust ('we,' 'our,' or 'us') is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you interact with our services, including property inquiries, investments, partnerships, and website usage."
        },
        {
            id: "information-collected",
            title: "Information We Collect",
            content: "We collect information that you voluntarily provide to us when you:",
            items: [
                "Inquire about properties or investment opportunities",
                "Apply for tenancy or leasing arrangements",
                "Register for property management services",
                "Subscribe to our newsletter or updates",
                "Contact us via phone, email, or our website forms"
            ],
            additional: "The types of personal information we may collect include:",
            subItems: [
                "Contact Information: Name, address, email, phone number",
                "Financial Information: For investment purposes and tenant screening (with your consent)",
                "Property Preferences: Desired locations, property types, budget ranges",
                "Identification Documents: For regulatory compliance in property transactions",
                "Communications: Records of correspondence and inquiries"
            ]
        },
        {
            id: "information-use",
            title: "How We Use Your Information",
            content: "We use your personal information for legitimate business purposes, including:",
            items: [
                "Providing real estate services and property information",
                "Processing investment inquiries and applications",
                "Managing tenant relationships and property maintenance",
                "Complying with legal and regulatory requirements",
                "Improving our services and customer experience",
                "Communicating important updates about properties or services",
                "Preventing fraud and ensuring security"
            ]
        },
        {
            id: "information-sharing",
            title: "Information Sharing & Disclosure",
            content: "We do not sell your personal information. We may share your information with:",
            items: [
                "Service Providers: Professional advisors, property management software, maintenance contractors",
                "Legal Authorities: When required by law or to protect our rights",
                "Business Partners: In connection with joint property ventures (with your consent)",
                "Financial Institutions: For transaction processing and verification"
            ],
            additional: "We ensure all third parties maintain appropriate security measures and use information only for specified purposes."
        },
        {
            id: "data-security",
            title: "Data Security & Protection",
            content: "With over 40 years in real estate, we understand the importance of trust and security. We implement:",
            items: [
                "Physical Security: Secure offices and document storage",
                "Technical Measures: Encrypted communications, secure servers, access controls",
                "Organizational Protocols: Employee training, confidentiality agreements",
                "Regular Audits: Security assessments and compliance reviews"
            ],
            additional: "While we employ robust security measures, no system is 100% secure. We continuously update our practices to address evolving threats."
        },
        {
            id: "data-retention",
            title: "Data Retention",
            content: "We retain personal information only as long as necessary for:",
            items: [
                "Fulfilling the purposes for which it was collected",
                "Compliance with legal obligations (typically 7+ years for real estate transactions)",
                "Resolving disputes and enforcing agreements",
                "Maintaining accurate property and investment records"
            ],
            additional: "Upon expiration of retention periods, information is securely destroyed or anonymized."
        },
        {
            id: "your-rights",
            title: "Your Rights & Choices",
            content: "Depending on your jurisdiction, you may have rights including:",
            items: [
                "Access: Request copies of your personal information",
                "Correction: Update inaccurate or incomplete information",
                "Deletion: Request removal of your information (subject to legal requirements)",
                "Objection: Object to certain processing activities",
                "Portability: Request transfer of your data",
                "Withdraw Consent: Where processing is based on consent"
            ],
            additional: "To exercise these rights, contact our Privacy Officer using the information below."
        },
        {
            id: "cookies-analytics",
            title: "Cookies & Website Analytics",
            content: "Our website uses cookies and similar technologies to:",
            items: [
                "Enhance user experience and website functionality",
                "Analyze website traffic and user behavior",
                "Remember preferences and settings",
                "Deliver relevant property information"
            ],
            additional: "You can control cookie settings through your browser. Some features may not function properly if cookies are disabled."
        },
        {
            id: "children-privacy",
            title: "Children's Privacy",
            content: "Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete the information promptly."
        },
        {
            id: "policy-changes",
            title: "Changes to This Policy",
            content: "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes through:",
            items: [
                "Website notices",
                "Email communications (where appropriate)",
                "Updated posting date at the top of this policy"
            ],
            additional: "We encourage you to review this policy regularly."
        },
        {
            id: "contact-us",
            title: "Contact Information",
            content: "For privacy-related inquiries or to exercise your rights, please contact:"
        }
    ];

    const lastUpdated = "December 2025";

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-300  to-indigo-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/60 backdrop-blur-sm rounded-2xl mb-6">
                            <Shield className="w-8 h-8 text-blue-900" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-900 text-lg md:text-xl mb-8">
                            Protecting Your Information with 40+ Years of Trust
                        </p>
                        <div className="inline-flex items-center space-x-2 border border-blue-900 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <FileText className="w-4 h-4 text-blue-900" />
                            <span className="text-blue-900 text-sm">Last Updated: {lastUpdated}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Table of Contents - Sidebar */}
                        <div className="lg:w-1/4">
                            <div className="sticky top-32 bg-card rounded-2xl p-6 shadow-lg">
                                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                                    <FileText className="w-5 h-5 mr-2" />
                                    Policy Sections
                                </h3>
                                <nav className="space-y-2">
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="block text-muted-foreground hover:text-primary transition-colors py-2 border-l-2 border-transparent hover:border-primary hover:pl-2 pl-0 transition-all"
                                        >
                                            {section.title}
                                        </a>
                                    ))}
                                </nav>
                                <div className="mt-8 pt-6 border-t">
                                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                        <Lock className="w-4 h-4" />
                                        <span>Your privacy is our priority</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Policy Content */}
                        <div className="lg:w-3/4">
                            <div className="space-y-16">
                                {/* Introduction */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    id="introduction"
                                    className="scroll-mt-32"
                                >
                                    <div className="flex items-center space-x-3 mb-6">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <Building className="w-6 h-6 text-primary" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                            Introduction & Scope
                                        </h2>
                                    </div>
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-muted-foreground leading-relaxed">
                                            Investment Property Trust ("we," "our," or "us") is committed to protecting
                                            the privacy and security of your personal information. This Privacy Policy
                                            outlines how we collect, use, disclose, and safeguard your information when
                                            you interact with our services, including property inquiries, investments,
                                            partnerships, and website usage.
                                        </p>
                                        <div className="mt-6 p-6 bg-secondary/50 rounded-xl border">
                                            <h4 className="font-semibold text-foreground mb-2">About Investment Property Trust</h4>
                                            <p className="text-muted-foreground">
                                                With over 40 years of real estate excellence, we've built our reputation
                                                on trust, integrity, and protecting our clients' interests. This commitment
                                                extends to how we handle your personal information.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Other Sections */}
                                {sections.slice(1).map((section, index) => (
                                    <motion.div
                                        key={section.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        id={section.id}
                                        className="scroll-mt-32"
                                    >
                                        <div className="flex items-center space-x-3 mb-6">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                                {section.id === "information-collected" && <Eye className="w-6 h-6 text-primary" />}
                                                {section.id === "information-use" && <FileText className="w-6 h-6 text-primary" />}
                                                {section.id === "information-sharing" && <Shield className="w-6 h-6 text-primary" />}
                                                {section.id === "data-security" && <Lock className="w-6 h-6 text-primary" />}
                                                {section.id === "data-retention" && <FileText className="w-6 h-6 text-primary" />}
                                                {section.id === "your-rights" && <Shield className="w-6 h-6 text-primary" />}
                                                {section.id === "cookies-analytics" && <Eye className="w-6 h-6 text-primary" />}
                                                {section.id === "children-privacy" && <Lock className="w-6 h-6 text-primary" />}
                                                {section.id === "policy-changes" && <FileText className="w-6 h-6 text-primary" />}
                                                {section.id === "contact-us" && <Mail className="w-6 h-6 text-primary" />}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                                {section.title}
                                            </h2>
                                        </div>

                                        <div className="prose prose-lg max-w-none">
                                            <p className="text-muted-foreground leading-relaxed mb-6">
                                                {section.content}
                                            </p>

                                            {section.items && (
                                                <ul className="space-y-3 mb-6">
                                                    {section.items.map((item, idx) => (
                                                        <li key={idx} className="flex items-start space-x-3">
                                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                            <span className="text-foreground">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {section.additional && (
                                                <>
                                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                                        {section.additional}
                                                    </p>
                                                    {section.subItems && (
                                                        <ul className="space-y-2 pl-4 mb-6">
                                                            {section.subItems.map((item, idx) => (
                                                                <li key={idx} className="flex items-start space-x-3">
                                                                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                                                                    <span className="text-foreground">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </>
                                            )}

                                            {section.id === "contact-us" && (
                                                <div className="mt-8 p-8 bg-card rounded-2xl border shadow-sm">
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        <div>
                                                            <h4 className="font-semibold text-foreground mb-4">Privacy Officer</h4>
                                                            <div className="space-y-3">
                                                                <div className="flex items-center space-x-3">
                                                                    <Globe className="w-5 h-5 text-muted-foreground" />
                                                                    <span className="text-foreground"> investmentpropertytrust.com</span>
                                                                </div>
                                                                <div className="flex items-center space-x-3">
                                                                    <Phone className="w-5 h-5 text-muted-foreground" />
                                                                    <span className="text-foreground">360-303-9000</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>

                                                            <h4 className="font-semibold text-foreground mb-4">Location</h4>
                                                            <MapPin className="w-5 h-5 text-muted-foreground" />
                                                            <p className=" text-foreground">

                                                                USA
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 pt-6 border-t">
                                                        <p className="text-sm text-muted-foreground">
                                                            We typically respond to privacy inquiries within 5-7 business days.
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Trust Badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20"
                                >
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                                Built on 40+ Years of Trust
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Your privacy is protected by decades of real estate expertise
                                                and a commitment to ethical business practices.
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-primary">40+</div>
                                                <div className="text-sm text-muted-foreground">Years Experience</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-primary">50+</div>
                                                <div className="text-sm text-muted-foreground">Properties Managed</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-primary">100%</div>
                                                <div className="text-sm text-muted-foreground">Client Focused</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Questions About Our Privacy Practices?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Contact our Privacy Officer for clarification or to discuss your privacy concerns.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link to="/contact">
                                    Contact Privacy Officer
                                    <Mail className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link to="/services">
                                    Explore Our Services
                                    <Building className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;