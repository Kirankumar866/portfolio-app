import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export default function ResumeSection() {
    return (
        <section id="resume" className="text-center py-6 sm:py-8 lg:py-10 scroll-mt-20 px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-content mb-3 sm:mb-4">Download My Resume</h2>
            <p className="text-content/80 mb-4 sm:mb-6 text-sm sm:text-base">
                Click the button below to download my resume in PDF format.
            </p>
            <a
                href="https://cdn.builder.io/o/assets%2F6c85aef6d4144507985b5fb9594301e8%2F83a9b31d858a4ec9a7f2195ff0b1398f?alt=media&token=75d4a7c2-bd64-4c86-8826-f9790b7e96b9&apiKey=6c85aef6d4144507985b5fb9594301e8"
                download="KiranKumar_SDE.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-tertiary text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg shadow-lg hover:scale-105 transition-transform text-sm sm:text-base"
            >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download Resume
            </a>
        </section>
    );
}
