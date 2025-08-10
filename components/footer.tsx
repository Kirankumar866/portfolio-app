import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedInIcon } from "./social-icons";

const socialLinks = {
    github: "https://github.com/kirankumar866",
    linkedin: "https://www.linkedin.com/in/kiran-kumar-parasa-09210b325/"
};

export default function Footer(){
    return (
        <footer 
        id ='contact'
        className="border-t bg-gray-900 border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full justify-between">
                {/* About Section */}
                <div className="pl-14">
                    <h3 className="text-white text-lg font-semibold mb-4">About</h3>
                    <p className="text-gray-400">
                        Building digital experiences that combine modern technology with exceptional design.
                    </p>
                </div>

                {/* Links Section */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Legal Section
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                        <li><a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                    </ul>
                </div> */}

                {/* Connect Section */}
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                    <ul className="justify-center flex space-x-4">
                        <li>
                        <a href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer">
                            <GithubIcon className="text-gray-400 h-6 w-6 hover:text-white transition-colors"/>
                        </a> </li>
                        <li>
                        <a href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer">
                            <LinkedInIcon className="text-gray-400 h-6 w-6 hover:text-white transition-colors"/>
                            </a></li> 
                        <li>
                            <a href="mailto:kirankumar201018@gmail.com?cc=parasakirankumar1825@gmail.com,s561500@nwmissouri.edu&subject=Trying to reach you from Portfolio!&body=Hi Kiran,"
                            target="_blank"
                            rel="nofollow noopener noreferrer">
                                <EnvelopeIcon className="text-gray-400 h-6 w-6 hover:text-white transition-colors"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

                <div className="border-t border-gray-800 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center">
                    <p>
                        &copy; {new Date().getFullYear()} Kiran Parasa. All rights reserved.
                    </p>
                </div>
            </div>

        </footer>
    )
}
