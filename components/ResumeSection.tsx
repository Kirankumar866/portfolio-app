import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export default function ResumeSection() {
    return (
        <section id="resume" className="text-center py-6 sm:py-8 lg:py-10 scroll-mt-20 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-content mb-3 sm:mb-4">Download My Resume</h2>
            <p className="text-content/80 mb-4 sm:mb-6 text-sm sm:text-base">
                Click the button below to download my resume in PDF format.
            </p>
            <a
                href="/KiranKumarParasa.pdf"
                download="Kiran_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-tertiary text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-sm sm:text-base"
            >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download Resume
            </a>
        </section>
    );
}
