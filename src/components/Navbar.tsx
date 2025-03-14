import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import NavLogo from "/assets/navLogo.png";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const navBg = "#ecf0f3";
	const linkColor = "#1f2937";

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
					: "fixed w-full h-20 z-[100]"
			}
		>
			<div className="flex justify-between items-center h-full px-2 2xl:px-16 ">
				<Link href="/">
					<a>
						<Image
							src={NavLogo}
							alt="/"
							width="125"
							height="50"
							className="cursor-pointer"
							loading="lazy"
						/>
					</a>
				</Link>
				<div>
					<ul style={{ color: `${linkColor}` }} className="hidden md:flex">
						<li className="ml-10 text-sm uppercase hover:border-b hover:text-primary">
							<Link href="/">Home</Link>
						</li>
						<li className="ml-10 text-sm uppercase hover:border-b hover:text-primary">
							<Link href="/#about">About</Link>
						</li>
						<li className="ml-10 text-sm uppercase hover:border-b hover:text-primary">
							<Link href="/#contact">Contact</Link>
						</li>
					</ul>
					<div style={{ color: `${linkColor}` }} onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
				<div
					className={
						nav
							? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<a>
									<Image src={NavLogo} width="87" height="35" alt="/" loading="lazy" />
								</a>
							</Link>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">Welcome</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/" className="hover:text-primary">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Home
								</li>
							</Link>
							<Link href="/#about" className="hover:text-primary">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									About
								</li>
							</Link>
							<Link href="/#contact" className="hover:text-primary">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Contact
								</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-primary">Let&#39;s Connect</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<a
									href="#"
									target="_blank"
									rel="noreferrer"
								>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in hover:bg-secondary duration-300">
										<FaLinkedinIn title="Linkedin" />
									</div>
								</a>
								<a href="#" target="_blank" rel="noreferrer">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in hover:bg-secondary duration-300">
										<FaGithub title="GitHub" />
									</div>
								</a>
								<Link href="/#contact">
									<div
										onClick={() => setNav(!nav)}
										className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in hover:bg-secondary duration-300"
									>
										<AiOutlineMail title="Contact" />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
