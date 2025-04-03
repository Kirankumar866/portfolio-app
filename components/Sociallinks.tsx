'use client';
import { GithubIcon, LinkedInIcon } from './social-icons';

const socialLinks = {
    github: "https://github.com/kirankumar866",
    linkedin: "https://www.linkedin.com/in/kiran-kumar-parasa-09210b325/"
};

export default function SocialLinks() {
    return (
        <div className="flex gap-4">
            <a
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
            >
                <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
            </a>
            <a
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
            </a>
        </div>
    );
}
