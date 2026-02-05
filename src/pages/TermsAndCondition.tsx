import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Scale, AlertCircle, Shield, Building, Mail, Phone, Globe, MapPin, CheckCircle, XCircle, Info } from "lucide-react";
import { useEffect } from "react";

const TermsAndConditions = () => {
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
            id: "acceptance",
            title: "Acceptance of Terms",
            content: "By accessing and using the Investment Property Trust website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.",
            note: "These terms constitute a legally binding agreement between you and Investment Property Trust."
        },
        {
            id: "definitions",
            title: "Definitions",
            content: "In these Terms and Conditions:",
            items: [
                "'We,' 'Us,' 'Our' refers to Investment Property Trust, its subsidiaries, and affiliates.",
                "'You,' 'Your' refers to any user of our website or services.",
                "'Services' includes all real estate services provided by Investment Property Trust.",
                "'Content' means all text, images, data, and materials available on our website.",
                "'Property' refers to any real estate asset managed, developed, or sold by us."
            ]
        },
        {
            id: "services-overview",
            title: "Services Overview",
            content: "Investment Property Trust provides comprehensive real estate services including:",
            items: [
                "Residential real estate development and sales",
                "Industrial land acquisition and warehouse construction",
                "Commercial property acquisition and office leasing",
                "Multi-residential property acquisition and management",
                "In-house realtor support and transaction services"
            ],
            additional: "All services are subject to availability and regulatory requirements in your jurisdiction."
        },
        {
            id: "website-use",
            title: "Website Use & Access",
            content: "You agree to use our website only for lawful purposes and in accordance with these terms. You must not:",
            items: [
                "Use the website in any way that violates applicable laws",
                "Attempt to gain unauthorized access to any part of the website",
                "Interfere with the proper working of the website",
                "Use automated systems or software to extract data",
                "Upload or transmit any malicious code or content"
            ]
        },
        {
            id: "intellectual-property",
            title: "Intellectual Property Rights",
            content: "All content on this website, including but not limited to:",
            items: [
                "Text, graphics, logos, and images",
                "Property listings and descriptions",
                "Service descriptions and methodologies",
                "Company branding and trade dress",
                "Software and website code"
            ],
            additional: "is the exclusive property of Investment Property Trust or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission."
        },
        {
            id: "property-information",
            title: "Property Information Accuracy",
            content: "While we strive for accuracy:",
            items: [
                "Property information is subject to change without notice",
                "All measurements, dimensions, and specifications are approximate",
                "Property availability is not guaranteed until formal agreement",
                "Prices and terms are subject to change",
                "Photographs may be for illustrative purposes only"
            ],
            additional: "You should verify all property information independently before making any decisions."
        },
        {
            id: "investment-disclaimer",
            title: "Investment Disclaimer",
            content: "Important Risk Considerations:",
            items: [
                "Real estate investments carry inherent risks",
                "Past performance does not guarantee future results",
                "Property values may fluctuate with market conditions",
                "Investment returns are not guaranteed",
                "All investment decisions should be made with professional advice"
            ],
            note: "Investment Property Trust provides information, not investment advice. Consult with qualified financial advisors before making investment decisions."
        },
        {
            id: "user-responsibilities",
            title: "User Responsibilities",
            content: "When using our services, you agree to:",
            items: [
                "Provide accurate and complete information",
                "Maintain the confidentiality of your account credentials",
                "Comply with all applicable laws and regulations",
                "Not misrepresent your identity or intentions",
                "Use services only for legitimate real estate purposes"
            ]
        },
        {
            id: "liability-limitation",
            title: "Limitation of Liability",
            content: "To the fullest extent permitted by law, Investment Property Trust shall not be liable for:",
            items: [
                "Any indirect, incidental, or consequential damages",
                "Loss of profits, revenue, or business opportunities",
                "Errors or omissions in website content",
                "Third-party actions or services",
                "Market fluctuations affecting property values"
            ],
            additional: "Our total liability shall not exceed the amount paid by you for our services, if any."
        },
        {
            id: "indemnification",
            title: "Indemnification",
            content: "You agree to indemnify and hold harmless Investment Property Trust, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising from:",
            items: [
                "Your use of our website or services",
                "Your violation of these terms",
                "Your infringement of any third-party rights",
                "Your conduct in connection with our services",
                "Any unauthorized use of your account"
            ]
        },
        {
            id: "third-party-links",
            title: "Third-Party Links & Services",
            content: "Our website may contain links to third-party websites. These links are provided for convenience only and:",
            items: [
                "We do not endorse or control third-party content",
                "We are not responsible for third-party privacy practices",
                "Third-party terms and conditions apply to their services",
                "You access third-party sites at your own risk",
                "We recommend reviewing third-party policies"
            ]
        },
        {
            id: "governing-law",
            title: "Governing Law & Dispute Resolution",
            content: "These Terms and Conditions are governed by the laws of the State of Washington, United States. Any disputes shall be resolved through:",
            items: [
                "First: Good faith negotiation between parties",
                "Second: Mediation in [Your City], Washington",
                "Third: Binding arbitration in accordance with AAA rules"
            ],
            additional: "By using our services, you consent to the exclusive jurisdiction of these venues."
        },
        {
            id: "termination",
            title: "Termination",
            content: "We reserve the right to:",
            items: [
                "Terminate or suspend your access to our website",
                "Refuse service to any user at our discretion",
                "Remove or edit content at any time",
                "Modify or discontinue services without notice"
            ],
            additional: "Provisions that by their nature should survive termination will remain in effect."
        },
        {
            id: "changes-terms",
            title: "Changes to Terms",
            content: "We may update these Terms and Conditions periodically. Changes will be effective upon posting and we will indicate the last updated date. Continued use of our services after changes constitutes acceptance of the modified terms.",
            note: "We recommend reviewing these terms regularly."
        },
        {
            id: "contact",
            title: "Contact Information",
            content: "For questions about these Terms and Conditions, please contact:"
        }
    ];

    const lastUpdated = "December 2025";

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-300 to-indigo-50 relative overflow-hidden">
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
                            <Scale className="w-8 h-8 text-blue-900" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
                            Terms & Conditions
                        </h1>
                        <p className="text-gray-900 text-lg md:text-xl mb-8">
                            Governing Your Use of Investment Property Trust Services
                        </p>
                        <div className="inline-flex items-center space-x-2 border border-blue-900 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <FileText className="w-4 h-4 text-blue-900" />
                            <span className="text-blue-900 text-sm">Last Updated: {lastUpdated}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-8 bg-amber-50 border-y border-amber-200">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                    <AlertCircle className="w-5 h-5 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-amber-900">Important Legal Notice</h3>
                                    <p className="text-sm text-amber-800">
                                        These terms govern your use of our website and services. Please read carefully.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Info className="w-4 h-4 text-amber-600" />
                                <span className="text-amber-800">Consult legal counsel for specific advice</span>
                            </div>
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
                            <div className="sticky top-32 bg-card rounded-2xl p-6 shadow-lg border">
                                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                                    <FileText className="w-5 h-5 mr-2" />
                                    Terms Sections
                                </h3>
                                <nav className="space-y-2">
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="block text-muted-foreground hover:text-primary transition-colors py-2 border-l-2 border-transparent hover:border-primary hover:pl-2 pl-0 transition-all text-sm"
                                        >
                                            {section.title}
                                        </a>
                                    ))}
                                </nav>
                                <div className="mt-8 pt-6 border-t">
                                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                        <Scale className="w-4 h-4" />
                                        <span>Legal terms governing our relationship</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Terms Content */}
                        <div className="lg:w-3/4">
                            <div className="space-y-16">
                                {/* Introduction */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    id="acceptance"
                                    className="scroll-mt-32"
                                >
                                    <div className="flex items-center space-x-3 mb-6">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <CheckCircle className="w-6 h-6 text-primary" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                            Acceptance of Terms
                                        </h2>
                                    </div>
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-muted-foreground leading-relaxed">
                                            By accessing and using the Investment Property Trust website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.
                                        </p>
                                        <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                            <h4 className="font-semibold text-blue-900 mb-2">Legal Binding Agreement</h4>
                                            <p className="text-blue-800">
                                                These terms constitute a legally binding agreement between you and Investment Property Trust. Your continued use of our services indicates your acceptance of any updates to these terms.
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
                                                {section.id === "definitions" && <FileText className="w-6 h-6 text-primary" />}
                                                {section.id === "services-overview" && <Building className="w-6 h-6 text-primary" />}
                                                {section.id === "website-use" && <Globe className="w-6 h-6 text-primary" />}
                                                {section.id === "intellectual-property" && <Shield className="w-6 h-6 text-primary" />}
                                                {section.id === "property-information" && <Info className="w-6 h-6 text-primary" />}
                                                {section.id === "investment-disclaimer" && <AlertCircle className="w-6 h-6 text-primary" />}
                                                {section.id === "user-responsibilities" && <CheckCircle className="w-6 h-6 text-primary" />}
                                                {section.id === "liability-limitation" && <XCircle className="w-6 h-6 text-primary" />}
                                                {section.id === "indemnification" && <Shield className="w-6 h-6 text-primary" />}
                                                {section.id === "third-party-links" && <Globe className="w-6 h-6 text-primary" />}
                                                {section.id === "governing-law" && <Scale className="w-6 h-6 text-primary" />}
                                                {section.id === "termination" && <XCircle className="w-6 h-6 text-primary" />}
                                                {section.id === "changes-terms" && <FileText className="w-6 h-6 text-primary" />}
                                                {section.id === "contact" && <Mail className="w-6 h-6 text-primary" />}
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
                                                <div className="mb-6">
                                                    <ul className="space-y-3">
                                                        {section.items.map((item, idx) => (
                                                            <li key={idx} className="flex items-start space-x-3">
                                                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                                <span className="text-foreground">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {section.additional && (
                                                <div className="mt-4">
                                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                                        {section.additional}
                                                    </p>
                                                </div>
                                            )}

                                            {section.note && (
                                                <div className={`mt-6 p-6 rounded-xl border ${section.id === "investment-disclaimer" ? 'bg-red-50 border-red-100' : 'bg-yellow-50 border-yellow-100'}`}>
                                                    <div className="flex items-start space-x-3">
                                                        <AlertCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${section.id === "investment-disclaimer" ? 'text-red-600' : 'text-yellow-600'}`} />
                                                        <div>
                                                            <p className={`font-medium ${section.id === "investment-disclaimer" ? 'text-red-800' : 'text-yellow-800'}`}>
                                                                {section.note}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {section.id === "contact" && (
                                                <div className="mt-8 p-8 bg-card rounded-2xl border shadow-sm">
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        <div>
                                                            <h4 className="font-semibold text-foreground mb-4">Legal Department</h4>
                                                            <div className="space-y-3">
                                                                <div className="flex items-center space-x-3">
                                                                    <Globe className="w-5 h-5 text-muted-foreground" />
                                                                    <span className="text-foreground">investmentpropertytrust.com</span>
                                                                </div>
                                                                <div className="flex items-center space-x-3">
                                                                    <Phone className="w-5 h-5 text-muted-foreground" />
                                                                    <span className="text-foreground">775-552-9163
</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-foreground mb-4">Jurisdiction</h4>
                                                            <div className="flex items-center space-x-3">
                                                                <MapPin className="w-5 h-5 text-muted-foreground" />
                                                                <div>
                                                                    <p className="text-foreground">State of Washington, USA</p>
                                                                    <p className="text-sm text-muted-foreground">Governing law and jurisdiction</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 pt-6 border-t">
                                                        <p className="text-sm text-muted-foreground">
                                                            For legal notices, please send correspondence via certified mail to our registered address.
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Trust & Experience Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20"
                                >
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                                Built on Integrity & Experience
                                            </h3>
                                            <p className="text-muted-foreground">
                                                These terms reflect our commitment to transparency and ethical business practices,
                                                honed through 40+ years of real estate excellence.
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-primary">40+</div>
                                                <div className="text-sm text-muted-foreground">Years in Business</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-primary">50+</div>
                                                <div className="text-sm text-muted-foreground">Successful Projects</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-primary">100%</div>
                                                <div className="text-sm text-muted-foreground">Ethical Standards</div>
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
                            Questions About Our Terms?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Contact our legal department for clarification on any aspect of these Terms and Conditions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link to="/contact">
                                    Contact Legal Department
                                    <Mail className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link to="/privacy-policy">
                                    View Privacy Policy
                                    <Shield className="w-5 h-5 ml-2" />
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

export default TermsAndConditions;