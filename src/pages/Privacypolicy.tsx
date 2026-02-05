import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Shield, Lock, Eye, User, Database, Globe, Mail, Phone, CheckCircle, AlertCircle, Server, ShieldCheck, Users, Cookie, Bell } from "lucide-react";
import { useEffect } from "react";

const Privacypolicy = () => {
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
            content: "Investment Property Trust ('we,' 'our,' or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or interact with us.",
            note: "This policy applies to all personal information collected through our website, mobile applications, and during business operations."
        },
        {
            id: "information-collection",
            title: "Information We Collect",
            content: "We collect several types of information from and about users of our services:",
            items: [
                "Personal Identification Information: Name, email address, phone number, mailing address",
                "Professional Information: Occupation, income level, investment preferences",
                "Financial Information: Investment goals, property preferences, budget ranges",
                "Technical Information: IP address, browser type, device information, cookies data",
                "Usage Data: Pages visited, time spent, property views, search queries",
                "Communication Data: Emails, chat transcripts, call recordings (with consent)"
            ]
        },
        {
            id: "collection-methods",
            title: "How We Collect Information",
            content: "We collect information through various methods:",
            items: [
                "Direct Interactions: When you fill out forms, contact us, or use our services",
                "Automated Technologies: Cookies, web beacons, and similar tracking technologies",
                "Third Parties: From business partners, public databases, and marketing partners",
                "Property Inquiries: When you express interest in properties or request information",
                "Service Usage: Through your interaction with our website and services"
            ],
            additional: "We only collect information necessary for legitimate business purposes."
        },
        {
            id: "cookies-tracking",
            title: "Cookies & Tracking Technologies",
            content: "We use cookies and similar technologies to enhance your experience:",
            items: [
                "Essential Cookies: Required for website functionality and security",
                "Analytics Cookies: Help us understand how visitors use our site",
                "Preference Cookies: Remember your settings and preferences",
                "Marketing Cookies: Deliver relevant property advertisements",
                "Third-Party Cookies: From trusted partners like Google Analytics"
            ],
            additional: "You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality."
        },
        {
            id: "data-use",
            title: "How We Use Your Information",
            content: "We use your personal information for the following purposes:",
            items: [
                "Provide and maintain our real estate services",
                "Process transactions and manage property inquiries",
                "Communicate with you about properties and services",
                "Personalize your experience and show relevant content",
                "Improve our website and services based on feedback",
                "Send marketing communications (with your consent)",
                "Comply with legal obligations and prevent fraud",
                "Conduct market research and analysis"
            ]
        },
        {
            id: "data-sharing",
            title: "Information Sharing & Disclosure",
            content: "We may share your information with:",
            items: [
                "Service Providers: Trusted partners who assist in our operations",
                "Legal Authorities: When required by law or legal process",
                "Business Partners: For joint property offerings or promotions",
                "Professional Advisors: Lawyers, accountants, and consultants",
                "Affiliated Companies: Within our corporate group for business purposes"
            ],
            note: "We never sell your personal information to third parties for marketing purposes."
        },
        {
            id: "data-protection",
            title: "Data Protection & Security",
            content: "We implement comprehensive security measures:",
            items: [
                "Encryption: Industry-standard SSL/TLS encryption for data transmission",
                "Access Controls: Strict access limitations to personal information",
                "Regular Audits: Security assessments and vulnerability testing",
                "Employee Training: Privacy and security awareness programs",
                "Incident Response: Procedures for data breach notification",
                "Secure Storage: Protected servers and cloud infrastructure"
            ],
            additional: "While we implement robust security measures, no system is completely secure."
        },
        {
            id: "data-retention",
            title: "Data Retention",
            content: "We retain personal information only as long as necessary:",
            items: [
                "Active Clients: Data retained while you use our services",
                "Inactive Accounts: Information kept for 5 years after last activity",
                "Legal Requirements: Retention as required by applicable laws",
                "Property Transactions: Records maintained for 10 years minimum",
                "Marketing Lists: Contact information until opt-out requested"
            ],
            additional: "You may request deletion of your data, subject to legal requirements."
        },
        {
            id: "user-rights",
            title: "Your Rights & Choices",
            content: "Depending on your location, you may have the following rights:",
            items: [
                "Access: Right to request copies of your personal information",
                "Correction: Right to correct inaccurate or incomplete data",
                "Deletion: Right to request deletion of your personal information",
                "Restriction: Right to restrict processing of your data",
                "Portability: Right to data portability to another service",
                "Objection: Right to object to processing for direct marketing",
                "Consent Withdrawal: Right to withdraw consent at any time"
            ]
        },
        {
            id: "marketing-communications",
            title: "Marketing Communications",
            content: "We may send marketing communications if:",
            items: [
                "You have explicitly consented to receive them",
                "You are an existing client (soft opt-in)",
                "The communications relate to similar properties or services",
                "You can opt-out at any time using unsubscribe links",
                "We provide clear methods to manage preferences"
            ],
            additional: "You can manage your marketing preferences through your account settings or by contacting us."
        },
        {
            id: "third-party-websites",
            title: "Third-Party Websites",
            content: "Our website may contain links to third-party sites:",
            items: [
                "We are not responsible for third-party privacy practices",
                "Third-party sites have their own privacy policies",
                "We encourage reviewing third-party policies before sharing data",
                "Links are provided for convenience and information only",
                "We do not endorse third-party privacy practices"
            ]
        },
        {
            id: "children-privacy",
            title: "Children's Privacy",
            content: "Our services are not directed to individuals under 18:",
            items: [
                "We do not knowingly collect data from children under 18",
                "If we discover such data, we will delete it promptly",
                "Parents/guardians should contact us regarding child data",
                "Our services involve financial decisions inappropriate for minors",
                "We implement age verification for certain services"
            ]
        },
        {
            id: "international-transfers",
            title: "International Data Transfers",
            content: "Your information may be transferred internationally:",
            items: [
                "Transfers occur only to countries with adequate protection",
                "We use Standard Contractual Clauses for EU/UK transfers",
                "We ensure appropriate safeguards for all international transfers",
                "You consent to such transfers by using our services",
                "We comply with international data protection regulations"
            ]
        },
        {
            id: "policy-updates",
            title: "Changes to This Privacy Policy",
            content: "We may update this Privacy Policy periodically:",
            items: [
                "Updates will be posted on this page with effective date",
                "Material changes will be communicated via email or notice",
                "Continued use constitutes acceptance of updated policy",
                "We encourage regular review of this policy",
                "Previous versions available upon request"
            ],
            additional: "We will not reduce your rights under this Privacy Policy without explicit consent."
        },
        {
            id: "contact",
            title: "Contact Information",
            content: "For privacy-related inquiries or to exercise your rights:"
        }
    ];

    const lastUpdated = "December 2025";

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-300 to-indigo-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/60 backdrop-blur-sm rounded-2xl mb-6">
                            <Shield className="w-8 h-8 text-indigo-900" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-900 text-lg md:text-xl mb-8">
                            Protecting Your Personal Information & Privacy Rights
                        </p>
                        <div className="inline-flex items-center space-x-2 border border-indigo-900 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                            <Lock className="w-4 h-4 text-indigo-900" />
                            <span className="text-indigo-900 text-sm">Last Updated: {lastUpdated}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-8 bg-indigo-50 border-y border-indigo-200">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                    <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-indigo-900">Your Privacy Matters</h3>
                                    <p className="text-sm text-indigo-800">
                                        We are committed to protecting your personal information with the highest standards of security.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Lock className="w-4 h-4 text-indigo-600" />
                                <span className="text-indigo-800">GDPR & CCPA Compliant</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Overview */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                    <Database className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="font-bold text-indigo-900">Data Collection</h3>
                            </div>
                            <p className="text-indigo-800 text-sm">
                                We collect only necessary information for legitimate business purposes and property services.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-purple-50 p-6 rounded-2xl border border-purple-100"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="font-bold text-purple-900">Your Rights</h3>
                            </div>
                            <p className="text-purple-800 text-sm">
                                You have rights to access, correct, delete, and restrict processing of your personal data.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-blue-50 p-6 rounded-2xl border border-blue-100"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <Server className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-blue-900">Security</h3>
                            </div>
                            <p className="text-blue-800 text-sm">
                                Enterprise-grade security measures protect your data with encryption and access controls.
                            </p>
                        </motion.div>
                    </div>
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
                                    Policy Sections
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
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                            <Eye className="w-4 h-4" />
                                            <span>Transparent data practices</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                            <User className="w-4 h-4" />
                                            <span>Your privacy rights protected</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Privacy Content */}
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
                                            <Shield className="w-6 h-6 text-primary" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                            Introduction & Scope
                                        </h2>
                                    </div>
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                            Investment Property Trust ('we,' 'our,' or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or interact with us.
                                        </p>
                                        <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                                            <h4 className="font-semibold text-indigo-900 mb-2">Policy Coverage</h4>
                                            <p className="text-indigo-800">
                                                This policy applies to all personal information collected through our website, mobile applications, and during business operations. By using our services, you consent to the data practices described in this policy.
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
                                                {section.id === "information-collection" && <Database className="w-6 h-6 text-primary" />}
                                                {section.id === "collection-methods" && <Eye className="w-6 h-6 text-primary" />}
                                                {section.id === "cookies-tracking" && <Cookie className="w-6 h-6 text-primary" />}
                                                {section.id === "data-use" && <Bell className="w-6 h-6 text-primary" />}
                                                {section.id === "data-sharing" && <Users className="w-6 h-6 text-primary" />}
                                                {section.id === "data-protection" && <Lock className="w-6 h-6 text-primary" />}
                                                {section.id === "data-retention" && <Server className="w-6 h-6 text-primary" />}
                                                {section.id === "user-rights" && <User className="w-6 h-6 text-primary" />}
                                                {section.id === "marketing-communications" && <Bell className="w-6 h-6 text-primary" />}
                                                {section.id === "third-party-websites" && <Globe className="w-6 h-6 text-primary" />}
                                                {section.id === "children-privacy" && <Users className="w-6 h-6 text-primary" />}
                                                {section.id === "international-transfers" && <Globe className="w-6 h-6 text-primary" />}
                                                {section.id === "policy-updates" && <FileText className="w-6 h-6 text-primary" />}
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
                                                <div className="mt-6 p-6 bg-green-50 rounded-xl border border-green-100">
                                                    <div className="flex items-start space-x-3">
                                                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
                                                        <div>
                                                            <p className="font-medium text-green-800">
                                                                {section.note}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {section.id === "contact" && (
                                                <div className="mt-8 p-8 bg-card rounded-2xl border shadow-sm">
                                                    <div className="grid md:grid-cols-2 gap-8">
                                                        <div>
                                                            <h4 className="font-semibold text-foreground mb-4">Privacy Officer</h4>
                                                            <div className="space-y-4">
                                                                <div className="flex items-center space-x-3">
                                                                    <Mail className="w-5 h-5 text-muted-foreground" />
                                                                    <span className="text-foreground">privacy@investmentpropertytrust.com</span>
                                                                </div>
                                                                <div className="flex items-center space-x-3">
                                                                    <Phone className="w-5 h-5 text-muted-foreground" />
                                                                    <span className="text-foreground">775-552-9163
 (ext. 2)</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-foreground mb-4">Data Protection Rights</h4>
                                                            <div className="space-y-2">
                                                                <p className="text-sm text-muted-foreground">
                                                                    To exercise your data protection rights, please contact our Privacy Officer with:
                                                                </p>
                                                                <ul className="text-sm text-muted-foreground space-y-1">
                                                                    <li>• Your full name and contact information</li>
                                                                    <li>• Specific right you wish to exercise</li>
                                                                    <li>• Details of your request</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 pt-6 border-t">
                                                        <p className="text-sm text-muted-foreground">
                                                            We respond to all privacy inquiries within 30 days. For complaints, you may also contact your local data protection authority.
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Security Commitment Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200"
                                >
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground mb-2">
                                                Our Security Commitment
                                            </h3>
                                            <p className="text-muted-foreground mb-4">
                                                We implement industry-leading security measures to protect your personal information:
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex items-center space-x-2">
                                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                                    <span className="text-sm text-foreground">End-to-end encryption</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                                    <span className="text-sm text-foreground">Regular security audits</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                                    <span className="text-sm text-foreground">Access control systems</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                                    <span className="text-sm text-foreground">GDPR & CCPA compliant</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="text-center mb-4">
                                                <div className="text-3xl font-bold text-indigo-600">ISO 27001</div>
                                                <div className="text-sm text-muted-foreground">Certified</div>
                                            </div>
                                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                                                <ShieldCheck className="w-8 h-8 text-indigo-600" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cookie Preferences */}
            {/* <section className="py-12 bg-gray-50 border-y">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-white rounded-2xl p-8 border shadow-sm">
                            <div className="flex items-center space-x-3 mb-6">
                                <Cookie className="w-8 h-8 text-amber-600" />
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">Cookie Preferences</h3>
                                    <p className="text-muted-foreground text-sm">Manage your cookie settings</p>
                                </div>
                            </div>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <h4 className="font-medium text-foreground">Essential Cookies</h4>
                                        <p className="text-sm text-muted-foreground">Required for website functionality</p>
                                    </div>
                                    <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        Always Active
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <h4 className="font-medium text-foreground">Analytics Cookies</h4>
                                        <p className="text-sm text-muted-foreground">Help us improve our website</p>
                                    </div>
                                    <Button variant="outline" size="sm">Manage</Button>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div>
                                        <h4 className="font-medium text-foreground">Marketing Cookies</h4>
                                        <p className="text-sm text-muted-foreground">Show relevant property ads</p>
                                    </div>
                                    <Button variant="outline" size="sm">Manage</Button>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 justify-end">
                                <Button variant="outline" size="sm">Accept All</Button>
                                <Button variant="outline" size="sm">Reject All</Button>
                                <Button size="sm">Save Preferences</Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="py-16 bg-secondary">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/60 backdrop-blur-sm rounded-2xl mb-6">
                            <Shield className="w-10 h-10 text-indigo-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Have Privacy Questions?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Contact our dedicated Privacy Officer for any questions about your data or privacy rights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                                <Link to="/contact">
                                    Contact Privacy Officer
                                    <Mail className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link to="/terms-conditions">
                                    View Terms & Conditions
                                    <FileText className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-8">
                            Response time: Within 30 days for data requests • No fee for standard requests
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Privacypolicy;
