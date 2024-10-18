import React from 'react';
import { FaGithub, FaGitlab} from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si'; // Importing HackerRank icon


const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-4'>
				<p className='text-white text-center w-full sm:w-auto font-light'>© {year} Srinithi. All rights reserved.</p>
				<div className='text-white flex justify-around sm:w-[250px] w-full'>
					
					<a href="mailto:srinithi33.k@gmail.com" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FiMail className='text-xl' />
					</a>
					
					<a href="https://in.linkedin.com/in/srinithi-k" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillLinkedin className='text-xl' />
					</a>
					<a href="https://github.com/srinithi33-k/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
						<FaGithub className='text-xl' />
					</a>
					<a href="https://gitlab.com/enterprise_projects/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
						<FaGitlab className='text-xl' />
					</a>
					<a href="https://www.hackerrank.com/profile/srinithi33_k" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
                        <SiHackerrank className='text-xl' />
                    </a>
					
				</div>
			</div>
		</div>
	);
}

export default Footer;